package com.example.maybay.services;

import com.example.maybay.models.MayBay;
import com.example.maybay.repo.MayBayRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MayBayServiceImpl implements MayBayService{

    private final MayBayRepository mayBayRepository;

    @Autowired
    public  MayBayServiceImpl(MayBayRepository mayBayRepository){
        this.mayBayRepository = mayBayRepository;
    }



    @Override
    public List<MayBay> getAll() {
        return mayBayRepository.findAll();
    }

    @Override
    public MayBay getById(String maMB) {
        return mayBayRepository.findByMaMB(maMB);
    }


    @Override
    public MayBay create(MayBay mayBay) {
        return mayBayRepository.saveAndFlush(mayBay);
    }
    @Override
    public MayBay update(MayBay mayBay) {
        return mayBayRepository.save(mayBay);
    }


}

