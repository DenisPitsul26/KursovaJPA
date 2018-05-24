package com.example.organization.repository;

import com.example.organization.model.Buyer;
import com.example.organization.model.Request;
import com.example.organization.model.SoldGoods;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.time.LocalDate;
import java.util.List;

public interface SoldGoodsRepository extends JpaRepository<SoldGoods, Integer>{
    //6_1
    @Query("select sum(sold.numberOfSoldGoods) from SoldGoods sold where sold.dateOfSale between :startTime and :finishTime")
    double getNumberOfSoldGoodsByDateOfSale(@Param("startTime") LocalDate startTime, @Param("finishTime") LocalDate finishTime);

    //7_1
    @Query("select sum(sold.numberOfSoldGoods) from SoldGoods sold where sold.tradingPoint.typeOfTradingPoint.id = :typeOfTradingPointId and sold.dateOfSale between :startTime and :finishTime")
    double getNumberOfSoldGoodsBytypeOfTradingPointAndDateOfSale(@Param("typeOfTradingPointId") int typeOfTradingPointId,@Param("startTime") LocalDate startTime, @Param("finishTime") LocalDate finishTime);

}
