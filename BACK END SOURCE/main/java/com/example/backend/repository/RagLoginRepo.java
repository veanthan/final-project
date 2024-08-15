package com.example.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend.model.RagLogin;

@Repository
public interface RagLoginRepo extends JpaRepository<RagLogin, Integer> {
    RagLogin findByEmail(String email);
}
