package com.example.demo.controller;

import com.example.demo.model.Employee;
import com.example.demo.model.Leave;
import com.example.demo.service.LeaveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/leaves")
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    // Retrieve all leaves
    @GetMapping
    public List<Leave> getAllLeaves() {
        return leaveService.getAllLeaves();
    }

    // Retrieve a leave by id
    @GetMapping("/{id}")
    public ResponseEntity<Leave> getLeaveById(@PathVariable int id) {
        Leave leave = leaveService.getLeaveById(id);
        if (leave != null) {
            return ResponseEntity.ok(leave);
        }
        return ResponseEntity.notFound().build();
    }

    // Create a new leave
    @PostMapping
    public ResponseEntity<Leave> createLeave(@RequestBody Leave leave) {
        Leave createdLeave = leaveService.createLeave(leave);
        return new ResponseEntity<>(createdLeave, HttpStatus.CREATED);
        
    }
    


    // Update an existing leave by id
    @PutMapping("/{id}")
    public ResponseEntity<Leave> updateLeave(@PathVariable int id, @RequestBody Leave leaveDetails) {
        Leave updatedLeave = leaveService.updateLeave(id, leaveDetails);
        if (updatedLeave != null) {
            return ResponseEntity.ok(updatedLeave);
        }
        return ResponseEntity.notFound().build();
    }

    // **New: Update only the status of an existing leave**
    @PutMapping("/{id}/status")
    public ResponseEntity<Leave> updateLeaveStatus(@PathVariable int id, @RequestBody Map<String, String> statusUpdate) {
        String newStatus = statusUpdate.get("status");
        Leave updatedLeave = leaveService.updateLeaveStatus(id, newStatus);
        if (updatedLeave != null) {
            return ResponseEntity.ok(updatedLeave);
        }
        return ResponseEntity.notFound().build();
    }

    // Delete a leave by id
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteLeave(@PathVariable int id) {
        leaveService.deleteLeave(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/approved")
    public ResponseEntity<List<Leave>> getApprovedLeaves(@RequestParam int userId) {
        List<Leave> approvedLeaves = leaveService.getApprovedLeavesByUserId(userId);
        return ResponseEntity.ok(approvedLeaves);
    }

    @GetMapping("/allStatus")
    public ResponseEntity<List<Leave>> getAllStatusLeave(@RequestParam int userId, @RequestParam String status) {
        List<Leave> leaveRequests = leaveService.getAllStatusLeave(userId, status); // Use the dynamic status
        return ResponseEntity.ok(leaveRequests);
    }




}
