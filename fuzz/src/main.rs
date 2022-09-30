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
    if data.len() > 1 {
        let opt = data[0];
        let fuzz_data = &data[1..];
        match opt {
            0=> {
                city::hash128(fuzz_data);
            },
            1=> {
                farm::hash128(fuzz_data);
            },
            2=> {
                highway::hash128(fuzz_data);
            },
            3=> {
                komi::hash64(fuzz_data);
            },
            _=> (),
        }
    }
}