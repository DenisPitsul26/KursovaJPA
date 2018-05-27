package com.example.organization.service.soldGoods.interfaces;

import com.example.organization.model.Provider;
import com.example.organization.model.Request;
import com.example.organization.model.SoldGoods;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

public interface ISoldGoodsService {
    public SoldGoods insertSoldGoods(SoldGoods soldGoods);

    public SoldGoods getSoldGoods(int id);

    public SoldGoods updateSoldGoods(SoldGoods soldGoods) throws SQLException;

    public void deleteSoldGoods(int id) throws SQLException;

    public List<SoldGoods> getAll() throws SQLException;

    double getNumberOfSoldGoodsByDateOfSale(LocalDate startTime, LocalDate finishTime) throws SQLException;

    double getNumberOfSoldGoodsByTypeOfTradingPointAndDateOfSale(int typeOfTradingPointId, LocalDate startTime, LocalDate finishTime) throws SQLException;

    double getNumberOfSoldGoodsByTradingPointAndSellerAndDateOfSale(int tradingPointId, int sellerId, LocalDate startTime, LocalDate finishTime) throws SQLException;

    List<SoldGoods> getSoldGoodsByTradingPointAndGoodsAndDateOfSale(int tradingPointId, int goodsId, LocalDate startTime, LocalDate finishTime) throws SQLException;

    List<SoldGoods> getSoldGoodsByGoodsAndDateOfSale(int goodsId, LocalDate startTime, LocalDate finishTime) throws SQLException;

}
