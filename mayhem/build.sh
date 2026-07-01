#!/usr/bin/env bash
#
# mayhem/build.sh — build this repo's cargo-fuzz target(s) as sanitized libFuzzer
# binaries (OSS-Fuzz Rust path: cargo-fuzz + ASan via RUSTFLAGS). EDIT per repo.
#
# Runs inside the commit image (RUST mayhem/Dockerfile) as `mayhem` in /mayhem.
# The Rust toolchain + cargo registry live at $CARGO_HOME=/opt/toolchains/rust/cargo
# (pinned by the Dockerfile ENV — absolute, $HOME-independent).
#
# AIR-GAPPED CONTRACT (SPEC §6.5): the PATCH tier re-runs THIS script OFFLINE.
#   - This FIRST build (in CI, online) populates the cargo registry under $CARGO_HOME.
#   - The PATCH re-run resolves crates from that cache. The rlenv runtime exports
#     CARGO_NET_OFFLINE=true for the re-run so cargo won't try to refresh the
#     crates.io index over the (absent) network — so do NOT hard-code `--offline`
#     here (it would break this first, online build).
#   - For a FULLY self-contained image (no runtime flag needed) instead vendor:
#       cargo vendor --versioned-dirs vendor   # commit vendor/ + a .cargo/config.toml
#     with [source.crates-io] replace-with = "vendored-sources".
set -euo pipefail

# clang rejects SOURCE_DATE_EPOCH='' — must be unset or a valid integer.
[ -n "${SOURCE_DATE_EPOCH:-}" ] || unset SOURCE_DATE_EPOCH

: "${MAYHEM_JOBS:=$(nproc)}"
# cargo-fuzz has no --jobs flag; cargo reads parallelism from CARGO_BUILD_JOBS.
export CARGO_BUILD_JOBS="$MAYHEM_JOBS"

cd "$SRC"

# OSS-Fuzz Rust libFuzzer+ASan flags. cargo-fuzz sets the ASan flag itself, but we
# pin it explicitly. --cfg fuzzing matches libfuzzer-sys; force-frame-pointers aids
# ASan backtraces. The rlenv PATCH tier prepends `-C debuginfo=2`; we don't fight it.
# Honor the $SANITIZER_FLAGS contract (SPEC): rustc ignores the clang-oriented
# $SANITIZER_FLAGS, so we map the ASan intent to the rustc flag. ASan is the default
# halting sanitizer; an explicit empty SANITIZER_FLAGS still keeps ASan here.
SANITIZER_FLAGS="${SANITIZER_FLAGS:-}"
RUST_SANITIZER="-Zsanitizer=address"
case "$SANITIZER_FLAGS" in
  *address*|"") : ;;  # ASan requested (default) or no override
esac

# Debug-info contract (SPEC 6.2 item 10): Mayhem triage cannot read DWARF >= 4, and
# LLVM default -Cdebuginfo emits DWARF-5, so pin DWARF < 4 explicitly. Overridable
# via $RUST_DEBUG_FLAGS (the rust arm of the DEBUG_FLAGS contract verify-repo checks).
export RUST_DEBUG_FLAGS="${RUST_DEBUG_FLAGS:--Cdebuginfo=1 -Zdwarf-version=3}"

export RUSTFLAGS="${RUSTFLAGS:-} --cfg fuzzing ${RUST_SANITIZER} ${RUST_DEBUG_FLAGS} -Cforce-frame-pointers"

# fasthash-sys compiles C/C++ hash sources via the cc crate. clang default debug info
# is DWARF-5, which Mayhem triage cannot read — pin the C/C++ objects to DWARF-3 too
# (the cc crate honors CFLAGS/CXXFLAGS). Otherwise the linked binary carries a DWARF-5
# .debug_info from those objects and fails the DWARF < 4 gate.
export CFLAGS="${CFLAGS:-} -gdwarf-3"
export CXXFLAGS="${CXXFLAGS:-} -gdwarf-3"

# EDIT: the cargo-fuzz crate directory. Use upstream's own fuzz/ when it builds on
# the pinned nightly; otherwise add an ADDITIVE mayhem/fuzz/ crate (leaves upstream
# untouched) and point --fuzz-dir at it.
FUZZ_DIR="mayhem/fuzz"
TRIPLE="x86_64-unknown-linux-gnu"

# Discover every target by its cargo-fuzz [[bin]] NAME (the binary cargo-fuzz emits is
# named after the bin name, not the source filename). This repo intentionally keeps the
# harness source basenamed main.rs (upstream-harness parity for port-check) while the bin
# name stays fasthash-fuzz (the deployed Mayhem target), so derive from the [[bin]] names.
FUZZ_TARGETS=()
while IFS= read -r _t; do FUZZ_TARGETS+=("$_t"); done < <(
  awk '/^\[\[bin\]\]/{inbin=1; next} /^\[/{inbin=0} inbin && /name[[:space:]]*=/{if(match($0, /"[^"]+"/)) print substr($0, RSTART+1, RLENGTH-2)}' "$FUZZ_DIR/Cargo.toml"
)
[ "${#FUZZ_TARGETS[@]}" -gt 0 ] || { echo "ERROR: no [[bin]] targets in $FUZZ_DIR/Cargo.toml" >&2; exit 1; }

# The precompiled Rust ASan runtime archive (librustc-nightly_rt.asan.a) ships with
# DWARF-5 debug CUs from the toolchain build. rustc's -Zdwarf-version only governs
# OUR Rust CUs and CFLAGS only the cc-built C/C++ (libfuzzer.a etc.), so those runtime
# CUs would land in the linked binary as DWARF-5 and fail the DWARF < 4 gate (SPEC 6.2
# item 10). Triage does not need runtime debug symbols; strip debug info from that
# archive (writable: the Dockerfile chowned /opt/toolchains/rust to 2000).
for _asan in $(find /opt/toolchains/rust -name 'librustc-*_rt.asan.a' 2>/dev/null); do
  echo "stripping DWARF-5 debug info from runtime archive: $_asan"
  objcopy --strip-debug "$_asan" "$_asan.tmp" && mv "$_asan.tmp" "$_asan"
done

echo "=== cargo fuzz build (image nightly, ASan via RUSTFLAGS) ==="
echo "RUSTFLAGS=$RUSTFLAGS"
echo "targets: ${FUZZ_TARGETS[*]}"

# Use the image's DEFAULT toolchain (the Dockerfile pinned it). A `+toolchain`
# override would make rustup try to install another channel into the locked /opt/rust.
for t in "${FUZZ_TARGETS[@]}"; do
  echo "--- building fuzz target: $t ---"
  cargo fuzz build --fuzz-dir "$FUZZ_DIR" -O --debug-assertions "$t"
  bin="$SRC/$FUZZ_DIR/target/$TRIPLE/release/$t"
  [ -x "$bin" ] || { echo "ERROR: expected fuzz binary not found at $bin" >&2; exit 1; }
  cp "$bin" "/mayhem/$t"     # EDIT the output path/name to match your Mayhemfile target:
  echo "built /mayhem/$t"
done

# Build the project's OWN test suite with NORMAL flags (clean, non-sanitized) so
# mayhem/test.sh only RUNS it. The fasthash crate ships known-answer (assert_eq!)
# unit tests — a real behavioral oracle. Build them into a stable target dir.
echo "=== building fasthash test suite (normal flags) ==="
env -u RUSTFLAGS cargo test --no-run -p fasthash --target-dir "$SRC/target-tests"
echo "build.sh complete"
