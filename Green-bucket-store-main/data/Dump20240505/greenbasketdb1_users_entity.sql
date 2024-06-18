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
-- Table structure for table `users_entity`
--

DROP TABLE IF EXISTS `users_entity`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_entity` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `mobile` bigint DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UKf7ksqdksvt9x2u0cu4fcrccn9` (`mobile`),
  UNIQUE KEY `UKt0fjv59svwiyk503uct1ykvls` (`mobile`,`email`),
  UNIQUE KEY `UK6wjjmkbpi4nmww1n8geusjhd4` (`email`),
  UNIQUE KEY `UK5hfh7984gbv6hj3eq9dxs1t84` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_entity`
--

LOCK TABLES `users_entity` WRITE;
/*!40000 ALTER TABLE `users_entity` DISABLE KEYS */;
INSERT INTO `users_entity` VALUES (1,'SR Nagar','jay@gmail.com',7894561230,'$2a$12$isp2qwzrqTUZNgf6ylgYBuWZjbhMhz3IKErvH0BPol3bNYK.IEazK','Jay Prichett'),(2,'SR Nagar','phil@gmail.com',879874546521,'$2a$12$oWrXZI77JePs/sY6qxtyFu.RrxdwepiIC6wnDR9P5Js2/9T82qra.','Phil Dunphy'),(3,'Jubilee Hills','alex@gmail.com',7454658958,'$2a$12$k4cATtT6l3y81jDY88uereJ0hkm1p1TtLU2XHyRfyUTRKhPJKgRFW','Alex Dunphy'),(5,'SR Nagar','venkateshvenky1129@gmail.com',7412365210,'$2a$12$yJpHFqU2xqncwOxY7nGI/.IbDEiTi/MEk1awxgALxdobiPBP.9hw.','Venkatesh'),(6,'SR Nagar','gloria@gmail.com',5454545454,'$2a$12$vsYQZ.AflINIewgpLhhcxOg6PdMmKisN/Sv0Qw2.ekoC5vkg26Yq2','Gloria Prichett'),(13,'Uppal','jack@gmail.com',8787878787,'$2a$12$SrFPejSytZdakWsUcOkiuuX.DVxiB3k/N5Pn3PEuSmm7VTzl/ya1K','Jack'),(14,'SR Nagar','haley@gmail.com',8525623214,'$2a$12$lPAw82L2mmoO50o7s5QWwez3PWua4FILd.X3w/h6IUXl9jYKZQ3zi','Haley Dunphy'),(15,'Hitech City','tvssandeep24@gmail.com',7878745685,'$2a$12$Zkv2zkZRORNXROA/jzIEbeZm2tQmhTd8IP5y/uEZgZ0i/LqX19RwW','Sandeep'),(19,'Uppal','abhi@gmail.com',7454658985,'$2a$12$aRSrFIm5R28tsXG99mbweOs7RYWFbR6u3nMWnJnFbD1ZLRJtrBJUG','Abhi abhi');
/*!40000 ALTER TABLE `users_entity` ENABLE KEYS */;
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
