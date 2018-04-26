package com.example.organization.service.typeOfTradingPoint.goods.interfaces;

import com.example.organization.model.TypeOfTradingPoint;

import java.sql.SQLException;
import java.util.List;

public interface ITypeOfTradingPointService {
    public TypeOfTradingPoint insertTypeOfTradingPoint(
            TypeOfTradingPoint typeOfTradingPoint);

    public TypeOfTradingPoint getTypeOfTradingPoint(int id);

    public TypeOfTradingPoint updateTypeOfTradingPoint(
            TypeOfTradingPoint TypeOfTradingPoint) throws SQLException;

    public void deleteTypeOfTradingPoint(int id) throws SQLException;

    public List<TypeOfTradingPoint> getAll() throws SQLException;
}
