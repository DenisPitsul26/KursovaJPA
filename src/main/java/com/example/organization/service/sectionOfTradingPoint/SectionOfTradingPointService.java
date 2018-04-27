package com.example.organization.service.sectionOfTradingPoint;


import com.example.organization.model.SectionOfTradingPoint;
import com.example.organization.repository.SectionOfTradingPointRepository;
import com.example.organization.service.sectionOfTradingPoint.interfaces.ISectionOfTradingPointService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class SectionOfTradingPointService implements ISectionOfTradingPointService{
    @Autowired
    SectionOfTradingPointRepository sectionOfTradingPointRepository;

    @Override
    public SectionOfTradingPoint insertSectionOfTradingPoint(SectionOfTradingPoint sectionOfTradingPoint) {
        return sectionOfTradingPointRepository.save(sectionOfTradingPoint);
    }

    @Override
    public SectionOfTradingPoint getSectionOfTradingPoint(int id) {
        return sectionOfTradingPointRepository.findById(id).get();
    }

    @Override
    public SectionOfTradingPoint updateSectionOfTradingPoint(SectionOfTradingPoint sectionOfTradingPoint) throws SQLException {
        return sectionOfTradingPointRepository.save(sectionOfTradingPoint);
    }

    @Override
    public void deleteSectionOfTradingPoint(int id) throws SQLException {
        sectionOfTradingPointRepository.deleteById(id);
    }

    @Override
    public List<SectionOfTradingPoint> getAll() throws SQLException {
        return sectionOfTradingPointRepository.findAll();
    }
}
