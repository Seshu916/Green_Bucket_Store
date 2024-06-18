package com.grocery.service;

import com.grocery.entity.ProductDto;
import com.grocery.entity.ProductsEntity;
import com.grocery.entity.UsersEntity;
import com.grocery.exception.ProductNotFoundException;
import com.grocery.repo.ProductRepo;
import com.grocery.repo.UserProductRepo;
import com.grocery.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProductServiceImp implements ProductService {
    @Autowired
    private ProductRepo productRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserProductRepo userProductRepo;


    @Override
    public boolean addProduct(ProductsEntity product) {
        try{
            productRepo.save(product);
            return true;
        }catch (Exception ex){
            ex.printStackTrace();
            return false;
        }
    }

    @Override
    public List<ProductsEntity> getAllProducts() {
       try{
         return (List<ProductsEntity>) productRepo.findAll();
       }
       catch (Exception ex){
           throw new RuntimeException("Error fetching products",ex);
       }
    }

    @Override
    public ProductsEntity getProductById(int pid) {
        return productRepo.findById(pid).orElse(null);
    }

    @Override
    public List<ProductDto> getProductsByUserId(int userId) {
        UsersEntity user = userRepo.findByUserId(userId);
        if (user != null) {
            return user.getSelectedProducts().stream()
                    .map(userProduct -> {
                        ProductsEntity productsEntity = userProduct.getProduct();
                        ProductDto productDto = new ProductDto();
                        productDto.setPid(productsEntity.getPid());
                        productDto.setPname(productsEntity.getPname());
                        productDto.setPrice(productsEntity.getPrice());
                        productDto.setImageLink(productsEntity.getImageLink());
                        productDto.setBrand(productsEntity.getBrand());
                        productDto.setOrderDate(userProduct.getCreatedAt());
                        return productDto;
                    })
                    .collect(Collectors.toList());
        }

        return Collections.emptyList();
    }

    @Override
    public void updateProduct(ProductsEntity product, int pid) {
        ProductsEntity oldProduct = productRepo.findBypid(pid);
        if(oldProduct == null) throw new ProductNotFoundException("Product with ID " + pid + " not found");

        if(product.getPname()!=null && !product.getPname().isEmpty()){
            oldProduct.setPname(product.getPname());
        }

        if(product.getPrice()!=null){
            oldProduct.setPrice(product.getPrice());
        }

        if(product.getQuantity()!=null && !product.getQuantity().isEmpty()){
            oldProduct.setQuantity(product.getQuantity());
        }

        if (product.getImageLink() != null && !product.getImageLink().isEmpty()) {
            oldProduct.setImageLink(product.getImageLink());
        }

        if (product.getDescription() != null && !product.getDescription().isEmpty()) {
            oldProduct.setDescription(product.getDescription());
        }

        if (product.getBrand() != null && !product.getBrand().isEmpty()) {
            oldProduct.setBrand(product.getBrand());
        }

        productRepo.save(oldProduct);
    }

    @Override
    @Transactional
    public void deleteByProductId(int pid) {
        try {
            ProductsEntity product = productRepo.findById(pid)
                    .orElseThrow(() -> new ProductNotFoundException("Product with ID " + pid + " not found."));

            userProductRepo.deleteByProduct(product);

            productRepo.delete(product);
        } catch (Exception ex) {
            ex.printStackTrace();
            throw new RuntimeException("Failed to delete product with ID " + pid, ex);
        }
    }

    @Override
    public List<ProductsEntity> getProductsByCategory(String category) {
        return productRepo.findByCategory(category);
    }

    @Override
    public List<ProductsEntity> searchByKeyword(String keyword) {
        return productRepo.findByPnameContainingOrCategoryContaining(keyword,keyword);
    }

}

