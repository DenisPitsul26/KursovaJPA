package com.example.organization.service.seller;

import com.example.organization.model.Seller;
import com.example.organization.repository.SellerRepository;
import com.example.organization.service.seller.interfaces.ISellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class SellerService implements ISellerService{
    @Autowired
    SellerRepository sellerRepository;

    @Override
    public Seller insertSeller(Seller seller) {
        return sellerRepository.save(seller);
    }

    @Override
    public Seller getSeller(int id){
        return sellerRepository.findById(id).get();
    }

    @Override
    public Seller updateSeller(Seller seller) throws SQLException {
        return sellerRepository.save(seller);
    }

    @Override
    public void deleteSeller(int id) throws SQLException {
        sellerRepository.deleteById(id);
    }

    @Override
    public List<Seller> getAll() throws SQLException {
        return sellerRepository.findAll();
    }

    @Override
    public double getCountOfSeller() throws SQLException {
        return sellerRepository.getCountOfSeller();
    }

    @Override
    public double getCountOfSellerByTypeOfTradingPointId(int typeOfTradingPointId) throws SQLException {
        return sellerRepository.getCountOfSellerByTypeOfTradingPointId(typeOfTradingPointId);
    }

    @Override
    public List<Seller> getSallaryOfSellerByTypeOfTradingPoint(int typeOfTradingPointId) throws SQLException {
        return sellerRepository.getSallaryOfSellerByTypeOfTradingPoint(typeOfTradingPointId);
    }

    @Override
    public List<Seller> getSallaryOfSellerByAllTradingPoint() throws SQLException {
        return sellerRepository.getSallaryOfSellerByAllTradingPoint();
    }
}
