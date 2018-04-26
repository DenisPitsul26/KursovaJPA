package com.example.organization.service.trading_point;

import com.example.organization.model.TradingPoint;
import com.example.organization.repository.TradingPointRepository;
import com.example.organization.service.trading_point.interfaces.ITradingPointSevice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class TradingPointService implements ITradingPointSevice{
    @Autowired
    TradingPointRepository tradingPointRepository;

    @Override
    public TradingPoint insertTradingPoint(TradingPoint tradingPoint) {
        return tradingPointRepository.save(tradingPoint);
    }

    @Override
    public TradingPoint getTradingPoint(int id) {
        return tradingPointRepository.findById(id).get();
    }

    @Override
    public TradingPoint updateTradingPoint(TradingPoint tradingPoint) throws SQLException {
        return tradingPointRepository.save(tradingPoint);
    }

    @Override
    public void deleteTradingPoint(int id) throws SQLException {
        tradingPointRepository.deleteById(id);
    }

    @Override
    public List<TradingPoint> getAll() throws SQLException {
        return tradingPointRepository.findAll();
    }
}
