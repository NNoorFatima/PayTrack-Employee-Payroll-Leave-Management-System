package com.example.demo.controller;

import com.example.demo.model.HR;
import com.example.demo.model.User;
import com.example.demo.service.HRService;
import com.example.demo.service.UserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/hrs")
public class HRController {

    @Autowired
    private HRService hrService;



    @Autowired
    private UserService userService;

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

    // DELETE /hrs/{id} - Delete an HR record by userid
    // DELETE /hrs/{id} - Delete an HR record AND its associated user
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteHR(@PathVariable int id) {
        // Call the service method to delete HR and associated user
        boolean deleted = hrService.deleteHRWithUser(id);

        // Return response based on the result of deletion
        if (deleted) {
            return ResponseEntity.ok("HR and User deleted successfully!");
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("HR or User not found.");
        }
    }


      /** POST /hrs/login */
    @PostMapping("/login")
    public ResponseEntity<?> loginHR(@RequestBody Map<String,String> loginData) {
        String username = loginData.get("username");
        String password = loginData.get("password");

        // 1) validate username/password
        if (!userService.validateCredentials(username, password)) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                            .body("Incorrect username or password");
        }

        // 2) load the User entity
        User user = userService.findByName(username);
        if (user == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                            .body("User not found");
        }

        // 3) load the HR record by that userId
        HR hr = hrService.getHRById(user.getUserid());
        if (hr == null) {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                            .body("User is not an HR");
        }

        // 4) build response payload
        Map<String,Object> resp = new HashMap<>();
        resp.put("hrId",         hr.getUserid());
        resp.put("username",     user.getName());
        resp.put("userId",       user.getUserid());
        resp.put("departmentId", hr.getDeptid());

        return ResponseEntity.ok(resp);
    }

}
