package com.springrest.assignment3.controller;

import java.util.List;

import com.springrest.assignment3.entities.zipcode;
import com.springrest.assignment3.services.zipcodeServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

    @Autowired
    private zipcodeServices ZipcodeService;

    @GetMapping("/country-details/{id}")
    public zipcode getByZipcode(@PathVariable("id") int id) {
        System.out.println("Zipcode is: " + id);
        return ZipcodeService.getzipcodeByzipcode(id);

    }

    @GetMapping("/country-details")
    public List<zipcode> getAll() {

        for (zipcode z : ZipcodeService.getAll()) {
            System.out.println(z);
        }
        return ZipcodeService.getAll();
    }

}
