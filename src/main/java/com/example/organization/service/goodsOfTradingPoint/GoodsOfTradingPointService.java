package com.example.organization.service.goodsOfTradingPoint;

import com.example.organization.model.GoodsOfTradingPoint;
import com.example.organization.repository.GoodsOfTradingPointRepository;
import com.example.organization.service.goodsOfTradingPoint.interfaces.IGoodsOfTradingPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class GoodsOfTradingPointService implements IGoodsOfTradingPointService{
    @Autowired
    GoodsOfTradingPointRepository goodsOfTradingPointRepository;

    @Override
    public GoodsOfTradingPoint insertGoodsOfTradingPoint(GoodsOfTradingPoint goodsOfTradingPoint) {
        return goodsOfTradingPointRepository.save(goodsOfTradingPoint);
    }

    @Override
    public GoodsOfTradingPoint getGoodsOfTradingPoint(int id) {
        return goodsOfTradingPointRepository.findById(id).get();
    }

    @Override
    public GoodsOfTradingPoint updateGoodsOfTradingPoint(GoodsOfTradingPoint goodsOfTradingPoint) throws SQLException {
        return goodsOfTradingPointRepository.save(goodsOfTradingPoint);
    }

    @Override
    public void deleteGoodsOfTradingPoint(int id) throws SQLException {
        goodsOfTradingPointRepository.deleteById(id);
    }

    @Override
    public List<GoodsOfTradingPoint> getAll() throws SQLException {
        return goodsOfTradingPointRepository.findAll();
    }
}
