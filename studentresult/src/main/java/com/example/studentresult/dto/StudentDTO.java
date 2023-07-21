package com.example.studentresult.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class StudentDTO {
    private String registrationNumber;
    private String IndexNumber;
    private String FullName;
    private String NameWithInitials;
    private String NIC;
    private String Gender;
    private String Password;
    private String Course;
    private String Degree;
}
