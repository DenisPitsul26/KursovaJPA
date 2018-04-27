package com.example.organization.model;

import javax.persistence.*;

@Entity
@Table(name = "goods_of_trading_point")
public class GoodsOfTradingPoint {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "type_of_trading_point_id")
    private TypeOfTradingPoint typeOfTradingPoint;
    @ManyToOne
    @JoinColumn(name = "trading_point_id")
    private TradingPoint tradingPoint;
    @ManyToOne
    @JoinColumn(name = "goods_id")
    private Goods goods;
    @Column(name = "price")
    private double price;
    @Column(name = "number_of_goods")
    private int numberOfGoods;

    public GoodsOfTradingPoint(TypeOfTradingPoint typeOfTradingPoint, TradingPoint tradingPoint, Goods goods, double price, int numberOfGoods) {
        this.typeOfTradingPoint = typeOfTradingPoint;
        this.tradingPoint = tradingPoint;
        this.goods = goods;
        this.price = price;
        this.numberOfGoods = numberOfGoods;
    }

    public GoodsOfTradingPoint() {
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

    public Goods getGoods() {
        return goods;
    }

    public void setGoods(Goods goods) {
        this.goods = goods;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getNumberOfGoods() {
        return numberOfGoods;
    }

    public void setNumberOfGoods(int numberOfGoods) {
        this.numberOfGoods = numberOfGoods;
    }
}
