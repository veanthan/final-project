package com.example.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.LoginModel;
import com.example.backend.service.SignInService;
 
@RestController
public class SignInController {
     @Autowired
    private SignInService signin;

    @GetMapping("/auth")
    public boolean autho(@RequestParam String email,@RequestParam String password )
    {
        return signin.autho(email,password);
    } 
}
