use fasthash::*;
use std::io::Read;
use std::io::BufReader;
use std::env;

fn main() {
    let args: Vec<String> = env::args().collect();
    if args.len() > 1 {
        let file = std::fs::File::open(&args[1]).expect("Bad Filename");
        let mut data_vec = Vec::new();
        let mut reader = BufReader::new(file);
    
        let read_result = reader.read_to_end(&mut data_vec);
        match read_result {
            Ok(_)=> {
                let slice_fuzz_data = & data_vec[..];
                fuzz_target(slice_fuzz_data);
            },
            Err(_)=>panic!("Bad file read")
        }
    }
}


fn fuzz_target(data: &[u8]) {
    if data.len() > 8 + 1 {
        let opt = data[0];
        let seed = unsafe{std::ptr::read(&data[1])} as u64;
        let fuzz_data = &data[9..];
        match opt {
            0=> {
                city::hash128_with_seed(fuzz_data, seed.into());
            },
            1=> {
                farm::hash128_with_seed(fuzz_data, seed.into());
            },
            2=> {
                highway::hash128_with_seed(fuzz_data, [seed, seed, seed, seed]);
            },
            3=> {
                komi::hash64_with_seed(fuzz_data, seed);
            },
            4=> {
                metro::hash128_with_seed(fuzz_data, seed.try_into().expect("Fuzzing Issue"));
            },
            5=> {
                murmur3::hash128_with_seed(fuzz_data, seed.try_into().expect("Fuzzing Issue"));
            },
            6=> {
                spooky::hash128_with_seed(fuzz_data, seed.into());
            },
            7=> {
                xxh3::hash128_with_seed(fuzz_data, seed);
            },
            8=> {
                umash::hash128_with_seed(fuzz_data, seed);
            },
            _=> (),
        }
    }
}