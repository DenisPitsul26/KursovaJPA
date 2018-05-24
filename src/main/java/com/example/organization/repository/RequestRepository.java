package com.example.organization.repository;

import com.example.organization.model.Provider;
import com.example.organization.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.time.LocalDate;
import java.util.List;

public interface RequestRepository extends JpaRepository<Request, Integer>{

}
