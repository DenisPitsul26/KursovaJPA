package com.example.organization.service.sectionOfTradingPoint.interfaces;

import com.example.organization.model.SectionOfTradingPoint;

import java.sql.SQLException;
import java.util.List;

public interface ISectionOfTradingPointService {
    public SectionOfTradingPoint insertSectionOfTradingPoint(SectionOfTradingPoint sectionOfTradingPoint);

    public SectionOfTradingPoint getSectionOfTradingPoint(int id);

    public SectionOfTradingPoint updateSectionOfTradingPoint(SectionOfTradingPoint sectionOfTradingPoint) throws SQLException;

    public void deleteSectionOfTradingPoint(int id) throws SQLException;

    public List<SectionOfTradingPoint> getAll() throws SQLException;
}
