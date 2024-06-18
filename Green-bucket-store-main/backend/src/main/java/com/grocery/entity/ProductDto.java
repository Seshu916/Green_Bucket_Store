package com.grocery.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ProductDto {
    private int pid;
    private String pname;
    private double price;
    private String brand;
    private String imageLink;
    private LocalDate orderDate;
}
