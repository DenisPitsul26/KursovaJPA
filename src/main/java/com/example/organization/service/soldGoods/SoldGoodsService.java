package com.example.organization.service.soldGoods;

import com.example.organization.model.SoldGoods;
import com.example.organization.repository.SoldGoodsRepository;
import com.example.organization.service.soldGoods.interfaces.ISoldGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

@Service
public class SoldGoodsService implements ISoldGoodsService{
    @Autowired
    SoldGoodsRepository soldGoodsRepository;

    @Override
    public SoldGoods insertSoldGoods(SoldGoods soldGoods) {
        return soldGoodsRepository.save(soldGoods);
    }

    @Override
    public SoldGoods getSoldGoods(int id) {
        return soldGoodsRepository.findById(id).get();
    }

    @Override
    public SoldGoods updateSoldGoods(SoldGoods soldGoods) throws SQLException {
        return soldGoodsRepository.save(soldGoods);
    }

    @Override
    public void deleteSoldGoods(int id) throws SQLException {
        soldGoodsRepository.deleteById(id);
    }

    @Override
    public List<SoldGoods> getAll() throws SQLException {
        return soldGoodsRepository.findAll();
    }

    @Override
    public double getNumberOfSoldGoodsByDateOfSale(LocalDate startTime, LocalDate finishTime) throws SQLException {
        return soldGoodsRepository.getNumberOfSoldGoodsByDateOfSale(startTime, finishTime);
    }

    @Override
    public double getNumberOfSoldGoodsByTypeOfTradingPointAndDateOfSale(int typeOfTradingPointId, LocalDate startTime, LocalDate finishTime) throws SQLException {
        return soldGoodsRepository.getNumberOfSoldGoodsBytypeOfTradingPointAndDateOfSale(typeOfTradingPointId, startTime, finishTime);
    }

    @Override
    public double getNumberOfSoldGoodsByTradingPointAndSellerAndDateOfSale(int tradingPointId, int sellerId, LocalDate startTime, LocalDate finishTime) throws SQLException {
        return soldGoodsRepository.getNumberOfSoldGoodsByTradingPointAndSellerAndDateOfSale(tradingPointId, sellerId, startTime, finishTime);
    }

    @Override
    public List<SoldGoods> getSoldGoodsByTradingPointAndGoodsAndDateOfSale(int tradingPointId, int goodsId, LocalDate startTime, LocalDate finishTime) throws SQLException {
        return soldGoodsRepository.getSoldGoodsByTradingPointAndGoodsAndDateOfSale(tradingPointId, goodsId, startTime, finishTime);
    }

    @Override
    public List<SoldGoods> getSoldGoodsByGoodsAndDateOfSale(int goodsId, LocalDate startTime, LocalDate finishTime) throws SQLException {
        return soldGoodsRepository.getSoldGoodsByGoodsAndDateOfSale(goodsId, startTime, finishTime);
    }

    @Override
    public List<SoldGoods> getTheMostActiveBuyersByAllTradingPoint() throws SQLException {
        return soldGoodsRepository.getTheMostActiveBuyersByAllTradingPoint();
    }

    @Override
    public List<SoldGoods> getTheMostActiveBuyersByTypeOfTradingPoint(int typeOfTradingPointId) throws SQLException {
        return soldGoodsRepository.getTheMostActiveBuyersByTypeOfTradingPoint(typeOfTradingPointId);
    }

    @Override
    public double getCountOfSoldGoodsByTradingPoint(int tradingPointId) throws SQLException {
        return soldGoodsRepository.getCountOfSoldGoodsByTradingPoint(tradingPointId);
    }

    @Override
    public double getAmountOfSoldGoodsByTradingPoint(int tradingPointId) throws SQLException {
        return soldGoodsRepository.getAmountOfSoldGoodsByTradingPoint(tradingPointId);
    }

    @Override
    public List<SoldGoods> getBuyerByTradingPointAndGoodsAndDateOfSale(int typeOfTradingPointId, int goodsId, LocalDate startTime, LocalDate finishTime) {
        return soldGoodsRepository.getBuyerByTradingPointAndGoodsAndDateOfSale(typeOfTradingPointId, goodsId, startTime, finishTime);
    }

    @Override
    public List<SoldGoods> getBuyerByGoodsAndDateOfSale(int goodsId, LocalDate startTime, LocalDate finishTime) {
        return soldGoodsRepository.getBuyerByGoodsAndDateOfSale(goodsId, startTime, finishTime);
    }
}

