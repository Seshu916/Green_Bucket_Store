package com.grocery.repo;

import com.grocery.entity.ProductsEntity;
import com.grocery.entity.UserProduct;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserProductRepo extends CrudRepository<UserProduct,Long> {
    void deleteByProduct(ProductsEntity product);
}
