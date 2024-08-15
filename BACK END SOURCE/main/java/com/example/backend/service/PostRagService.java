package com.example.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.model.PostRagModel;
import com.example.backend.repository.PostRagRepo;

@Service
public class PostRagService{
    @Autowired
    PostRagRepo repo;

    
    public PostRagModel postragservice(PostRagModel p)
    {
        return repo.save(p);
    }

    public List<PostRagModel> getRags() {
        
        return repo.findAll();
    }
    public void deletePost(int id)
    {
        repo.deleteById(id);
    }
}