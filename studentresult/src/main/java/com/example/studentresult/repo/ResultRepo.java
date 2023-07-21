package com.example.studentresult.repo;

import com.example.studentresult.entity.Result;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ResultRepo extends JpaRepository<Result,Integer> {
    List<Result> findByRegistrationNumber(String registrationNumber);
}
