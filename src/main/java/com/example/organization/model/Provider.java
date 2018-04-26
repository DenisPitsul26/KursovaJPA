package com.example.organization.model;

import javax.persistence.*;

@Entity
public class Provider {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name_of_provider")
    private String nameOfProvider;

    public Provider(String nameOfProvider) {
        this.nameOfProvider = nameOfProvider;
    }

    public Provider() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getNameOfProvider() {
        return nameOfProvider;
    }

    public void setNameOfProvider(String nameOfProvider) {
        this.nameOfProvider = nameOfProvider;
    }
}
