package com.example.demo.service;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public User getUserById(int id) {
        return userRepository.findById(id).orElse(null);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(int id, User userDetails) {
        Optional<User> userOptional = userRepository.findById(id);
        if (userOptional.isPresent()) {
            User user = userOptional.get();
            user.setName(userDetails.getName());
            user.setPassword(userDetails.getPassword());
            user.setGender(userDetails.getGender());
            user.setEmail(userDetails.getEmail());
            user.setPhone_no(userDetails.getPhone_no());
            user.setAddress(userDetails.getAddress());
            user.setDate_of_join(userDetails.getDate_of_join());
            return userRepository.save(user);
        }
        return null;
    }

    public boolean deleteUser(int id) {
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }
        return false;
    }

    public void changePassword(int userId, String currentPassword, String newPassword) {
        User user = userRepository.findById(userId).orElse(null);

        // Direct string comparison since passwords are stored in plain text
        if (!currentPassword.equals(user.getPassword())) {
            throw new IllegalArgumentException("Current password is incorrect.");
        }

        user.setPassword(newPassword); // Save new password directly
        userRepository.save(user);
    }

    // New method to validate user credentials
    public boolean validateCredentials(String username, String password) {
        System.out.println("🔍 Looking for user: '" + username + "'");
        User user = userRepository.findByName(username);

        if (user == null) {
            System.out.println("❌ User not found in DB.");
            return false;
        }

        System.out.println("✅ User found: " + user.getName());
        System.out.println("🔐 Password in DB: '" + user.getPassword() + "'");
        System.out.println("🔐 Password received: '" + password + "'");

        boolean match = user.getPassword().equals(password);
        System.out.println("✅ Password match: " + match);

        return match; // This line is now dynamic!
    }

    // New helper method to retrieve a user by username
    public User findByName(String username) {
        return userRepository.findByName(username);
    }

}
