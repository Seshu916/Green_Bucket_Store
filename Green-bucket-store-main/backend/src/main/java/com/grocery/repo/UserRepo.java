package com.grocery.repo;

import com.grocery.entity.UserDto;
import com.grocery.entity.UsersEntity;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends CrudRepository<UsersEntity,Integer> {
    UsersEntity findByEmail(String email);

    @Query("SELECT new com.grocery.entity.UserDto(u.userId, u.username, u.password, u.email, u.mobile, u.address) FROM UsersEntity u")
    List<UserDto> findAllUsersWithSpecificFields();

    @Query("SELECT new com.grocery.entity.UserDto(u.userId, u.username, u.password, u.email, u.mobile, u.address) " +
            "FROM UsersEntity u " +
            "WHERE u.userId = :userId")
    UserDto findUserByUserId(@Param("userId") int userId);

    UsersEntity findByUserId(int userId);

}
