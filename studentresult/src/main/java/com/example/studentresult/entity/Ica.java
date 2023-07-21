package com.example.studentresult.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "IcaAdd")
public class Ica {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int icaID;
    private String registrationNumber;
    private String ExamID;
    private String Year;
    private String Semester;
    private String Course;
    private String IcaNo;
    private String IcaMarks;

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getExamID() {
        return ExamID;
    }

    public void setExamID(String examID) {
        ExamID = examID;
    }

    public int getIcaID() {
        return icaID;
    }

    public void setIcaID(int icaID) {
        this.icaID = icaID;
    }

    public String getYear() {
        return Year;
    }

    public void setYear(String year) {
        Year = year;
    }

    public String getSemester() {
        return Semester;
    }

    public void setSemester(String semester) {
        Semester = semester;
    }

    public String getCourse() {
        return Course;
    }

    public void setCourse(String course) {
        Course = course;
    }

    public String getIcaNo() {
        return IcaNo;
    }

    public void setIcaNo(String icaNo) {
        IcaNo = icaNo;
    }

    public String getIcaMarks() {
        return IcaMarks;
    }

    public void setIcaMarks(String icaMarks) {
        IcaMarks = icaMarks;
    }
}
