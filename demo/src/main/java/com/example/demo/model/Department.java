package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Column;

@Entity
public class Department {

    @Id
    @Column(name = "deptid") // Assuming your column name in the DB is deptid
    private int id;

    @Column(name = "deptname") // Assuming your column name in the DB is deptname
    private String name;

    // Getters and setters
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
