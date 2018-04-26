package com.example.organization.service.goods.interfaces;

import com.example.organization.model.Goods;

import java.sql.SQLException;
import java.util.List;

public interface IGoodsService {
    public Goods insertGoods(Goods goods);

    public Goods getGoods(int id);

    public Goods updateGoods(Goods goods) throws SQLException;

    public void deleteGoods(int id) throws SQLException;

    public List<Goods> getAll() throws SQLException;
}
