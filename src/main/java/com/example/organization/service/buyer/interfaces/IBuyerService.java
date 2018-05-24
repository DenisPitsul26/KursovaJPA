package com.example.organization.service.buyer.interfaces;

import com.example.organization.model.Buyer;
import com.example.organization.model.Request;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

public interface IBuyerService {
    public Buyer insertBuyer(Buyer buyer);

    public Buyer getBuyer(int id) throws SQLException;

    public Buyer updateBuyer(Buyer buyer) throws SQLException;

    public void deleteBuyer(int id) throws SQLException;

    public List<Buyer> getAll() throws SQLException;

    List<Buyer> getBuyerByGoodsAndNumberOfSoldGoods(int goodsId, int number) throws SQLException;

}
