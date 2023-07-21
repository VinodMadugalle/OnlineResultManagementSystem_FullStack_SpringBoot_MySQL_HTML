package com.example.studentresult.repo;

import com.example.studentresult.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepo extends JpaRepository<Student,String> {
    List<Student> findByRegistrationNumber(String registrationNumber);
}
