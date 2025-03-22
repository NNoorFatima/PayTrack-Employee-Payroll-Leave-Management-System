package com.example.demo.controller;

import com.example.demo.model.Manager;
import com.example.demo.model.User;
import com.example.demo.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.demo.service.UserService;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/managers")
public class ManagerController {

    @Autowired
    private ManagerService managerService;
    @Autowired
    private UserService userService;

    // GET /managers - Retrieve all managers
    @GetMapping
    public ResponseEntity<List<Manager>> getAllManagers() {
        List<Manager> managers = managerService.getAllManagers();
        return ResponseEntity.ok(managers);
    }

    // GET /managers/{id} - Retrieve a manager by userid
    @GetMapping("/{id}")
    public ResponseEntity<Manager> getManagerById(@PathVariable int id) {
        Optional<Manager> managerOpt = managerService.getManagerById(id);
        return managerOpt.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // GET /managers/{id}/user - Retrieve the user data for a given manager
    @GetMapping("/{id}/user")
    public ResponseEntity<User> getManagerUser(@PathVariable int id) {
        Optional<Manager> managerOpt = managerService.getManagerById(id);
        if (managerOpt.isPresent() && managerOpt.get().getUser() != null) {
            return ResponseEntity.ok(managerOpt.get().getUser());
        }
        return ResponseEntity.notFound().build();
    }

    // POST /managers - Create a new manager
    @PostMapping
    public ResponseEntity<Manager> createManager(@RequestBody Manager manager) {
        Integer userId = manager.getUser().getUserid();
        if (userService.getUserById(userId) == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

        manager.setUserid(userId); // ✅ Make sure userid field is populated!

        Manager createdManager = managerService.createManager(manager);
        return new ResponseEntity<>(createdManager, HttpStatus.CREATED);
    }

    // PUT /managers/{id} - Update an existing manager
    @PutMapping("/{id}")
    public ResponseEntity<Manager> updateManager(@PathVariable int id, @RequestBody Manager managerDetails) {
        Optional<Manager> updatedManager = managerService.updateManager(id, managerDetails);
        return updatedManager.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
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
