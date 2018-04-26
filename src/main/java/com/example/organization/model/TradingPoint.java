package com.example.organization.model;

import javax.persistence.*;

@Entity
@Table(name = "trading_point")
public class TradingPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @ManyToOne
    @JoinColumn(name = "type_of_trading_point_id")
    private TypeOfTradingPoint typeOfTradingPoint;
    @Column(name = "name_of_trading_point")
    private String nameOfTradingPoint;
    @Column(name = "number_of_halls")
    private int numberOfHalls;
    @Column(name = "size_of_the_trading_point")
    private int sizeOfTheTradingPoint;
    @Column(name = "lease_payments")
    private double leasePayments;
    @Column(name = "utilities")
    private double utilities;
    @Column(name = "number_of_counters")
    private int numberOfCounters;

    public TradingPoint(TypeOfTradingPoint typeOfTradingPoint,
                        String nameOfTradingPoint, int numberOfHalls,
                        int sizeOfTheTradingPoint, double leasePayments,
                        double utilities, int numberOfCounters) {
        this.typeOfTradingPoint = typeOfTradingPoint;
        this.nameOfTradingPoint = nameOfTradingPoint;
        this.numberOfHalls = numberOfHalls;
        this.sizeOfTheTradingPoint = sizeOfTheTradingPoint;
        this.leasePayments = leasePayments;
        this.utilities = utilities;
        this.numberOfCounters = numberOfCounters;
    }

    public TradingPoint() {
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

    public String getNameOfTradingPoint() {
        return nameOfTradingPoint;
    }

    public void setNameOfTradingPoint(String nameOfTradingPoint) {
        this.nameOfTradingPoint = nameOfTradingPoint;
    }

    public int getNumberOfHalls() {
        return numberOfHalls;
    }

    public void setNumberOfHalls(int numberOfHalls) {
        this.numberOfHalls = numberOfHalls;
    }

    public int getSizeOfTheTradingPoint() {
        return sizeOfTheTradingPoint;
    }

    public void setSizeOfTheTradingPoint(int sizeOfTheTradingPoint) {
        this.sizeOfTheTradingPoint = sizeOfTheTradingPoint;
    }

    public double getLeasePayments() {
        return leasePayments;
    }

    public void setLeasePayments(double leasePayments) {
        this.leasePayments = leasePayments;
    }

    public double getUtilities() {
        return utilities;
    }

    public void setUtilities(double utilities) {
        this.utilities = utilities;
    }

    public int getNumberOfCounters() {
        return numberOfCounters;
    }

    public void setNumberOfCounters(int numberOfCounters) {
        this.numberOfCounters = numberOfCounters;
    }
}
