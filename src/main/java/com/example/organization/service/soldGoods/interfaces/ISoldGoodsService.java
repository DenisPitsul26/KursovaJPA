package com.example.organization.service.soldGoods.interfaces;

import com.example.organization.model.SoldGoods;

import java.sql.SQLException;
import java.util.List;

public interface ISoldGoodsService {
    public SoldGoods insertSoldGoods(SoldGoods soldGoods);

    public SoldGoods getSoldGoods(int id);

    public SoldGoods updateSoldGoods(SoldGoods soldGoods) throws SQLException;

    public void deleteSoldGoods(int id) throws SQLException;

    public List<SoldGoods> getAll() throws SQLException;
}
