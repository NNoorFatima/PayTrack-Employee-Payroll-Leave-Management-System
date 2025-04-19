package com.example.demo.controller;

import com.example.demo.model.HR;
import com.example.demo.model.User;
import com.example.demo.repository.LeaveRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.HRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hrs")
public class HRController {

    @Autowired
    private HRService hrService;

    @Autowired
    private LeaveRepository leaveRepository;

    @Autowired
    private UserRepository userRepository;

    // GET /hrs - Retrieve all HR records
    @GetMapping
    public List<HR> getAllHRs() {
        return hrService.getAllHRs();
    }

    // GET /hrs/{id} - Retrieve an HR record by userid
    @GetMapping("/{id}")
    public ResponseEntity<HR> getHRById(@PathVariable int id) {
        HR hr = hrService.getHRById(id);
        if (hr != null) {
            return ResponseEntity.ok(hr);
        }
        return ResponseEntity.notFound().build();
    }

    // GET /hrs/{id}/user - Retrieve user associated with the HR
    @GetMapping("/{id}/user")
    public ResponseEntity<User> getHRUser(@PathVariable int id) {
        HR hr = hrService.getHRById(id);
        if (hr != null && hr.getUser() != null) {
            return ResponseEntity.ok(hr.getUser());
        }
        return ResponseEntity.notFound().build();
    }

    // POST /hrs - Create a new HR record
    @PostMapping
    public ResponseEntity<HR> createHR(@RequestBody HR hr) {
        HR createdHR = hrService.createHR(hr);
        return new ResponseEntity<>(createdHR, HttpStatus.CREATED);
    }

    // PUT /hrs/{id} - Update an existing HR record
    @PutMapping("/{id}")
    public ResponseEntity<HR> updateHR(@PathVariable int id, @RequestBody HR hrDetails) {
        HR updatedHR = hrService.updateHR(id, hrDetails);
        if (updatedHR != null) {
            return ResponseEntity.ok(updatedHR);
        }
        return ResponseEntity.notFound().build();
    }

    // DELETE /hrs/{id} - Delete HR and associated user
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHR(@PathVariable int id) {
        boolean deleted = hrService.deleteHRWithUser(id);
        if (deleted) {
            return ResponseEntity.ok("HR and User deleted successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("HR or User not found.");
        }
    }

    // GET /hrs/leave-counts - Count accepted leaves for each user
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping("/leave-counts")
    public ResponseEntity<List<LeaveCountDTO>> getLeaveCounts() {
        List<Object[]> leaveCounts = leaveRepository.countAcceptedLeavesGroupedByUserId();

        List<LeaveCountDTO> result = leaveCounts.stream().map(obj -> {
            int userId = (int) obj[0];
            long count = (long) obj[1];
            String employeeName = userRepository.findById(userId)
                    .map(User::getName) // Or use getName() if your method is named that
                    .orElse("Unknown User");

            return new LeaveCountDTO(employeeName, (int) count);
        }).toList();

        return ResponseEntity.ok(result);
    }

    // ✅ Fixed version of DTO — not nested
    public static class LeaveCountDTO {
        private String employeeName;
        private int totalLeaves;

        public LeaveCountDTO(String employeeName, int totalLeaves) {
            this.employeeName = employeeName;
            this.totalLeaves = totalLeaves;
        }

        public String getEmployeeName() {
            return employeeName;
        }

        public int getTotalLeaves() {
            return totalLeaves;
        }
    }
}
