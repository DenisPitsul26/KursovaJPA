package com.example.organization.repository;

import com.example.organization.model.GoodsOfTradingPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface GoodsOfTradingPointRepository extends JpaRepository<GoodsOfTradingPoint, Integer>{
    //3
    @Query("select goodsOfTP from GoodsOfTradingPoint goodsOfTP  where goodsOfTP.tradingPoint.id = :trading_point_id order by goodsOfTP.id ")
    List<GoodsOfTradingPoint> getGoodsByTradingPoint(@Param("trading_point_id") int trading_point_id);

    //4
    @Query("select goodsOfTP from GoodsOfTradingPoint goodsOfTP  where goodsOfTP.tradingPoint.typeOfTradingPoint.id = :type_of_trading_point_id and goodsOfTP.goods.id = :goods_id order by goodsOfTP.id ")
    List<GoodsOfTradingPoint> getGoodsPriceAndNumberOfGoodsByTypeOfTradingPointAndGoods(@Param("type_of_trading_point_id") int type_of_trading_point_id, @Param("goods_id") int goods_id);

    //5
    @Query("select goodsOfTP from GoodsOfTradingPoint goodsOfTP  where goodsOfTP.goods.id = :goods_id order by goodsOfTP.id ")
    List<GoodsOfTradingPoint> getGoodsPriceAndNumberOfGoodsByAllTradingPointAndGoods(@Param("goods_id") int goods_id);

}
