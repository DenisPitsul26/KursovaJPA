package com.example.organization.repository;

import com.example.organization.model.Goods;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GoodsRepository extends JpaRepository<Goods, Integer>{
}
