package com.example.organization.service.request;

import com.example.organization.model.Request;
import com.example.organization.repository.RequestRepository;
import com.example.organization.service.request.interfaces.IRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.sql.SQLException;
import java.time.LocalDate;
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

    @Override
    public List<Request> getProvidersByGoodsAndDateOfRequest(int goodsId, LocalDate startTime, LocalDate finishTime) throws SQLException {
        return requestRepository.getProvidersByGoodsAndDateOfRequest(goodsId, startTime, finishTime);
    }
}
