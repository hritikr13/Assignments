package com.springrest.assignment4.controller;

import com.springrest.assignment4.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class controller {

    @Autowired
    private service service;

    @GetMapping(path = "/creditcard/{id}")
    public String creditCard(@PathVariable("id") long number) {
        boolean ans = service.isValid(number);

        if (ans == true) {
            return "Credit card is valid";
        }
        return "Credit card is not valid";
    }
}