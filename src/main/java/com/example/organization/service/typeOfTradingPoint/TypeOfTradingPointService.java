package com.example.organization.service.typeOfTradingPoint;

import com.example.organization.model.TypeOfTradingPoint;
import com.example.organization.repository.TypeOfTradingPointRepository;
import com.example.organization.service.typeOfTradingPoint.interfaces.ITypeOfTradingPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class TypeOfTradingPointService implements ITypeOfTradingPointService {
    @Autowired
    TypeOfTradingPointRepository typeOfTradingPointRepository;

    @Override
    public TypeOfTradingPoint insertTypeOfTradingPoint(
            TypeOfTradingPoint typeOfTradingPoint) {
        return typeOfTradingPointRepository.save(typeOfTradingPoint);
    }

    @Override
    public TypeOfTradingPoint getTypeOfTradingPoint(int id) {
        return typeOfTradingPointRepository.findById(id).get();
    }

    @Override
    public TypeOfTradingPoint updateTypeOfTradingPoint(TypeOfTradingPoint typeOfTradingPoint) throws SQLException {
        return typeOfTradingPointRepository.save(typeOfTradingPoint);
    }

    @Override
    public void deleteTypeOfTradingPoint(int id) {
        typeOfTradingPointRepository.deleteById(id);
    }

    @Override
    public List<TypeOfTradingPoint> getAll() {
        return typeOfTradingPointRepository.findAll();
    }
}
