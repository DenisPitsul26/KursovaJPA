package com.example.organization.repository;

import com.example.organization.model.SoldGoods;
import org.springframework.data.jpa.repository.JpaRepository;

public interface SoldGoodsRepository extends JpaRepository<SoldGoods, Integer>{
}
