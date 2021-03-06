package com.example.organization.controllers;

import com.example.organization.model.Provider;
import com.example.organization.model.SoldGoods;
import com.example.organization.service.soldGoods.SoldGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;
import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SoldGoodsController {
    @Autowired
    private SoldGoodsService soldGoodsService;

    @RequestMapping("/sold_goods")
    public List<SoldGoods> showSoldGoods() throws SQLException {
        return soldGoodsService.getAll();
    }

    @PostMapping("/sold_goods/insert")
    SoldGoods insertSoldGoods(@RequestBody SoldGoods soldGoods) {
        return soldGoodsService.insertSoldGoods(soldGoods);
    }

    @GetMapping("/sold_goods/delete")
    void deleteSoldGoods(@RequestParam("id") int id) throws SQLException
    {
        soldGoodsService.deleteSoldGoods(id);
    }

    @GetMapping("/sold_goods/get")
    SoldGoods getSoldGoodsById(@RequestParam("id") int id)
    {
        return soldGoodsService.getSoldGoods(id);
    }

    @RequestMapping("/sold_goods/update")
    SoldGoods updateSoldGoods(@RequestBody SoldGoods soldGoods, @RequestParam("id") int id)throws SQLException
    {
        soldGoods.setId(id);
        return soldGoodsService.updateSoldGoods(soldGoods);
    }

    @RequestMapping("/sold_goods/getNumberOfSoldGoodsByDateOfSale")
    public double getNumberOfSoldGoodsByDateOfSale(@RequestParam("startTime") Date startTime, @RequestParam("finishTime") Date finishTime) throws SQLException {
        return soldGoodsService.getNumberOfSoldGoodsByDateOfSale(startTime.toLocalDate(), finishTime.toLocalDate());
    }

    @RequestMapping("/sold_goods/getNumberOfSoldGoodsByTypeOfTradingPointAndDateOfSale")
    public double getNumberOfSoldGoodsByTypeOfTradingPointAndDateOfSale(@RequestParam("typeOfTradingPointId") int typeOfTradingPointId, @RequestParam("startTime") Date startTime, @RequestParam("finishTime") Date finishTime) throws SQLException {
        return soldGoodsService.getNumberOfSoldGoodsByTypeOfTradingPointAndDateOfSale(typeOfTradingPointId, startTime.toLocalDate(), finishTime.toLocalDate());
    }

    @RequestMapping("/sold_goods/getNumberOfSoldGoodsByTradingPointAndSellerAndDateOfSale")
    public double getNumberOfSoldGoodsByTradingPointAndSellerAndDateOfSale(@RequestParam("tradingPointId") int tradingPointId, @RequestParam("sellerId") int sellerId, @RequestParam("startTime") Date startTime, @RequestParam("finishTime") Date finishTime) throws SQLException {
        return soldGoodsService.getNumberOfSoldGoodsByTradingPointAndSellerAndDateOfSale(tradingPointId, sellerId, startTime.toLocalDate(), finishTime.toLocalDate());
    }

    @RequestMapping("/sold_goods/getSoldGoodsByTradingPointAndGoodsAndDateOfSale")
    public List<SoldGoods> getSoldGoodsByTradingPointAndGoodsAndDateOfSale(@RequestParam("tradingPointId") int tradingPointId, @RequestParam("goodsId") int goodsId, @RequestParam("startTime") Date startTime, @RequestParam("finishTime") Date finishTime) throws SQLException {
        return soldGoodsService.getSoldGoodsByTradingPointAndGoodsAndDateOfSale(tradingPointId, goodsId, startTime.toLocalDate(), finishTime.toLocalDate());
    }

    @RequestMapping("/sold_goods/getSoldGoodsByGoodsAndDateOfSale")
    public List<SoldGoods> getSoldGoodsByGoodsAndDateOfSale(@RequestParam("goodsId") int goodsId, @RequestParam("startTime") Date startTime, @RequestParam("finishTime") Date finishTime) throws SQLException {
        return soldGoodsService.getSoldGoodsByGoodsAndDateOfSale(goodsId, startTime.toLocalDate(), finishTime.toLocalDate());
    }

    @RequestMapping("/sold_goods/getTheMostActiveBuyersByAllTradingPoint")
    public List<SoldGoods> getTheMostActiveBuyersByAllTradingPoint() throws SQLException {
        return soldGoodsService.getTheMostActiveBuyersByAllTradingPoint();
    }

    @RequestMapping("/sold_goods/getTheMostActiveBuyersByTypeOfTradingPoint")
    public List<SoldGoods> getTheMostActiveBuyersByTypeOfTradingPoint(@RequestParam("typeOfTradingPointId") int typeOfTradingPointId) throws SQLException {
        return soldGoodsService.getTheMostActiveBuyersByTypeOfTradingPoint(typeOfTradingPointId);
    }

    @RequestMapping("/sold_goods/getCountOfSoldGoodsByTradingPoint")
    public double getCountOfSoldGoodsByTradingPoint(@RequestParam("tradingPointId") int tradingPointId) throws SQLException {
        return soldGoodsService.getCountOfSoldGoodsByTradingPoint(tradingPointId);
    }

    @RequestMapping("/sold_goods/getAmountOfSoldGoodsByTradingPoint")
    public double getAmountOfSoldGoodsByTradingPoint(@RequestParam("tradingPointId") int tradingPointId) throws SQLException {
        return soldGoodsService.getAmountOfSoldGoodsByTradingPoint(tradingPointId);
    }

    @RequestMapping("/sold_goods/getBuyerByTradingPointAndGoodsAndDateOfSale")
    public List<SoldGoods> getBuyerByTradingPointAndGoodsAndDateOfSale(@RequestParam("typeOfTradingPointId") int typeOfTradingPointId, @RequestParam("goodsId") int goodsId, @RequestParam("startTime") Date startTime, @RequestParam("finishTime") Date finishTime) throws SQLException {
        return soldGoodsService.getBuyerByTradingPointAndGoodsAndDateOfSale(typeOfTradingPointId, goodsId, startTime.toLocalDate(), finishTime.toLocalDate());
    }

    @RequestMapping("/sold_goods/getBuyerByGoodsAndDateOfSale")
    public List<SoldGoods> getBuyerByGoodsAndDateOfSale(@RequestParam("goodsId") int goodsId, @RequestParam("startTime") Date startTime, @RequestParam("finishTime") Date finishTime) throws SQLException {
        return soldGoodsService.getBuyerByGoodsAndDateOfSale(goodsId, startTime.toLocalDate(), finishTime.toLocalDate());
    }
}
