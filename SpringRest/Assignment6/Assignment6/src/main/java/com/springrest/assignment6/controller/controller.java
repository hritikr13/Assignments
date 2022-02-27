package com.springrest.assignment6.controller;

import com.springrest.assignment6.service.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
public class controller {

    

    @Autowired
    private service s;

    @GetMapping("/addition/{num1}/{num2}")
    public String Addition(@PathVariable("num1") int num1, @PathVariable("num2") int num2) {
        System.out.println("Number 1 = " + num1 + "/nNumber 2 = " + num2);
        return ("Addition of " + num1 + " and " + num2 + " = " + s.Addition(num1, num2));
    }

    @GetMapping("/subtraction/{num1}/{num2}")
    public String Subtraction(@PathVariable("num1") int num1, @PathVariable("num2") int num2) {
        return ("Subtraction of " + num1 + " by " + num2 + " = " + s.subtraction(num1, num2));
    }

    @GetMapping("/multiplication/{num1}/{num2}")
    public String Multiplication(@PathVariable("num1") int num1, @PathVariable("num2") int num2) {
        return ("Multiplication of " + num1 + " and " + num2 + " = " + s.multiplication(num1, num2));
    }

    @GetMapping("/division/{num1}/{num2}")
    public String Division(@PathVariable("num1") int num1, @PathVariable("num2") int num2) {
        return ("Division of " + num1 + " and " + num2 + " = " + s.division(num1, num2));
    }

    @GetMapping("/square-root/{num1}")
    public String SquareRoot(@PathVariable("num1") int num1) {
        return ("Addition of " + num1 + " = " + s.square(num1));
    }

}
