package com.example.organization.service.provider;

import com.example.organization.model.Provider;
import com.example.organization.repository.ProviderRepository;
import com.example.organization.service.provider.interfaces.IProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class ProviderService implements IProviderService{
    @Autowired
    ProviderRepository providerRepository;

    @Override
    public Provider insertProvider(Provider provider) {
        return providerRepository.save(provider);
    }

    @Override
    public Provider getProvider(int id) {
        return providerRepository.findById(id).get();
    }

    @Override
    public Provider updateProvider(Provider provider) throws SQLException {
        return providerRepository.save(provider);
    }

    @Override
    public void deleteProvider(int id) throws SQLException {
        providerRepository.deleteById(id);
    }

    @Override
    public List<Provider> getAll() throws SQLException {
        return providerRepository.findAll();
    }
}
