package com.example.organization.service.seller.interfaces;

import com.example.organization.model.Seller;

import java.sql.SQLException;
import java.util.List;

public interface ISellerService {
    public Seller insertSeller(Seller seller);

    public Seller getSeller(int id);

    public Seller updateSeller(Seller seller) throws SQLException;

    public void deleteSeller(int id) throws SQLException;

    public List<Seller> getAll() throws SQLException;

    double getCountOfSeller() throws SQLException;

    double getCountOfSellerByTypeOfTradingPointId(int typeOfTradingPointId) throws SQLException;

    List<Seller> getSallaryOfSellerByTypeOfTradingPoint(int typeOfTradingPointId) throws SQLException;

    List<Seller> getSallaryOfSellerByAllTradingPoint() throws SQLException;

    double getSumSallaryOfSellersByTradingPoint(int tradingPointId) throws SQLException;
}
