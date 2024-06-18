package com.grocery.service;

import com.grocery.entity.MailEntity;
import com.grocery.entity.UserDto;
import com.grocery.entity.UsersEntity;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Map;

public interface UserService {
    void saveUser(UsersEntity user);
    ResponseEntity<Map<String, Object>> loginUser(String username, String password);
    List<UserDto> getAllUsers();
    UsersEntity getUserById(int userId);
    UserDto getUser(int userId);
    void updateUser(UsersEntity user,int userId);
    void deleteUserById(int userId);
    void sendMail(String mail, MailEntity mailEntity);
}
