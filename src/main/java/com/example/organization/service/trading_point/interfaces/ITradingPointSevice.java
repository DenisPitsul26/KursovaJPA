package com.example.organization.service.trading_point.interfaces;

import com.example.organization.model.TradingPoint;

import java.sql.SQLException;
import java.util.List;

public interface ITradingPointSevice {
    public TradingPoint insertTradingPoint(TradingPoint tradingPoint);

    public TradingPoint getTradingPoint(int id);

    public TradingPoint updateTradingPoint(TradingPoint tradingPoint) throws SQLException;

    public void deleteTradingPoint(int id) throws SQLException;

    public List<TradingPoint> getAll() throws SQLException;
}
