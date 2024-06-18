package com.grocery.service;

import com.grocery.entity.ProductDto;
import com.grocery.entity.ProductsEntity;

import java.util.List;

public interface ProductService {
    boolean addProduct(ProductsEntity product);
    List<ProductsEntity> getAllProducts();
    ProductsEntity getProductById(int pid);
    List<ProductDto> getProductsByUserId(int userId);
    void updateProduct(ProductsEntity product,int pid);
    void deleteByProductId(int pid);
    List<ProductsEntity> getProductsByCategory(String category);
    List<ProductsEntity> searchByKeyword(String keyword);
}
