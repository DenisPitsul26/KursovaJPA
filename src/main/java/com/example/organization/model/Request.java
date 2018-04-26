package com.example.organization.model;

import java.util.Date;

public class Request {
    private int id;
    private int numberRequest;
    private TypeOfTradingPoint typeOfTradingPoint;
    private TradingPoint tradingPoint;
    private Provider provider;
    private Goods goods;
    private int numberOfGoods;
    private double price;
    private Date dateOfRequest;

    public Request(int id, int numberRequest, TypeOfTradingPoint typeOfTradingPoint,
                   TradingPoint tradingPoint, Provider provider, Goods goods,
                   int numberOfGoods, double price, Date dateOfRequest) {
        this.id = id;
        this.numberRequest = numberRequest;
        this.typeOfTradingPoint = typeOfTradingPoint;
        this.tradingPoint = tradingPoint;
        this.provider = provider;
        this.goods = goods;
        this.numberOfGoods = numberOfGoods;
        this.price = price;
        this.dateOfRequest = dateOfRequest;
    }

    public Request() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getNumberRequest() {
        return numberRequest;
    }

    public void setNumberRequest(int numberRequest) {
        this.numberRequest = numberRequest;
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

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }

    public Goods getGoods() {
        return goods;
    }

    public void setGoods(Goods goods) {
        this.goods = goods;
    }

    public int getNumberOfGoods() {
        return numberOfGoods;
    }

    public void setNumberOfGoods(int numberOfGoods) {
        this.numberOfGoods = numberOfGoods;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getDateOfRequest() {
        return dateOfRequest;
    }

    public void setDateOfRequest(Date dateOfRequest) {
        this.dateOfRequest = dateOfRequest;
    }
}
