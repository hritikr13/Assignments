package com.springrest.assignment5.dao;

import com.springrest.assignment5.entities.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    public Employee findById(int id);
}