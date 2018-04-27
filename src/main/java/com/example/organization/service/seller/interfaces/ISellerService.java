package com.example.organization.service.seller.interfaces;

import com.example.organization.model.Seller;

import java.sql.SQLException;
import java.util.List;

public interface ISellerService {
    public Seller insertSeller(Seller seller);

    public Seller getSeller(int id);

    public Seller updateSeller(Seller seller) throws SQLException;

    public void deleteSeller(int id) throws SQLException;

    public List<Seller> getAll() throws SQLException;
}
