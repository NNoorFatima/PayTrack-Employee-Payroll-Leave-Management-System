package com.example.demo.controller;

import com.example.demo.model.Manager;
import com.example.demo.model.User;
import com.example.demo.service.ManagerService;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/managers")
public class ManagerController {

    @Autowired
    private ManagerService managerService;
    @Autowired
    private UserService userService;

    // GET /managers - Retrieve all managers (user data not included)
    @GetMapping
    public List<Manager> getAllManagers() {
        return managerService.getAllManagers();
    }

    // GET /managers/{id} - Retrieve a manager by userid
    @GetMapping("/{id}")
    public ResponseEntity<Manager> getManagerById(@PathVariable int id) {
        Manager manager = managerService.getManagerById(id);
        if (manager != null) {
            return ResponseEntity.ok(manager);
        }
        return ResponseEntity.notFound().build();
    }

    // GET /managers/{id}/user - Retrieve user data linked to the manager
    @GetMapping("/{id}/user")
    public ResponseEntity<User> getManagerUser(@PathVariable int id) {
        Manager manager = managerService.getManagerById(id);
        if (manager != null && manager.getUser() != null) {
            return ResponseEntity.ok(manager.getUser());
        }
        return ResponseEntity.notFound().build();
    }

    // POST /managers - Create a new manager
    // POST /managers - Create a new manager (link to existing user)
    @PostMapping
    public ResponseEntity<String> createManager(@RequestBody Manager manager) {
        int userId = manager.getUserid();

        // ✅ Use userService to fetch the user
        User user = userService.getUserById(userId);
        if (user == null) {
            return ResponseEntity.badRequest().body("User not found for ID: " + userId);
        }

        // Link manager to user object before saving
        manager.setUser(user);

        managerService.createManager(manager);
        return ResponseEntity.ok("Manager added successfully!");
    }

    // PUT /managers/{id} - Update manager
    @PutMapping("/{id}")
    public ResponseEntity<Manager> updateManager(@PathVariable int id, @RequestBody Manager managerDetails) {
        Manager updatedManager = managerService.updateManager(id, managerDetails);
        if (updatedManager != null) {
            return ResponseEntity.ok(updatedManager);
        }
        return ResponseEntity.notFound().build();
    }

    // DELETE /managers/{id} - Delete only from manager table
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteManager(@PathVariable int id) {
        boolean deleted = managerService.deleteManager(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // DELETE /managers/deleteManagerWithUser/{id} - Delete from manager & user
    // tables
    @DeleteMapping("/deleteManagerWithUser/{id}")
    public ResponseEntity<Void> deleteManagerWithUser(@PathVariable int id) {
        boolean deleted = managerService.deleteManagerWithUser(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
