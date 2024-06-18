package com.grocery.service;

import com.grocery.entity.ProductsEntity;
import com.grocery.entity.UserProduct;
import com.grocery.entity.UsersEntity;

import java.util.List;


public interface UserProductService {
    void addUserProduct(UserProduct userProduct);
    void addSelectedProductsToUser(UsersEntity user, List<ProductsEntity> products);
}
