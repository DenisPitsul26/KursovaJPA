package com.example.organization.model;

import java.util.Date;

public class SoldGoods {
    private int id;
    private TypeOfTradingPoint typeOfTradingPoint;
    private TradingPoint tradingPoint;
    private Seller seller;
    private Buyer buyer;
    private GoodsOfTradingPoint goodsOfTradingPoint;
    private int numberOfSoldGoods;
    private Date dateOfSale;
    private double price;

    public SoldGoods(int id, TypeOfTradingPoint typeOfTradingPoint,
                     TradingPoint tradingPoint, Seller seller, Buyer buyer,
                     GoodsOfTradingPoint goodsOfTradingPoint,
                     int numberOfSoldGoods, Date dateOfSale, double price) {
        this.id = id;
        this.typeOfTradingPoint = typeOfTradingPoint;
        this.tradingPoint = tradingPoint;
        this.seller = seller;
        this.buyer = buyer;
        this.goodsOfTradingPoint = goodsOfTradingPoint;
        this.numberOfSoldGoods = numberOfSoldGoods;
        this.dateOfSale = dateOfSale;
        this.price = price;
    }

    public SoldGoods() {
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

    public Seller getSeller() {
        return seller;
    }

    public void setSeller(Seller seller) {
        this.seller = seller;
    }

    public Buyer getBuyer() {
        return buyer;
    }

    public void setBuyer(Buyer buyer) {
        this.buyer = buyer;
    }

    public GoodsOfTradingPoint getGoodsOfTradingPoint() {
        return goodsOfTradingPoint;
    }

    public void setGoodsOfTradingPoint(GoodsOfTradingPoint goodsOfTradingPoint) {
        this.goodsOfTradingPoint = goodsOfTradingPoint;
    }

    public int getNumberOfSoldGoods() {
        return numberOfSoldGoods;
    }

    public void setNumberOfSoldGoods(int numberOfSoldGoods) {
        this.numberOfSoldGoods = numberOfSoldGoods;
    }

    public Date getDateOfSale() {
        return dateOfSale;
    }

    public void setDateOfSale(Date dateOfSale) {
        this.dateOfSale = dateOfSale;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
}
