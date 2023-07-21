package com.example.studentresult.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "StudentAdd")
public class Employee {
    @Id
    private String registrationNumber;
    private String IndexNumber;
    private String FullName;
    private String NameWithInitials;
    private String NIC;
    private String Gender;
    private String Password;
    private String Course;
    private String Degree;


    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }

    public String getIndexNumber() {
        return IndexNumber;
    }

    public void setIndexNumber(String indexNumber) {
        IndexNumber = indexNumber;
    }

    public String getFullName() {
        return FullName;
    }

    public void setFullName(String fullName) {
        FullName = fullName;
    }

    public String getNameWithInitials() {
        return NameWithInitials;
    }

    public void setNameWithInitials(String nameWithInitials) {
        NameWithInitials = nameWithInitials;
    }

    public String getNIC() {
        return NIC;
    }

    public void setNIC(String NIC) {
        this.NIC = NIC;
    }

    public String getGender() {
        return Gender;
    }

    public void setGender(String gender) {
        Gender = gender;
    }

    public String getLevel() {
        return Password;
    }

    public void setLevel(String level) {
        Password = level;
    }

    public String getCourse() {
        return Course;
    }

    public void setCourse(String course) {
        Course = course;
    }

    public String getDegree() {
        return Degree;
    }

    public void setDegree(String degree) {
        Degree = degree;
    }
}
