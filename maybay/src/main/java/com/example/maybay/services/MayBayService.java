package com.example.maybay.services;

import com.example.maybay.models.MayBay;

import java.util.List;

public interface MayBayService {
    List<MayBay> getAll();
    MayBay getById(String maMB);
    MayBay create(MayBay mayBay);
    MayBay update(MayBay mayBay);



}

