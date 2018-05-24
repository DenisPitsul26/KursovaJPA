package com.example.organization.controllers;

import com.example.organization.model.GoodsOfTradingPoint;
import com.example.organization.service.goodsOfTradingPoint.GoodsOfTradingPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class GoodsOfTradingPointController {
    @Autowired
    private GoodsOfTradingPointService goodsOfTradingPointService;

    @RequestMapping("/goods_of_trading_point")
    public List<GoodsOfTradingPoint> showGoodsOfTradingPoint() throws SQLException {
        return goodsOfTradingPointService.getAll();
    }

    @PostMapping("/goods_of_trading_point/insert")
    GoodsOfTradingPoint insertGoodsOfTradingPoint(@RequestBody GoodsOfTradingPoint goodsOfTradingPoint) {
        return goodsOfTradingPointService.insertGoodsOfTradingPoint(goodsOfTradingPoint);
    }

    @GetMapping("/goods_of_trading_point/delete")
    void deleteGoodsOfTradingPoint(@RequestParam("id") int id) throws SQLException
    {
        goodsOfTradingPointService.deleteGoodsOfTradingPoint(id);
    }

    @GetMapping("/goods_of_trading_point/get")
    GoodsOfTradingPoint getGoodsOfTradingPointById(@RequestParam("id") int id)
    {
        return goodsOfTradingPointService.getGoodsOfTradingPoint(id);
    }

    @RequestMapping("/goods_of_trading_point/update")
    GoodsOfTradingPoint updateGoodsOfTradingPoint(@RequestBody GoodsOfTradingPoint goodsOfTradingPoint, @RequestParam("id") int id)throws SQLException
    {
        goodsOfTradingPoint.setId(id);
        return goodsOfTradingPointService.updateGoodsOfTradingPoint(goodsOfTradingPoint);
    }

    @RequestMapping("/goods_of_trading_point/getGoodsByTradingPoint")
    public List<GoodsOfTradingPoint> getBuyerByGoodsAndNumberOfSoldGoods(@RequestParam("tradingPointId") int tradingPointId) throws SQLException {
        return goodsOfTradingPointService.getGoodsByTradingPoint(tradingPointId);
    }

    @RequestMapping("/goods_of_trading_point/getGoodsPriceAndNumberOfGoodsByTypeOfTradingPointAndGoods")
    public List<GoodsOfTradingPoint> getGoodsPriceAndNumberOfGoodsByTypeOfTradingPointAndGoods(@RequestParam("typeOfTradingPointId") int typeOfTradingPointId, @RequestParam("goodsId") int goodsId) throws SQLException {
        return goodsOfTradingPointService.getGoodsPriceAndNumberOfGoodsByTypeOfTradingPointAndGoods(typeOfTradingPointId, goodsId);
    }

    @RequestMapping("/goods_of_trading_point/getGoodsPriceAndNumberOfGoodsByAllTradingPointAndGoods")
    public List<GoodsOfTradingPoint> getGoodsPriceAndNumberOfGoodsByAllTradingPointAndGoods(@RequestParam("goodsId") int goodsId) throws SQLException {
        return goodsOfTradingPointService.getGoodsPriceAndNumberOfGoodsByAllTradingPointAndGoods(goodsId);
    }
}
