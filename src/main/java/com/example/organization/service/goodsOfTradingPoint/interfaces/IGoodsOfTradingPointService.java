package com.example.organization.service.goodsOfTradingPoint.interfaces;

import com.example.organization.model.Goods;
import com.example.organization.model.GoodsOfTradingPoint;

import java.sql.SQLException;
import java.util.List;

public interface IGoodsOfTradingPointService {
    public GoodsOfTradingPoint insertGoodsOfTradingPoint(GoodsOfTradingPoint goodsOfTradingPoint);

    public GoodsOfTradingPoint getGoodsOfTradingPoint(int id);

    public GoodsOfTradingPoint updateGoodsOfTradingPoint(GoodsOfTradingPoint goodsOfTradingPoint) throws SQLException;

    public void deleteGoodsOfTradingPoint(int id) throws SQLException;

    public List<GoodsOfTradingPoint> getAll() throws SQLException;

    List<GoodsOfTradingPoint> getGoodsByTradingPoint(int tradingPointId) throws SQLException;

    List<GoodsOfTradingPoint> getGoodsPriceAndNumberOfGoodsByTypeOfTradingPointAndGoods(int typeOfTradingPointId, int goodsId) throws SQLException;

    List<GoodsOfTradingPoint> getGoodsPriceAndNumberOfGoodsByAllTradingPointAndGoods(int goodsId) throws SQLException;

}
