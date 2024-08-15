package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class LoginModel {
    @Id
    String email;
    String pass;
    public String getemail() {
        return email;
    }
    public LoginModel(String email, String pass) {
        this.email = email;
        this.pass = pass;
    }
    public LoginModel() {
    }
    public void setemail(String email) {
        this.email = email;
    }
    public String getPass() {
        return pass;
    }
    public void setPass(String pass) {
        this.pass = pass;
    }
}
