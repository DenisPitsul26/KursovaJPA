package com.example.organization.controllers;

import com.example.organization.model.Seller;
import com.example.organization.service.seller.SellerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class SellerController {
    @Autowired
    private SellerService sellerService;

    @RequestMapping("/seller")
    public List<Seller> showSeller() throws SQLException {
        return sellerService.getAll();
    }

    @PostMapping("/seller/insert")
    Seller insertSeller(@RequestBody Seller seller) {
        return sellerService.insertSeller(seller);
    }

    @GetMapping("/seller/delete")
    void deleteSeller(@RequestParam("id") int id) throws SQLException
    {
        sellerService.deleteSeller(id);
    }

    @GetMapping("/seller/get")
    Seller getSellerById(@RequestParam("id") int id)
    {
        return sellerService.getSeller(id);
    }

    @RequestMapping("/seller/update")
    Seller updateSeller(@RequestBody Seller seller, @RequestParam("id") int id)throws SQLException
    {
        seller.setId(id);
        return sellerService.updateSeller(seller);
    }

    @RequestMapping("/seller/getCountOfSeller")
    public double getCountOfSeller() throws SQLException {
        return sellerService.getCountOfSeller();
    }

    @RequestMapping("/seller/getCountOfSellerByTypeOfTradingPointId")
    public double getCountOfSellerByTypeOfTradingPointId(@RequestParam("typeOfTradingPointId") int typeOfTradingPointId) throws SQLException {
        return sellerService.getCountOfSellerByTypeOfTradingPointId(typeOfTradingPointId);
    }

    @RequestMapping("/seller/getSallaryOfSellerByTypeOfTradingPoint")
    public List<Seller> getSallaryOfSellerByTypeOfTradingPoint(@RequestParam("typeOfTradingPointId") int typeOfTradingPointId) throws SQLException {
        return sellerService.getSallaryOfSellerByTypeOfTradingPoint(typeOfTradingPointId);
    }

    @RequestMapping("/seller/getSallaryOfSellerByAllTradingPoint")
    public List<Seller> getSallaryOfSellerByAllTradingPoint() throws SQLException {
        return sellerService.getSallaryOfSellerByAllTradingPoint();
    }

    @RequestMapping("/seller/getSumSallaryOfSellersByTradingPoint")
    public double getSumSallaryOfSellersByTradingPoint(@RequestParam("tradingPointId") int tradingPointId) throws SQLException {
        return sellerService.getSumSallaryOfSellersByTradingPoint(tradingPointId);
    }
}
