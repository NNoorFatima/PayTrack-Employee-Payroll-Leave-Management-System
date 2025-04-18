package com.example.demo.repository;

import com.example.demo.model.Leave;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Integer> {
    List<Leave> findByUserIdAndStatus(int userId, String status);

}
