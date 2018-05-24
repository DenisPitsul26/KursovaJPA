package com.example.organization.repository;

import com.example.organization.model.Buyer;
import com.example.organization.model.Goods;
import com.example.organization.model.GoodsOfTradingPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GoodsRepository extends JpaRepository<Goods, Integer>{

}
