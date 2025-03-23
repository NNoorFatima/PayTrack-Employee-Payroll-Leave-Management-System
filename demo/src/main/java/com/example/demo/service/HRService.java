package com.example.demo.service;

import com.example.demo.model.HR;
import com.example.demo.repository.HRRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HRService {

    @Autowired
    private HRRepository hrRepository;

    @Autowired
    private UserService userService;

    // Retrieve all HR records
    public List<HR> getAllHRs() {
        return hrRepository.findAll();
    }

    // Retrieve an HR record by userid
    public HR getHRById(int userid) {
        return hrRepository.findById(userid).orElse(null);
    }

    // Create a new HR record
    public HR createHR(HR hr) {
        return hrRepository.save(hr);
    }

    // Update an existing HR record (only deptid is updateable)
    public HR updateHR(int userid, HR hrDetails) {
        HR existingHR = hrRepository.findById(userid).orElse(null);
        if (existingHR != null) {
            existingHR.setDeptid(hrDetails.getDeptid());
            return hrRepository.save(existingHR);
        }
        return null;
    }

    // Only deletes the HR record
    public boolean deleteHR(int userid) {
        if (hrRepository.existsById(userid)) {
            hrRepository.deleteById(userid);
            return true;
        }
        return false;
    }

    public boolean deleteHRWithUser(int userid) {
        HR hr = hrRepository.findById(userid).orElse(null);
        if (hr != null) {
            int userId = hr.getUser().getUserid();
            hrRepository.deleteById(userid);
            userService.deleteUser(userId);
            return true;
        }
        return false;
    }
}
