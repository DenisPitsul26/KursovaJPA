package com.example.organization.model;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Date;

@Entity
@Table(name = "seller")
public class Seller {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "type_of_trading_point_id")
    private TypeOfTradingPoint typeOfTradingPoint;
    @ManyToOne
    @JoinColumn(name = "trading_point_id")
    private TradingPoint tradingPoint;
    @Column(name = "name_of_trading_point")
    private String nameOfSeller;
    @Column(name = "sallary")
    private double sallary;
    @Column(name = "date_start_of_work")
    private LocalDate dateStarOfWork;

    public Seller(TypeOfTradingPoint typeOfTradingPoint, TradingPoint tradingPoint, String nameOfSeller, double sallary, LocalDate dateStarOfWork) {
        this.typeOfTradingPoint = typeOfTradingPoint;
        this.tradingPoint = tradingPoint;
        this.nameOfSeller = nameOfSeller;
        this.sallary = sallary;
        this.dateStarOfWork = dateStarOfWork;
    }

    public Seller() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public TypeOfTradingPoint getTypeOfTradingPoint() {
        return typeOfTradingPoint;
    }

    public void setTypeOfTradingPoint(TypeOfTradingPoint typeOfTradingPoint) {
        this.typeOfTradingPoint = typeOfTradingPoint;
    }

    public TradingPoint getTradingPoint() {
        return tradingPoint;
    }

    public void setTradingPoint(TradingPoint tradingPoint) {
        this.tradingPoint = tradingPoint;
    }

    public String getNameOfSeller() {
        return nameOfSeller;
    }

    public void setNameOfSeller(String nameOfSeller) {
        this.nameOfSeller = nameOfSeller;
    }

    public double getSallary() {
        return sallary;
    }

    public void setSallary(double sallary) {
        this.sallary = sallary;
    }

    public LocalDate getDateStarOfWork() {
        return dateStarOfWork;
    }

    public void setDateStarOfWork(LocalDate dateStarOfWork) {
        this.dateStarOfWork = dateStarOfWork;
    }
}
