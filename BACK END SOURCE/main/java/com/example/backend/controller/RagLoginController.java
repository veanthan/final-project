package com.example.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.model.RagLogin;
import com.example.backend.service.RagLoginService;

@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/ecoconnect")
public class RagLoginController {
    @Autowired
    private RagLoginService loginService;

    @PostMapping("/login/post")
    public boolean postMethodName(@RequestBody RagLogin login) {
        return loginService.saveLogin(login);
    }

    @GetMapping("/login")
    public List<RagLogin> getRagsDetails() {
        return loginService.getLoginAll();
    }

    @GetMapping("/login/details")
    public RagLogin getRagDetailsByEmail(@RequestParam String email) {
        return loginService.getLoginByEmail(email);
    }
}
