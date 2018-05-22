package com.example.organization.repository;

import com.example.organization.model.Provider;
import com.example.organization.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Integer>{

    @Query("select req.provider.nameOfProvider from Request req where req.goods.id = :goods_id and req.dateOfRequest >= :startTime and req.dateOfRequest <= :finishTime order by req.id")
    //@Query("select req.provider from Request req")
    List<Request> getProvidersByGoodsAndDateOfRequest(@Param("goods_id") int goods_id, @Param("startTime") LocalDate startTime, @Param("finishTime") LocalDate finishTime);

}
