package com.example.studentresult.repo;


import com.example.studentresult.entity.Ica;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IcaRepo extends JpaRepository<Ica,Integer> {
    List<Ica> findByRegistrationNumber(String registrationNumber);
}
