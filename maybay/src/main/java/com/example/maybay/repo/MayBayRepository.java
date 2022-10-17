package com.example.maybay.repo;

import com.example.maybay.models.MayBay;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


@Repository
@Transactional
public interface MayBayRepository extends JpaRepository<MayBay,String> {

    MayBay findByMaMB(String maMB);
}
