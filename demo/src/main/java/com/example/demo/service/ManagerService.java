package com.example.demo.service;

import com.example.demo.model.Manager;
import com.example.demo.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class ManagerService {

    @Autowired
    private ManagerRepository managerRepository;

    // Retrieve all managers
    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }

    // Retrieve a manager by userid
    public Manager getManagerById(int userid) {
        return managerRepository.findById(userid).orElse(null);
    }

    // Create a new manager
    public Manager createManager(Manager manager) {
        return managerRepository.save(manager);
    }

    // Update an existing manager (only deptid is updateable in this example)
    public Manager updateManager(int userid, Manager managerDetails) {
        Manager existingManager = managerRepository.findById(userid).orElse(null);
        if (existingManager != null) {
            existingManager.setDeptid(managerDetails.getDeptid());
            return managerRepository.save(existingManager);
        }
        return null;
    }

    // Delete a manager by userid
    public boolean deleteManager(int userid) {
        if (managerRepository.existsById(userid)) {
            managerRepository.deleteById(userid);
            return true;
        }
        return false;
    }
}
