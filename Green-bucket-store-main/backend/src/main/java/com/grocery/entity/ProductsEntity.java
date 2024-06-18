package com.grocery.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductsEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private int pid;
        private String pname;
        private Double price;
        private String quantity;
        private String imageLink;
        private String category;
        private String description;
        private String brand;
}
