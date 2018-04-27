package com.example.organization.model;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "sold_goods")
public class SoldGoods {
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
    @JoinColumn(name = "seller_id")
    private Seller seller;
    @ManyToOne
    @JoinColumn(name = "buyer_id")
    private Buyer buyer;
    @ManyToOne
    @JoinColumn(name = "goods_of_trading_point_id")
    private GoodsOfTradingPoint goodsOfTradingPoint;
    @Column(name = "number_of_sold_goods")
    private int numberOfSoldGoods;
    @Column(name = "date_of_sale")
    private Date dateOfSale;
    @Column(name = "price")
    private double price;

    public SoldGoods(TypeOfTradingPoint typeOfTradingPoint, TradingPoint tradingPoint, Seller seller, Buyer buyer, GoodsOfTradingPoint goodsOfTradingPoint, int numberOfSoldGoods, Date dateOfSale, double price) {
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
