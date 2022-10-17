package com.example.chuyenbay.services;

import com.example.chuyenbay.models.ChuyenBay;

import java.util.List;

public interface ChuyenBayService {
    List<ChuyenBay> getAll();
    ChuyenBay getById(String maCB);
    ChuyenBay create(ChuyenBay chuyenBay);
    ChuyenBay update(ChuyenBay chuyenBay);

    List<ChuyenBay>  findChuyenBayByGaDen(String gaDen);


}
