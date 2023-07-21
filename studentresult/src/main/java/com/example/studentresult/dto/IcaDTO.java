package com.example.studentresult.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class IcaDTO {
    private int icaID;
    private String registrationNumber;
    private String ExamID;
    private String Year;
    private String Semester;
    private String Course;
    private String IcaNo;
    private String IcaMarks;
}
