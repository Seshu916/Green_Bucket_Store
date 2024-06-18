-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: greenbasketdb1
-- ------------------------------------------------------
-- Server version	8.0.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `user_product`
--

DROP TABLE IF EXISTS `user_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `product_name` varchar(255) DEFAULT NULL,
  `product_price` double DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `product_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKqa54yr7tbynltul878nrcakxj` (`product_id`),
  KEY `FKi0wh12djo6cse725mfvqaghgi` (`user_id`),
  CONSTRAINT `FKi0wh12djo6cse725mfvqaghgi` FOREIGN KEY (`user_id`) REFERENCES `users_entity` (`user_id`),
  CONSTRAINT `FKqa54yr7tbynltul878nrcakxj` FOREIGN KEY (`product_id`) REFERENCES `products_entity` (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_product`
--

LOCK TABLES `user_product` WRITE;
/*!40000 ALTER TABLE `user_product` DISABLE KEYS */;
INSERT INTO `user_product` VALUES (1,'Onion',33,'Venkatesh',1,5,'2024-04-20'),(2,'Indian Tomato',37,'Venkatesh',3,5,'2024-04-20'),(3,'Cabbage(Kosugadda)',40,'Venkatesh',9,5,'2024-04-20'),(4,'Carrot',32,'Venkatesh',6,5,'2024-04-20'),(5,'Onion',33,'Jay Prichett',1,1,'2024-04-20'),(6,'Banganapalli Mango',67,'Jay Prichett',12,1,'2024-04-20'),(7,'Goat Mince/Keema',649,'Jay Prichett',84,1,'2024-04-21'),(8,'Mutton Curry Cut',609,'Jay Prichett',83,1,'2024-04-21'),(9,'Chicken Skinless',145,'Jay Prichett',79,1,'2024-04-21'),(10,'Homogenised Toned Milk',28,'Jay Prichett',22,1,'2024-04-21'),(11,'100% Whole Wheat Sandwich Bread',50,'Jay Prichett',28,1,'2024-04-21'),(12,'Premium Sona Masoori Economy Rice(10kg)',699,'Phil Dunphy',34,2,'2024-04-21'),(13,'HMT Rice(20kg)',1875,'Phil Dunphy',33,2,'2024-04-21'),(14,'Chana Dal  (1kg)',120,'Phil Dunphy',35,2,'2024-04-21'),(15,'Broccoli',47,'Jay Prichett',8,1,'2024-04-22'),(16,'Apple',97,'Jay Prichett',18,1,'2024-04-22'),(17,'Cup Noodles Masala',84,'Jay Prichett',74,1,'2024-04-22'),(18,'Zero Soft Drink Can',56,'Jay Prichett',61,1,'2024-04-22'),(19,'Monaco Classic Cheeselings',150,'Jay Prichett',68,1,'2024-04-22'),(20,'Chicken Breast Boneless',245,'Jay Prichett',80,1,'2024-04-22'),(21,'Dark Chocolate',145,'Jay Prichett',56,1,'2024-04-22'),(22,'Original Potato Chips',107,'Jay Prichett',49,1,'2024-04-22'),(23,'Cow Ghee',319,'Jay Prichett',47,1,'2024-04-22'),(24,'Raw Almonds Pack',399,'Jay Prichett',38,1,'2024-04-22'),(25,'Superior MP Atta',129,'Jay Prichett',31,1,'2024-04-22'),(26,'Chilled Latte - Tetra Pack',36,'Jay Prichett',26,1,'2024-04-22'),(31,'Onion',33,'Sandeep',1,15,'2024-04-27'),(32,'Dark Chocolate',145,'Sandeep',56,15,'2024-04-27'),(33,'100% Natural Premium Californain Almonds(500g)',513,'Sandeep',89,15,'2024-04-27'),(34,'Dark Chocolate',145,'Sandeep',56,15,'2024-04-27'),(35,'Magic Masala Chips',45,'Sandeep',50,15,'2024-04-27'),(36,'Dark Chocolate',145,'Jay Prichett',56,1,'2024-04-27'),(37,'Dark Chocolate',145,'Jay Prichett',56,1,'2024-04-27'),(38,'Gems Home Treat Pack',85,'Jay Prichett',94,1,'2024-04-27'),(39,'Onion',33,'Jay Prichett',1,1,'2024-04-27'),(40,'Cheese Nachos',81,'Jay Prichett',54,1,'2024-04-27'),(41,'Cheese Nachos',81,'Jay Prichett',54,1,'2024-04-27'),(42,'Cheese Nachos',81,'Jay Prichett',54,1,'2024-04-27'),(43,'Cheese Nachos',81,'Jay Prichett',54,1,'2024-04-27'),(44,'Cheese Nachos',81,'Sandeep',54,15,'2024-04-27'),(45,'Cheese Nachos',81,'Sandeep',54,15,'2024-04-27'),(46,'Cheese Nachos',81,'Sandeep',54,15,'2024-04-27'),(47,'Cheese Nachos',81,'Sandeep',54,15,'2024-04-27'),(48,'Sweet Corn(Tipi Mokkajonna) (2pc)',42,'Sandeep',104,15,'2024-04-27'),(49,'Bavarian Chocolate Icecream Cone',256,'Sandeep',60,15,'2024-04-27'),(50,'The Yellow Edition Energy Drink',125,'Sandeep',97,15,'2024-04-27'),(51,'Bavarian Chocolate Icecream Cone',256,'Sandeep',60,15,'2024-04-27');
/*!40000 ALTER TABLE `user_product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-05 14:54:05
