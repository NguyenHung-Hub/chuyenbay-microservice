package com.example.chuyenbay.repo;

import com.example.chuyenbay.models.ChuyenBay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public interface ChuyenBayRepository extends JpaRepository<ChuyenBay,String> {

    ChuyenBay findByMaCB(String maCB);
    List<ChuyenBay> findChuyenBayByGaDen(String gaDen);
}
