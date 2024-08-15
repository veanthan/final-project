package com.example.backend.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.LoginModel;

@Repository
public interface LogRepo extends JpaRepository<LoginModel, String> {
    Optional<LoginModel> findByEmailAndPass(String email, String pass);

}
