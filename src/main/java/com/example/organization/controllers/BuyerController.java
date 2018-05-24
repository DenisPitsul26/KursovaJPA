package com.example.organization.controllers;

import com.example.organization.model.Buyer;
import com.example.organization.model.Request;
import com.example.organization.service.buyer.BuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
public class BuyerController {
    @Autowired
    BuyerService buyerService;

    @RequestMapping("/buyer")
    public List<Buyer> showBuyer() throws SQLException {
        return buyerService.getAll();
    }
    @PostMapping("/buyer/insert")
    Buyer insertBuyer(@RequestBody Buyer buyer) {
        return buyerService.insertBuyer(buyer);
    }

    @GetMapping("/buyer/delete")
    void deleteBuyer(@RequestParam("id") int id) throws SQLException {
        buyerService.deleteBuyer(id);
    }
    @GetMapping("/buyer/get")
    Buyer getBuyerById(@RequestParam("id") int id)throws SQLException
    {
        return buyerService.getBuyer(id);
    }

    @RequestMapping("/buyer/update")
    Buyer updateBuyer(
            @RequestBody Buyer buyer,
            @RequestParam("id") int id) throws SQLException {
        buyer.setId(id);
        return buyerService.updateBuyer(buyer);
    }

    @RequestMapping("/buyer/getBuyerByGoodsAndNumberOfSoldGoods")
    public List<Buyer> getBuyerByGoodsAndNumberOfSoldGoods(@RequestParam("goods_id") int goodsId , @RequestParam("number") int number) throws SQLException {
        return buyerService.getBuyerByGoodsAndNumberOfSoldGoods(goodsId, number);
    }
}
