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
    //13
    @Query("select req from Request req where req.provider.id = :providerId and req.goods.id = :goodsId order by req.id")
    List<Request> getRequestByProviderAndGoods(@Param("providerId") int providerId, @Param("goodsId") int goodsId);

    //16
    @Query("select req from Request req where req.numberRequest = :numberRequest")
    List<Request> getRequestByNumberRequest(@Param("numberRequest") int numberRequest);

    //16(додатокове)
    @Query("select req from Request req group by req.numberRequest order by req.numberRequest")
    List<Request> getDifferentNumberRequest();
}
