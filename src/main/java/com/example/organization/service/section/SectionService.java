package com.example.organization.service.section;

import com.example.organization.model.Section;
import com.example.organization.repository.SectionRepository;
import com.example.organization.service.section.interfaces.ISectionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.sql.SQLException;
import java.util.List;

@Service
public class SectionService implements ISectionService{
    @Autowired
    SectionRepository sectionRepository;

    @Override
    public Section insertSection(Section section) {
        return sectionRepository.save(section);
    }

    @Override
    public Section getSection(int id) {
        return sectionRepository.findById(id).get();
    }

    @Override
    public Section updateSection(Section section) throws SQLException {
        return sectionRepository.save(section);
    }

    @Override
    public void deleteSection(int id) throws SQLException {
        sectionRepository.deleteById(id);
    }

    @Override
    public List<Section> getAll() throws SQLException {
        return sectionRepository.findAll();
    }
}
