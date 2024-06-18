package com.grocery.service;

import com.grocery.entity.ProductsEntity;
import com.grocery.entity.UserProduct;
import com.grocery.entity.UsersEntity;
import com.grocery.repo.UserProductRepo;
import com.grocery.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class UserProductServiceImp implements UserProductService {

    @Autowired
    private UserProductRepo userProductRepo;

    @Autowired
    private UserRepo userRepo;

    @Transactional
    public void addSelectedProductsToUser(UsersEntity user, List<ProductsEntity> products) {
        for (ProductsEntity product : products) {
            UserProduct userProduct = new UserProduct();
            userProduct.setUser(user);
            userProduct.setProduct(product);
            userProduct.setUsername(user.getUsername());
            userProduct.setProductName(product.getPname());
            userProduct.setProductPrice(product.getPrice());

            addUserProduct(userProduct);
        }
    }


    public void addUserProduct(UserProduct userProduct) {
        try {
            userProductRepo.save(userProduct);
        } catch (Exception e) {
            throw new RuntimeException("Failed to add user product: " + e.getMessage(), e);
        }
    }


}
