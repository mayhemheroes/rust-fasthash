(function() {var implementors = {};
implementors["fasthash"] = ["impl&lt;T:&nbsp;<a class='trait' href='fasthash/trait.FastHash.html' title='fasthash::FastHash'>FastHash</a>&gt; <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/struct.RandomState.html' title='fasthash::RandomState'>RandomState</a>&lt;T&gt;","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/city/struct.CityHash32.html' title='fasthash::city::CityHash32'>CityHash32</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/city/struct.CityHash64.html' title='fasthash::city::CityHash64'>CityHash64</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/city/struct.CityHash128.html' title='fasthash::city::CityHash128'>CityHash128</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/city/struct.CityHashCrc128.html' title='fasthash::city::CityHashCrc128'>CityHashCrc128</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/farm/struct.FarmHash32.html' title='fasthash::farm::FarmHash32'>FarmHash32</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/farm/struct.FarmHash64.html' title='fasthash::farm::FarmHash64'>FarmHash64</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/farm/struct.FarmHash128.html' title='fasthash::farm::FarmHash128'>FarmHash128</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/lookup3/struct.Lookup3.html' title='fasthash::lookup3::Lookup3'>Lookup3</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash64_1.html' title='fasthash::metro::MetroHash64_1'>MetroHash64_1</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash64_2.html' title='fasthash::metro::MetroHash64_2'>MetroHash64_2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash128_1.html' title='fasthash::metro::MetroHash128_1'>MetroHash128_1</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash128_2.html' title='fasthash::metro::MetroHash128_2'>MetroHash128_2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash64Crc_1.html' title='fasthash::metro::MetroHash64Crc_1'>MetroHash64Crc_1</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash64Crc_2.html' title='fasthash::metro::MetroHash64Crc_2'>MetroHash64Crc_2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash128Crc_1.html' title='fasthash::metro::MetroHash128Crc_1'>MetroHash128Crc_1</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/metro/struct.MetroHash128Crc_2.html' title='fasthash::metro::MetroHash128Crc_2'>MetroHash128Crc_2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/mum/struct.MumHash.html' title='fasthash::mum::MumHash'>MumHash</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur/struct.Murmur.html' title='fasthash::murmur::Murmur'>Murmur</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur/struct.MurmurAligned.html' title='fasthash::murmur::MurmurAligned'>MurmurAligned</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur2/struct.Murmur2.html' title='fasthash::murmur2::Murmur2'>Murmur2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur2/struct.Murmur2A.html' title='fasthash::murmur2::Murmur2A'>Murmur2A</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur2/struct.MurmurNeutral2.html' title='fasthash::murmur2::MurmurNeutral2'>MurmurNeutral2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur2/struct.MurmurAligned2.html' title='fasthash::murmur2::MurmurAligned2'>MurmurAligned2</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur2/struct.Murmur2_x64_64.html' title='fasthash::murmur2::Murmur2_x64_64'>Murmur2_x64_64</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur2/struct.Murmur2_x86_64.html' title='fasthash::murmur2::Murmur2_x86_64'>Murmur2_x86_64</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur3/struct.Murmur3_x86_32.html' title='fasthash::murmur3::Murmur3_x86_32'>Murmur3_x86_32</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur3/struct.Murmur3_x86_128.html' title='fasthash::murmur3::Murmur3_x86_128'>Murmur3_x86_128</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/murmur3/struct.Murmur3_x64_128.html' title='fasthash::murmur3::Murmur3_x64_128'>Murmur3_x64_128</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='https://doc.rust-lang.org/nightly/std/collections/hash/map/struct.RandomState.html' title='std::collections::hash::map::RandomState'>RandomState</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/sea/struct.SeaHash.html' title='fasthash::sea::SeaHash'>SeaHash</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/spooky/struct.SpookyHash32.html' title='fasthash::spooky::SpookyHash32'>SpookyHash32</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/spooky/struct.SpookyHash64.html' title='fasthash::spooky::SpookyHash64'>SpookyHash64</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/spooky/struct.SpookyHash128.html' title='fasthash::spooky::SpookyHash128'>SpookyHash128</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/t1ha/struct.T1ha64Le.html' title='fasthash::t1ha::T1ha64Le'>T1ha64Le</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/t1ha/struct.T1ha64Be.html' title='fasthash::t1ha::T1ha64Be'>T1ha64Be</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/t1ha/struct.T1ha32Le.html' title='fasthash::t1ha::T1ha32Le'>T1ha32Le</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/t1ha/struct.T1ha32Be.html' title='fasthash::t1ha::T1ha32Be'>T1ha32Be</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/t1ha/struct.T1ha64Crc.html' title='fasthash::t1ha::T1ha64Crc'>T1ha64Crc</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/xx/struct.XXHash32.html' title='fasthash::xx::XXHash32'>XXHash32</a>","impl <a class='trait' href='https://doc.rust-lang.org/nightly/core/hash/trait.BuildHasher.html' title='core::hash::BuildHasher'>BuildHasher</a> for <a class='struct' href='fasthash/xx/struct.XXHash64.html' title='fasthash::xx::XXHash64'>XXHash64</a>",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
