package com.example.demo.controller;

import com.example.demo.model.Manager;
import com.example.demo.model.User;
import com.example.demo.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/managers")
public class ManagerController {

    @Autowired
    private ManagerService managerService;

    // GET /managers - Retrieve all managers (default: without user data, due to @JsonIgnore)
    @GetMapping
    public List<Manager> getAllManagers() {
        return managerService.getAllManagers();
    }

    // GET /managers/{id} - Retrieve a manager by userid (user data is not included in the response)
    @GetMapping("/{id}")
    public ResponseEntity<Manager> getManagerById(@PathVariable int id) {
        Manager manager = managerService.getManagerById(id);
        if (manager != null) {
            return ResponseEntity.ok(manager);
        }
        return ResponseEntity.notFound().build();
    }

    // GET /managers/{id}/user - Retrieve the user data for a given manager
    @GetMapping("/{id}/user")
    public ResponseEntity<User> getManagerUser(@PathVariable int id) {
        Manager manager = managerService.getManagerById(id);
        if (manager != null && manager.getUser() != null) {
            return ResponseEntity.ok(manager.getUser());
        }
        return ResponseEntity.notFound().build();
    }

    // POST /managers - Create a new manager
    @PostMapping
    public ResponseEntity<Manager> createManager(@RequestBody Manager manager) {
        Manager createdManager = managerService.createManager(manager);
        return new ResponseEntity<>(createdManager, HttpStatus.CREATED);
    }

    // PUT /managers/{id} - Update an existing manager
    @PutMapping("/{id}")
    public ResponseEntity<Manager> updateManager(@PathVariable int id, @RequestBody Manager managerDetails) {
        Manager updatedManager = managerService.updateManager(id, managerDetails);
        if (updatedManager != null) {
            return ResponseEntity.ok(updatedManager);
        }
        return ResponseEntity.notFound().build();
    }

    // DELETE /managers/{id} - Delete a manager by userid
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteManager(@PathVariable int id) {
        boolean deleted = managerService.deleteManager(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
