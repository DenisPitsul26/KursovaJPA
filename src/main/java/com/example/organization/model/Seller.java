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
    @JoinColumn(name = "trading_point_id")
    private TradingPoint tradingPoint;
    @Column(name = "name_of_seller")
    private String nameOfSeller;
    @Column(name = "sallary")
    private double sallary;
    @Column(name = "date_start_of_work")
    private LocalDate dateStarOfWork;

    public Seller(TradingPoint tradingPoint, String nameOfSeller, double sallary, LocalDate dateStarOfWork) {
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
