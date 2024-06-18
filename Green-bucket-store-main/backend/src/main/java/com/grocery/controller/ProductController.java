package com.grocery.controller;

import com.grocery.entity.ProductDto;
import com.grocery.entity.ProductsEntity;
import com.grocery.repo.UserRepo;
import com.grocery.service.ProductService;
import com.grocery.service.UserProductService;
import com.grocery.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
public class ProductController {

    private static final Logger logger = LoggerFactory.getLogger(UserController.class);

    @Autowired
    private ProductService productService;

    @Autowired
    private UserProductService userProductService;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

    @GetMapping("hello")
    public String welcome(){
        return "hello";
    }


    @PostMapping("addProduct")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<String> addProduct(@RequestBody ProductsEntity product){
        boolean addProduct = productService.addProduct(product);
        if(addProduct){
            return ResponseEntity.ok("{\"status\":\"Product added successfully!!\"}");
        }else{
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"status\":\"Failed to add,check for errors!\"}");
        }
    }

    @GetMapping("getAllProducts")
    public ResponseEntity<List<ProductsEntity>> getAllProducts(){
        try {
            List<ProductsEntity> allProducts = productService.getAllProducts();
            return ResponseEntity.ok(allProducts);
        } catch (Exception ex) {
            logger.error(ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("product/{pid}")
    public ResponseEntity<ProductsEntity> getProduct(@PathVariable int pid){
        try{
            ProductsEntity product = productService.getProductById(pid);
            if (product != null) {
                return ResponseEntity.ok(product);
            } else {
                return ResponseEntity.notFound().build();
            }
        }catch (Exception ex){
            logger.error(ex.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/user/{userId}/products")
    public ResponseEntity<List<ProductDto>> getProductsByUserId(@PathVariable int userId) {
        List<ProductDto> productDTOs = productService.getProductsByUserId(userId).stream()
                .map(product -> new ProductDto(product.getPid(), product.getPname(), product.getPrice(), product.getBrand(), product.getImageLink(),product.getOrderDate()))
                .collect(Collectors.toList());

        if (!productDTOs.isEmpty()) {
            return new ResponseEntity<>(productDTOs, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("updateProduct/{pid}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<String> updateProduct(@RequestBody ProductsEntity product, @PathVariable int pid){
        try{
            productService.updateProduct(product,pid);
            return ResponseEntity.ok("{\"status\":\"Product updated successfully!!\"}");
        }catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"status\":\"Failed to update product\"}");
        }
    }

    @DeleteMapping("deleteProduct/{pid}")
    @PreAuthorize("hasRole('ROLE_ADMIN')")
    public ResponseEntity<String> deleteProduct(@PathVariable int pid){
        try{
            productService.deleteByProductId(pid);
            return ResponseEntity.ok("{\"status\":\"Product deleted successfully!!\"}");
        }catch (Exception ex){
            ex.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"status\":\"Failed to delete product\"}");
        }
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<ProductsEntity>> getProductsByCategory(@PathVariable String category) {
        List<ProductsEntity> products = productService.getProductsByCategory(category);

        if (products.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(products, HttpStatus.OK);
        }
    }

    @GetMapping("search/keyword/{keyword}")
    public ResponseEntity<List<ProductsEntity>> getProductsByKeyword(@PathVariable("keyword") String keyword){
        List<ProductsEntity> allProds = productService.searchByKeyword(keyword);
        if(allProds.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }else{
            return new ResponseEntity<>(allProds, HttpStatus.OK);
        }
    }


}
