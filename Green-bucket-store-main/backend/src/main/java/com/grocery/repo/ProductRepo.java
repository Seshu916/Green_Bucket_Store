package com.grocery.repo;

import com.grocery.entity.ProductsEntity;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ProductRepo extends CrudRepository<ProductsEntity,Integer> {
    ProductsEntity findBypid(int pid);
    List<ProductsEntity> findByCategory(String category);
    List<ProductsEntity> findByPnameContainingOrCategoryContaining(String pname,String category);

}
