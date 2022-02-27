package com.springrest.assignment7.dao;

import com.springrest.assignment7.entities.Order;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends MongoRepository<Order, Integer> {

    public Order findById(int id);

    public Order findByName(String name);
}