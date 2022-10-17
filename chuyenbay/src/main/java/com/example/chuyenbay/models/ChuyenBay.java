package com.example.chuyenbay.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "chuyenbay")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class ChuyenBay{

    @Id
    private String maCB;
    private String gaDi;
    private String gaDen;
    private Integer doDai;
    private String gioDi;
    private String gioDen;
    private Integer chiPhi;
}

