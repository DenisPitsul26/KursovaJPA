package com.example.organization.service.goods;

import com.example.organization.model.Goods;
import com.example.organization.repository.GoodsRepository;
import com.example.organization.service.goods.interfaces.IGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class GoodsService implements IGoodsService {
    @Autowired
    GoodsRepository goodsRepository;


    @Override
    public Goods insertGoods(Goods goods) {
        return goodsRepository.save(goods);
    }

    @Override
    public Goods getGoods(int id) {
        return goodsRepository.findById(id).get();
    }

    @Override
    public Goods updateGoods(Goods goods) throws SQLException {
        return goodsRepository.save(goods);
    }

    @Override
    public void deleteGoods(int id) throws SQLException {
        goodsRepository.deleteById(id);
    }

    @Override
    public List<Goods> getAll() throws SQLException {
        return goodsRepository.findAll();
    }
}
