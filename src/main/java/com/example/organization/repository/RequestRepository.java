package com.example.organization.repository;

import com.example.organization.model.Request;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RequestRepository extends JpaRepository<Request, Integer>{
}
