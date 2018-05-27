package com.example.organization.controllers;

import com.example.organization.model.Request;
import com.example.organization.service.request.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/api")
public class RequestController {
    @Autowired
    private RequestService requestService;

    @RequestMapping("/request")
    public List<Request> showRequest() throws SQLException {
        return requestService.getAll();
    }

    @PostMapping("/request/insert")
    Request insertRequest(@RequestBody Request request) {
        return requestService.insertRequest(request);
    }

    @GetMapping("/request/delete")
    void deleteRequest(@RequestParam("id") int id) throws SQLException
    {
        requestService.deleteRequest(id);
    }

    @GetMapping("/request/get")
    Request getRequestById(@RequestParam("id") int id)
    {
        return requestService.getRequest(id);
    }

    @RequestMapping("/request/update")
    Request updateRequest(@RequestBody Request request, @RequestParam("id") int id)throws SQLException
    {
        request.setId(id);
        return requestService.updateRequest(request);
    }

    @RequestMapping("/request/getRequestByProviderAndGoods")
    public List<Request> getRequestByProviderAndGoods(@RequestParam("providerId") int providerId, @RequestParam("goodsId") int goodsId) throws SQLException {
        return requestService.getRequestByProviderAndGoods(providerId, goodsId);
    }
}
