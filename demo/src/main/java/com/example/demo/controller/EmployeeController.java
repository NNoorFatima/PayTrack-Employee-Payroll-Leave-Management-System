package com.example.demo.controller;
import com.example.demo.model.Employee;
import com.example.demo.model.User;
import com.example.demo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/employees")
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    // GET /employees - Retrieve all employees
    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeService.getAllEmployees();
    }

    // GET /employees/{id} - Retrieve an employee by userid
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id) {
        Employee employee = employeeService.getEmployeeById(id);
        if (employee != null) {
            return ResponseEntity.ok(employee);
        }
        return ResponseEntity.notFound().build();
    }

    // POST /employees - Create a new employee
    @PostMapping
    public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee) {
        Employee createdEmployee = employeeService.createEmployee(employee);
        return new ResponseEntity<>(createdEmployee, HttpStatus.CREATED);
    }

    // PUT /employees/{id} - Update an existing employee
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employeeDetails) {
        Employee updatedEmployee = employeeService.updateEmployee(id, employeeDetails);
        if (updatedEmployee != null) {
            return ResponseEntity.ok(updatedEmployee);
        }
        return ResponseEntity.notFound().build();
    }

    // DELETE /employees/{id} - Delete an employee by userid
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEmployee(@PathVariable int id) {
        boolean deleted = employeeService.deleteEmployee(id);
        if (deleted) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    // GET /employee/{id}/user - Retrieve the user data for a given admin
    @GetMapping("/{id}/user")
    public ResponseEntity<User> getUserDataByEmployeeId(@PathVariable int id) {
        Employee employee = employeeService.getEmployeeById(id);
        if (employee != null && employee.getUser() != null) {
            return ResponseEntity.ok(employee.getUser());
        }
        return ResponseEntity.notFound().build();
    }




}
/*
 * 
 * @RestController tells that our code is experieincing some endpoint 
 * to tell we are using a webservice 
 * it is an annotation 
 * @GetMapping ("/endpoint") pass to this endpoint
 * @PathVariable int id
 * @RequestParam String name
 * @Autowired allows spring boot to inject dependencies into class 
 * @crossOrigin provides a way to allow cross-origin requests
 */
