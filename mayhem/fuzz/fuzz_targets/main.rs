// Additive libFuzzer harness for rust-fasthash — mirrors the dispatch logic of the
// upstream fuzz/src/main.rs (byte 0 = algorithm selector, byte 1 = seed, rest = data)
// but under libfuzzer-sys so Mayhem drives it as a real libFuzzer target. Keeps the
// upstream harness (fuzz/) untouched. Target binary name matches the original
// Mayhemfile target ("fasthash-fuzz").
#![no_main]

use fasthash::*;
use libfuzzer_sys::fuzz_target;

fuzz_target!(|data: &[u8]| {
    if data.len() > 8 + 1 {
        let opt = data[0];
        let seed = data[1] as u64;
        let fuzz_data = &data[9..];
        match opt {
            0 => {
                city::hash128_with_seed(fuzz_data, seed.into());
            }
            1 => {
                farm::hash128_with_seed(fuzz_data, seed.into());
            }
            2 => {
                highway::hash128_with_seed(fuzz_data, [seed, seed, seed, seed]);
            }
            3 => {
                komi::hash64_with_seed(fuzz_data, seed);
            }
            4 => {
                metro::hash128_with_seed(fuzz_data, seed.try_into().expect("Fuzzing Issue"));
            }
            5 => {
                murmur3::hash128_with_seed(fuzz_data, seed.try_into().expect("Fuzzing Issue"));
            }
            6 => {
                spooky::hash128_with_seed(fuzz_data, seed.into());
            }
            7 => {
                xxh3::hash128_with_seed(fuzz_data, seed);
            }
            8 => {
                umash::hash128_with_seed(fuzz_data, seed);
            }
            _ => (),
        }
    }
});
