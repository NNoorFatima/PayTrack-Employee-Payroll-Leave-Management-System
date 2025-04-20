package com.example.demo.repository;

import com.example.demo.model.Leave;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface LeaveRepository extends JpaRepository<Leave, Integer> {
    List<Leave> findByUserIdAndStatus(int userId, String status);

    @Query("SELECT u.name, l FROM Leave l JOIN User u ON l.userId = u.userid JOIN Employee e ON u.userid = e.userid WHERE e.deptid = :deptId AND l.status = :status")
    List<Object[]> findLeavesWithUserNameByDeptAndStatus(@Param("deptId") int deptId, @Param("status") String status);


}

