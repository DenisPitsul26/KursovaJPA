package com.example.organization.model;

import javax.persistence.*;

@Entity
@Table(name = "type_of_trading_point")
public class TypeOfTradingPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "type_of_type_of_trading_point")
    private String typeOfTypeOfTradingPoint;

    public TypeOfTradingPoint(String typeOfTypeOfTradingPoint) {
        this.typeOfTypeOfTradingPoint = typeOfTypeOfTradingPoint;
    }

    public TypeOfTradingPoint() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTypeOfTypeOfTradingPoint() {
        return typeOfTypeOfTradingPoint;
    }

    public void setTypeOfTypeOfTradingPoint(String typeOfTypeOfTradingPoint) {
        this.typeOfTypeOfTradingPoint = typeOfTypeOfTradingPoint;
    }
}
