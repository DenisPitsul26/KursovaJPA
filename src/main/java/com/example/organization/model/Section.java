package com.example.organization.model;

import javax.persistence.*;

@Entity
public class Section {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "type_of_section")
    private String typeOfSection;

    public Section(String typeOfSection) {
        this.typeOfSection = typeOfSection;
    }

    public Section() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTypeOfSection() {
        return typeOfSection;
    }

    public void setTypeOfSection(String typeOfSection) {
        this.typeOfSection = typeOfSection;
    }
}
