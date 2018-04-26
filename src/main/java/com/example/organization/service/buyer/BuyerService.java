package com.example.organization.service.buyer;

import com.example.organization.model.Buyer;
import com.example.organization.repository.BuyerRepository;
import com.example.organization.service.buyer.interfaces.IBuyerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class BuyerService implements IBuyerService{
    @Autowired
    BuyerRepository buyerRepository;

    @Override
    public Buyer insertBuyer(Buyer buyer) {
        return buyerRepository.save(buyer);
    }

    @Override
    public Buyer getBuyer(int id) throws SQLException{
        return buyerRepository.findById(id).get();
    }

    @Override
    public Buyer updateBuyer(Buyer buyer) throws SQLException {
        return buyerRepository.save(buyer);
    }

    @Override
    public void deleteBuyer(int id) throws SQLException {
        buyerRepository.deleteById(id);
    }

    @Override
    public List<Buyer> getAll() throws SQLException {
        return buyerRepository.findAll();
    }
}
