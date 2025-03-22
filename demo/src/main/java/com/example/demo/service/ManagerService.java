package com.example.demo.service;

import com.example.demo.model.Manager;
import com.example.demo.repository.ManagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class ManagerService {

    @Autowired
    private ManagerRepository managerRepository;

    public List<Manager> getAllManagers() {
        return managerRepository.findAll();
    }

    public Optional<Manager> getManagerById(int userid) {
        return managerRepository.findById(userid);
    }

    public Manager createManager(Manager manager) {
        return managerRepository.save(manager);
    }

    @Transactional
    public Optional<Manager> updateManager(int userid, Manager managerDetails) {
        return managerRepository.findById(userid).map(existingManager -> {
            existingManager.setDeptid(managerDetails.getDeptid());
            return managerRepository.save(existingManager);
        });
    }

    @Transactional
    public boolean deleteManager(int userid) {
        if (managerRepository.existsById(userid)) {
            managerRepository.deleteById(userid);
            return true;
        }
        return false;
    }
}
