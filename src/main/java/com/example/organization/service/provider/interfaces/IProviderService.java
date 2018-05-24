package com.example.organization.service.provider.interfaces;

import com.example.organization.model.Buyer;
import com.example.organization.model.Provider;
import com.example.organization.model.Request;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

public interface IProviderService {
    public Provider insertProvider(Provider provider);

    public Provider getProvider(int id);

    public Provider updateProvider(Provider provider) throws SQLException;

    public void deleteProvider(int id) throws SQLException;

    public List<Provider> getAll() throws SQLException;

    List<Provider> getProvidersByGoodsAndDateOfRequest(int goodsId, LocalDate startTime, LocalDate finishTime) throws SQLException;
}
