package com.example.organization.service.soldGoods;

import com.example.organization.model.SoldGoods;
import com.example.organization.repository.SoldGoodsRepository;
import com.example.organization.service.soldGoods.interfaces.ISoldGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class SoldGoodsService implements ISoldGoodsService{
    @Autowired
    SoldGoodsRepository soldGoodsRepository;

    @Override
    public SoldGoods insertSoldGoods(SoldGoods soldGoods) {
        return soldGoodsRepository.save(soldGoods);
    }

    @Override
    public SoldGoods getSoldGoods(int id) {
        return soldGoodsRepository.findById(id).get();
    }

    @Override
    public SoldGoods updateSoldGoods(SoldGoods soldGoods) throws SQLException {
        return soldGoodsRepository.save(soldGoods);
    }

    @Override
    public void deleteSoldGoods(int id) throws SQLException {
        soldGoodsRepository.deleteById(id);
    }

    @Override
    public List<SoldGoods> getAll() throws SQLException {
        return soldGoodsRepository.findAll();
    }
}
