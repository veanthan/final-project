package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.RagLogin;
import com.example.backend.repository.RagLoginRepo;

@Service
public class RagLoginService {
    @Autowired
    private RagLoginRepo loginRepo;

    public boolean saveLogin(RagLogin login) {
        try {
            loginRepo.save(login);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    public List<RagLogin> getLoginAll() {
        return loginRepo.findAll();
    }

    public RagLogin getLoginByEmail(String email) {
        return loginRepo.findByEmail(email);
    }
}
