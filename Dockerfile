FROM ghcr.io/evanrichter/cargo-fuzz as builder

ADD . /rust-fasthash
WORKDIR /rust-fasthash/fuzz
RUN cargo build 

FROM debian:bookworm
COPY --from=builder /rust-fasthash/fuzz/target/debug/fasthash-fuzz /