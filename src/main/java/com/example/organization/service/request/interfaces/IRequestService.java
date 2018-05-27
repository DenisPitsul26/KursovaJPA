package com.example.organization.service.request.interfaces;

import com.example.organization.model.Goods;
import com.example.organization.model.Request;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

public interface IRequestService {
    public Request insertRequest(Request request);

    public Request getRequest(int id);

    public Request updateRequest(Request request) throws SQLException;

    public void deleteRequest(int id) throws SQLException;

    public List<Request> getAll() throws SQLException;

    List<Request> getRequestByProviderAndGoods(int providerId, int goodsId) throws SQLException;

}
