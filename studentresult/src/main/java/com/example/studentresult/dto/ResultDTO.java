package com.example.studentresult.dto;

import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class ResultDTO {
    private int resID;
    private String registrationNumber;
    private String ExamID;
    private String Year;
    private String Semester;
    private String CourseCode;
    private String CourseTitle;
    private String Result;
}
