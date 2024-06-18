package com.grocery.controller;

import com.grocery.entity.*;
import com.grocery.repo.UserRepo;
import com.grocery.service.JwtService;
import com.grocery.service.ProductService;
import com.grocery.service.UserProductService;
import com.grocery.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
public class UserController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

    @Autowired
    private ProductService productService;

    @Autowired
    private UserProductService userProductService;

    @Autowired
    private JwtService jwtService;

    @GetMapping("welcome")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public String hello() {
        return "Welcome, Admin!";
    }

    @GetMapping("welcome1")
    @PreAuthorize("hasRole('ROLE_USER')")
    public String hello1() {
        return "Welcome, User!";
    }

    @GetMapping("welcome2")
    @PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_USER')")
    public String hello2() {
        return "Welcome, Admin or User!";
    }

    @PostMapping("registerUser")
    public ResponseEntity<String> registerUser(@RequestBody UsersEntity user) {
        try {
            userService.saveUser(user);
            return ResponseEntity.ok("User registered successfully!");
        } catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register user.");
        }
    }

    @PostMapping("loginUser")
    public ResponseEntity<Map<String, Object>> loginUser(@RequestBody UsersEntity user) {
        try {
            String email = user.getEmail();
            String password = user.getPassword();

            return userService.loginUser(email, password);

        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(Map.of("status", "error", "message", "An error occurred during login"));
        }
    }

    @GetMapping("getAllUsers")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<List<UserDto>> getAllUsers(){
        try{
            List<UserDto> allUsers = userService.getAllUsers();
            return ResponseEntity.ok(allUsers);
        }catch (Exception ex){
            logger.error(ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("user/{userId}")
    public ResponseEntity<UserDto> getUser(@PathVariable int userId){
        try{
            UserDto user = userService.getUser(userId);
            return ResponseEntity.ok(user);
        }catch (Exception ex){
            logger.error(ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping("/{userId}/addSelectedProducts")
    public ResponseEntity<String> addSelectedProductsToUser(
            @PathVariable int userId,
            @RequestBody List<ProductsEntity> products
    ) {
        try {
            UsersEntity user = userService.getUserById(userId);
            if (user == null) {
                return ResponseEntity.notFound().build();
            }
            userProductService.addSelectedProductsToUser(user, products);

            return ResponseEntity.ok("Selected products added to user successfully");
        } catch (Exception ex) {
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Failed to add selected products");
        }
    }

    @PutMapping("updateUser/{userId}")
    public ResponseEntity<String> updateUser(@RequestBody UsersEntity user,@PathVariable int userId){
        try{
            userService.updateUser(user,userId);
            return ResponseEntity.ok("{\"status\":\"Updated successfully!\"}");
        }catch (IllegalArgumentException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        } catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user");
        }
    }

    @DeleteMapping("deleteUser/{userId}")
    public ResponseEntity<String> deleteUser(@PathVariable int userId){
        try{
            userService.deleteUserById(userId);
            return ResponseEntity.ok("{\"status\":\"Deleted successfully!\"}");
        }catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user");
        }
    }

    @PostMapping("/mail/{mail}")
    public String sendMail(@PathVariable String mail,@RequestBody MailEntity mailEntity){
        userService.sendMail(mail,mailEntity);
        return "Sent successfully";
    }
}
