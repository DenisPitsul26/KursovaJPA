package com.example.organization.model;

import javax.persistence.*;

@Entity
public class Buyer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name_of_buyer")
    private String nameOfBuyer;

    public Buyer(String nameOfBuyer) {
        this.nameOfBuyer = nameOfBuyer;
    }

    public Buyer() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameOfBuyer() {
        return nameOfBuyer;
    }

    public void setNameOfBuyer(String nameOfBuyer) {
        this.nameOfBuyer = nameOfBuyer;
    }
}
