package com.example.maybay.models;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "maybay")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class MayBay {
    @Id
    private String maMB;
    private String loai;
    private Integer tamBay;
}
