package com.example.studentresult.service;


import com.example.studentresult.dto.StudentDTO;
import com.example.studentresult.entity.Student;
import com.example.studentresult.repo.StudentRepo;
import com.example.studentresult.util.VarList;
import jakarta.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class StudentService {
    @Autowired
    private StudentRepo studentRepo;
    @Autowired
    private ModelMapper modelMapper;
    public String saveStudent(StudentDTO studentDTO){
        if (studentRepo.existsById(studentDTO.getRegistrationNumber())){
            return VarList.RSP_DUPLICATED;
        }else {
            studentRepo.save(modelMapper.map(studentDTO, Student.class));
            return VarList.RSP_SUCCESS;
        }
    }
    public String updateStudent(StudentDTO studentDTO){
        if (studentRepo.existsById(studentDTO.getRegistrationNumber())){
            studentRepo.save(modelMapper.map(studentDTO, Student.class));
            return VarList.RSP_SUCCESS;

        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
    public List<StudentDTO> getAllStudent(){
        List<Student> studentList = studentRepo.findAll();
        return modelMapper.map(studentList,new TypeToken<ArrayList<StudentDTO>>(){
        }.getType());
    }
    public interface ICityService {

        List<Student> findById(String RegistrationNumber);
    }

    public StudentDTO searchStudent(String RegistrationNumber){
        if (studentRepo.existsById(String.valueOf(RegistrationNumber))){
            Student student =studentRepo.findById(String.valueOf(RegistrationNumber)).orElse(null);
            return modelMapper.map(student,StudentDTO.class);
        }else {
            return null;
        }
    }
    public String deleteStudent(String RegistrationNumber){
        if (studentRepo.existsById(String.valueOf(RegistrationNumber))){
            studentRepo.deleteById(String.valueOf(RegistrationNumber));
            return VarList.RSP_SUCCESS;
        }else {
            return VarList.RSP_NO_DATA_FOUND;
        }
    }
}
