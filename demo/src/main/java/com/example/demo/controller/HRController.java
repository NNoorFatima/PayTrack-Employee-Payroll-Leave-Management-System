package com.example.demo.controller;

import com.example.demo.model.HR;
import com.example.demo.model.User;
import com.example.demo.service.HRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hrs")
public class HRController {

    @Autowired
    private HRService hrService;

    // GET /hrs - Retrieve all HR records (user data is not included due to
    // @JsonIgnore)
    @GetMapping
    public List<HR> getAllHRs() {
        return hrService.getAllHRs();
    }

    // GET /hrs/{id} - Retrieve an HR record by userid (user data not included)
    @GetMapping("/{id}")
    public ResponseEntity<HR> getHRById(@PathVariable int id) {
        HR hr = hrService.getHRById(id);
        if (hr != null) {
            return ResponseEntity.ok(hr);
        }
        return ResponseEntity.notFound().build();
    }

    // GET /hrs/{id}/user - Retrieve the user data associated with the given HR
    // record
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
    public ResponseEntity<String> createHR(@RequestBody HR hr) {
        hrService.createHR(hr);
        return ResponseEntity.ok("HR added successfully!");
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

    // DELETE /hrs/{id} - Delete an HR record by userid
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHR(@PathVariable int id) {
        boolean deleted = hrService.deleteHR(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/deleteHRWithUser/{id}")
    public ResponseEntity<Void> deleteHRWithUser(@PathVariable int id) {
        boolean deleted = hrService.deleteHRWithUser(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

}
