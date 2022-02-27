package com.springsecurity.controller;

import com.springsecurity.models.User;
import com.springsecurity.services.serviceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @Autowired
    private serviceImpl Service;

    @GetMapping("/users")
    public String getAllUsers() {
        return "Hello User, Welcome to our website";
    }

    @PostMapping("/users")
    public String setUser(@RequestBody User user) {
        this.Service.addUser(user);
        return "User added successfully";
    }

    @GetMapping("/users/{username}")
    public User getUserByUserName(@PathVariable("username") String username) {
        return this.Service.getUser(username);
    }
}