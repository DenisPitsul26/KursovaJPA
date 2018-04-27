package com.example.organization.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "request")
public class Request {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "number_request")
    private int numberRequest;
    @ManyToOne
    @JoinColumn(name = "type_of_trading_point_id")
    private TypeOfTradingPoint typeOfTradingPoint;
    @ManyToOne
    @JoinColumn(name = "trading_point_id")
    private TradingPoint tradingPoint;
    @ManyToOne
    @JoinColumn(name = "provider_id")
    private Provider provider;
    @ManyToOne
    @JoinColumn(name = "goods_id")
    private Goods goods;
    @Column(name = "number_of_goods")
    private int numberOfGoods;
    @Column(name = "price")
    private double price;
    @Column(name = "date_of_request")
    private Date dateOfRequest;

    public Request(int numberRequest, TypeOfTradingPoint typeOfTradingPoint, TradingPoint tradingPoint, Provider provider, Goods goods, int numberOfGoods, double price, Date dateOfRequest) {
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
