package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.LoginModel;
import com.example.backend.service.LogService;

@CrossOrigin("http://localhost:5173/")
@RestController
@RequestMapping("/login")
public class Login {

    @Autowired
    
     private LogService logser;
    @PostMapping("/save")
    private boolean pos(@RequestBody LoginModel log) {
        return logser.saveLogin(log);
    }

    @GetMapping("/auth")
    public boolean autho(@RequestParam String email, @RequestParam String password) {
        return logser.autho(email,password);
    }
    
}
































