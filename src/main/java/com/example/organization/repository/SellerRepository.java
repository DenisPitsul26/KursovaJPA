package com.example.organization.repository;

import com.example.organization.model.Buyer;
import com.example.organization.model.Seller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface SellerRepository extends JpaRepository<Seller, Integer>{
    //6_2
    @Query("select count(sel.id) from Seller sel")
    double getCountOfSeller();

    //7_2
    @Query("select count(sel.id) from Seller sel where sel.tradingPoint.typeOfTradingPoint.id = :typeOfTradingPointId")
    double getCountOfSellerByTypeOfTradingPointId(@Param("typeOfTradingPointId") int typeOfTradingPointId);

    //11
    @Query("select sel from Seller sel where sel.tradingPoint.typeOfTradingPoint.id = :typeOfTradingPointId")
    List<Seller> getSallaryOfSellerByTypeOfTradingPoint(@Param("typeOfTradingPointId") int typeOfTradingPointId);

    //12
    @Query("select sel from Seller sel")
    List<Seller> getSallaryOfSellerByAllTradingPoint();

    //15_3
    @Query("select sum(sel.sallary) from Seller sel where sel.tradingPoint.id = :tradingPointId")
    double getSumSallaryOfSellersByTradingPoint(@Param("tradingPointId") int tradingPointId);
}
