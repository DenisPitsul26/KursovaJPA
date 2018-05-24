package com.example.organization.repository;

import com.example.organization.model.Buyer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface BuyerRepository extends JpaRepository<Buyer, Integer>{
    @Query("select sold.buyer from SoldGoods sold  where sold.goodsOfTradingPoint.goods.id = :goods_id and sold.numberOfSoldGoods >= :number group by sold.buyer.id order by sold.buyer.id ")
        //@Query("select req.provider from Request req")
    List<Buyer> getBuyerByGoodsAndNumberOfSoldGoods(@Param("goods_id") int goods_id, @Param("number") int number);

}
