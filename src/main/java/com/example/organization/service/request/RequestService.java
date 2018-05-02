package com.example.organization.service.request;

import com.example.organization.model.Request;
import com.example.organization.repository.RequestRepository;
import com.example.organization.service.request.interfaces.IRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class RequestService implements IRequestService{
    @Autowired
    RequestRepository requestRepository;

    @Override
    public Request insertRequest(Request request) {
        return requestRepository.save(request);
    }

    @Override
    public Request getRequest(int id) {
        return requestRepository.findById(id).get();
    }

    @Override
    public Request updateRequest(Request request) throws SQLException {
        return requestRepository.save(request);
    }

    @Override
    public void deleteRequest(int id) throws SQLException {
        requestRepository.deleteById(id);
    }

    @Override
    public List<Request> getAll() throws SQLException {
        return requestRepository.findAll();
    }
}