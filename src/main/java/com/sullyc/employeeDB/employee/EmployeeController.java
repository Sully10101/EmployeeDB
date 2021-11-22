package com.sullyc.employeeDB.employee;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("employees")
public class EmployeeController {

    @GetMapping
    public List<Employee> getAllEmployees(){

        return List.of(
                new Employee(UUID.randomUUID(), "Frank", "Berries", "frank@balls.com", Employee.Gender.MALE),
                new Employee(UUID.randomUUID(), "Elisa", "Berries", "Elisa@balls.com", Employee.Gender.FEMALE));
    }


}
