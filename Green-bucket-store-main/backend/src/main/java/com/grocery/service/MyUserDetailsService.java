package com.grocery.service;

import com.grocery.dao.UserPrincipal;
import com.grocery.entity.UsersEntity;
import com.grocery.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetailsService implements UserDetailsService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        UsersEntity user = userRepo.findByEmail(email);

        if(user == null) {
            System.out.println("404:User not found");
        }
        return new UserPrincipal(user);
    }
}
