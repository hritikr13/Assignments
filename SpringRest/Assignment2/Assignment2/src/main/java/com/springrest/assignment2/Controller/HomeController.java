package com.springrest.assignment2.Controller;

import com.springrest.assignment2.entities.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    User user = new User("Hritik", "Raina@03");

    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestBody User user) {

        System.out.println(user);
        if (this.user.getUsername().equals(user.getUsername()) && this.user.getPassword().equals(user.getPassword())) {
            return "Valid User";
        }
        return "Invalid User";
    }
}