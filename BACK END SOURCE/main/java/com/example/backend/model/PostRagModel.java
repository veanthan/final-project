package com.example.backend.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class PostRagModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    String address;
    String name;
    String email;
    String phone;
    String ragType;
    int quantity;
    int estimatedAmount;
    public PostRagModel()
    {


    }
    public PostRagModel(int id, String address, String name, String phone, String ragType, int quantity,
            int estimatedAmount,String email) {
        this.id = id;
        this.address = address;
        this.email = email;
        this.name = name;
        this.phone = phone;
        this.ragType = ragType;
        this.quantity = quantity;
        this.estimatedAmount = estimatedAmount;
    }
    
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getPhone() {
        return phone;
    }
    public void setPhone(String phone) {
        this.phone = phone;
    }
    public String getRagType() {
        return ragType;
    }
    public void setRagType(String ragType) {
        this.ragType = ragType;
    }
    public int getQuantity() {
        return quantity;
    }
    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
    public int getEstimatedAmount() {
        return estimatedAmount;
    }
    public void setEstimatedAmount(int estimatedAmount) {
        this.estimatedAmount = estimatedAmount;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    
}
