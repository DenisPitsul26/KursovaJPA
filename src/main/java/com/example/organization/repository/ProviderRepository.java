package com.example.organization.repository;

import com.example.organization.model.Provider;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.sql.Date;
import java.util.List;

public interface ProviderRepository extends JpaRepository<Provider, Integer>{

}
