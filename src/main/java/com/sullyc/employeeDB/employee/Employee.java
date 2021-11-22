package com.sullyc.employeeDB.employee;

import java.util.UUID;

public class Employee {

    private final UUID employeeId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final Gender gender;

    public Employee(UUID employeeId, String firstName, String lastName, String email, Gender gender) {
        this.employeeId = employeeId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public UUID getEmployeeId() {
        return employeeId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public Gender getGender() {
        return gender;
    }

    enum Gender{
        MALE, FEMALE;
    }


}

