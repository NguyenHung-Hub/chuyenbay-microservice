package com.example.chuyenbay.database;

import com.example.chuyenbay.models.ChuyenBay;
import com.example.chuyenbay.repo.ChuyenBayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Database implements CommandLineRunner{

//    @Bean
//    CommandLineRunner initDatabase(ChuyenBayRepository repository) {
//        return new CommandLineRunner() {
//            @Override
//            public void run(String... args) throws Exception {
//                repository.save(new ChuyenBay("VN431", "SGN","CAH",3693,"05:55","06:55", 236));
//                repository.save(new ChuyenBay("VN320", "SGN","DAD",2798,"06:00","07:10", 221));
//                repository.save(new ChuyenBay("VN464", "SGN","DLI",2002,"07:20","08:05", 225));
//            }
//
//        };
//    }

    @Autowired
    ChuyenBayRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(new ChuyenBay("VN431", "SGN","CAH",3693,"05:55","06:55", 236));
        repository.save(new ChuyenBay("VN320", "SGN","DAD",2798,"06:00","07:10", 221));
        repository.save(new ChuyenBay("VN464", "SGN","DLI",2002,"07:20","08:05", 225));
        repository.save(new ChuyenBay("VN216", "SGN", "DIN", 4170, "10:30", "14:20", 262));
        repository.save(new ChuyenBay("VN280", "SGN", "HPH", 11979, "06:00", "08:00", 1279));
        repository.save(new ChuyenBay("VN254", "SGN", "HUI", 8765, "18:40", "20:00", 781));
        repository.save(new ChuyenBay("VN338", "SGN", "BMV", 4081, "15:25", "16:25", 375));
        repository.save(new ChuyenBay("VN440", "SGN", "BMV", 4081, "18:30", "19:30", 426));
        repository.save(new ChuyenBay("VN651", "DAD", "SGN", 2798, "19:30", "08:00", 221));
        repository.save(new ChuyenBay("VN276", "DAD", "CXR", 1283, "09:00", "12:00", 203));
        repository.save(new ChuyenBay("VN374", "HAN", "VII", 510,	"11:40", "13:25", 120));
        repository.save(new ChuyenBay("VN375", "VII", "CXR", 752,	"14:15", "16:00", 181));
        repository.save(new ChuyenBay("VN269", "HAN", "CXR", 1262, "14:10", "15:50", 202));
        repository.save(new ChuyenBay("VN315", "HAN", "DAD", 134,	"11:45", "13:00", 112));
        repository.save(new ChuyenBay("VN317", "HAN", "UIH", 827,	"15:00", "16:15", 190));
        repository.save(new ChuyenBay("VN741", "HAN", "PXU", 395,	"06:30", "08:30", 120));
        repository.save(new ChuyenBay("VN474", "PXU", "PQC", 1586, "08:40", "11:20", 102));

//        repository.save(new ChuyenBay("VN476", "UIH", "PQC", 485,	"09:15", "11:50", 117));
    }
}
