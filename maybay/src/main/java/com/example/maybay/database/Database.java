package com.example.maybay.database;

import com.example.maybay.models.MayBay;
import com.example.maybay.repo.MayBayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

@Configuration
public class Database implements CommandLineRunner {
    @Autowired
    private MayBayRepository repository;

    @Override
    public void run(String... args) throws Exception {
        repository.save(new MayBay("747", "Boeing 747 - 400", 13488));
        repository.save(new MayBay("737", "Boeing 737 - 800", 5413));
        repository.save(new MayBay("340", "Airbus A340 - 300", 11392));
        repository.save(new MayBay("757", "Boeing 757 - 300", 6416));
        repository.save(new MayBay("777", "Boeing 777 - 300", 10306));
        repository.save(new MayBay("767", "Boeing 767 - 400ER", 10360));
        repository.save(new MayBay("320", "Airbus A320", 4168));
        repository.save(new MayBay("319", "Airbus A319", 2888));
        repository.save(new MayBay("727", "Boeing 727", 2406));
        repository.save(new MayBay("154", "Tupolev 154", 6565));
    }
}
