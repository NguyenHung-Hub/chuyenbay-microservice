package com.example.maybay.controllers;


import com.example.maybay.models.MayBay;
import com.example.maybay.services.MayBayService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api/maybays")
public class MayBayController {

    private final MayBayService mayBayService;

    @Autowired
    public MayBayController(MayBayService mayBayService) {
        this.mayBayService = mayBayService;

    }


    @GetMapping
    public List<MayBay> getAll() {

        return mayBayService.getAll();
    }

    @GetMapping("/{id}")
    public MayBay get(@PathVariable String id) {

        return mayBayService.getById(id);
    }

    @PostMapping
    public MayBay create(@RequestBody MayBay mayBay) {
        System.out.println(mayBay);
        return mayBayService.create(mayBay);
    }

    @PutMapping
    public MayBay update(@RequestBody MayBay mayBay) {
        return mayBayService.update(mayBay);
    }


}
