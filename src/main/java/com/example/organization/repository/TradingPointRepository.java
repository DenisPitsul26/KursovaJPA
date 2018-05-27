package com.example.organization.repository;

import com.example.organization.model.TradingPoint;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TradingPointRepository extends JpaRepository<TradingPoint, Integer>{
    //14_2
    @Query("select tp.numberOfCounters from TradingPoint tp where tp.id = :tradingPointId")
    double getNumberOfCountersByTradingPoint(@Param("tradingPointId") int tradingPointId);

    //15_2
    @Query("select sum (tp.leasePayments+tp.utilities) from TradingPoint tp where tp.id = :tradingPointId")
    double getSumLeasePaymentsAndUtilitiesByTradingPoint(@Param("tradingPointId") int tradingPointId);
}
