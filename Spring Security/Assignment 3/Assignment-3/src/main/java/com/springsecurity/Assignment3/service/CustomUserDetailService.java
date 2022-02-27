package com.springsecurity.Assignment3.service;

import com.springsecurity.Assignment3.model.CustomUserDetail;
import com.springsecurity.Assignment3.model.User;
import com.springsecurity.Assignment3.repository.UserRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {

        User user = this.userRepo.findByUsername(username);

        if (user == null) {
            throw new UsernameNotFoundException("INVALID USERNAME!!");
        }

        return new CustomUserDetail(user);
    }

}
