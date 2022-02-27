package com.springsecurity.Assignment3.repository;

import com.springsecurity.Assignment3.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepo extends JpaRepository<User, String> {

    public User findByUsername(String username);
}
