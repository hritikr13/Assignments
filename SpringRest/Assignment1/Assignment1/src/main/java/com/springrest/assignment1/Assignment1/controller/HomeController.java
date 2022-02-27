package com.springrest.assignment1.Assignment1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@ResponseBody
public class HomeController {
    @GetMapping("/hello")
  
    public String Q1(){
        
        return("Hello World");
    }
    
}
