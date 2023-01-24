-- MySQL dump 10.13  Distrib 8.0.30, for macos12 (x86_64)
--
-- Host: localhost    Database: app_viajes
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `clientes`
--

DROP TABLE IF EXISTS `clientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clientes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `dni` varchar(10) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clientes`
--

LOCK TABLES `clientes` WRITE;
/*!40000 ALTER TABLE `clientes` DISABLE KEYS */;
INSERT INTO `clientes` VALUES (1,'María','Villar','Calle Colmenar 34 ','mariavillar@no.com','445557765','1972-05-02','11111134D'),(2,'Kelci','Parkinson','Apt 1494','cbodiam3@bandcamp.com','8414723309','1978-05-02','753218037L'),(3,'Gerhardine','Lichtfoth','Apt 1290','glichtfoth0@nih.gov','4321178392','1970-12-24','750'),(4,'Umeko','Acreman','Room 266','uacreman5@washington.edu','4086010654','1980-06-07','2660661'),(5,'Verene','Endean','Suite 14','vendean6@alibaba.com','9009585062','1985-01-25','0342958'),(6,'Malorie','McWhirter','Suite 19','mmcwhirter7@a8.net','1674202860','1970-01-29','7528780'),(7,'Wrennie','O\'Heaney','Room 1393','woheaney8@friendfeed.com','7454620867','1983-05-23','4323889');
/*!40000 ALTER TABLE `clientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hoteles`
--

DROP TABLE IF EXISTS `hoteles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hoteles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `ciudad` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `estrellas` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` mediumtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `tarifa` varchar(45) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hoteles`
--

LOCK TABLES `hoteles` WRITE;
/*!40000 ALTER TABLE `hoteles` DISABLE KEYS */;
INSERT INTO `hoteles` VALUES (1,'Hotel Bacon','Calle Brodway','New York','3','Hotel con apartamentos en Nueva York','200'),(2,'Hotel María Cristina','Okendo Kalea','San Sebastian','5','Hotel de 5 estrellas clásico en San Sebastián','350'),(3,'Hotel Ritz','Paseso de la Castellana','Madrid','5','Hotel gran lujo madrid','500'),(4,'Hostal las Margaritas','Avenida del Mediterraneo','Valencia','1','Hostal frente al mar en Valencia','50');
/*!40000 ALTER TABLE `hoteles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tbi_clientes_viajes`
--

DROP TABLE IF EXISTS `tbi_clientes_viajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tbi_clientes_viajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fk_cliente` int NOT NULL,
  `fk_viaje` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_clientes_has_viajes_viajes1_idx` (`fk_viaje`),
  KEY `fk_clientes_has_viajes_clientes1_idx` (`fk_cliente`),
  CONSTRAINT `fk_clientes_has_viajes_clientes1` FOREIGN KEY (`fk_cliente`) REFERENCES `clientes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_clientes_has_viajes_viajes1` FOREIGN KEY (`fk_viaje`) REFERENCES `viajes` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=64 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tbi_clientes_viajes`
--

LOCK TABLES `tbi_clientes_viajes` WRITE;
/*!40000 ALTER TABLE `tbi_clientes_viajes` DISABLE KEYS */;
INSERT INTO `tbi_clientes_viajes` VALUES (3,3,6),(4,4,5),(5,5,4),(6,6,3);
/*!40000 ALTER TABLE `tbi_clientes_viajes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `viajes`
--

DROP TABLE IF EXISTS `viajes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `viajes` (
  `id` int NOT NULL AUTO_INCREMENT,
  `fecha_salida` date NOT NULL,
  `fecha_vuelta` date NOT NULL,
  `idvuelo_ida` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `idvuelo_vuelta` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hotel_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_viajes_hoteles1_idx` (`hotel_id`),
  CONSTRAINT `fk_viajes_hoteles1` FOREIGN KEY (`hotel_id`) REFERENCES `hoteles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `viajes`
--

LOCK TABLES `viajes` WRITE;
/*!40000 ALTER TABLE `viajes` DISABLE KEYS */;
INSERT INTO `viajes` VALUES (1,'2023-04-04','2023-04-09','ib6732','new7765',4),(2,'2023-07-18','2023-08-28','NTA7765','AGI8756',1),(3,'2023-03-29','2023-03-31','HRR7765','APO8876',2),(4,'2023-02-13','2023-03-05','AXG8767','VVB8769',3),(5,'2022-12-13','2024-02-20','RTW765','SRX8867',4),(6,'2023-07-25','2023-09-20','PCO8878','MXZ8879',4),(62,'2023-04-04','2023-04-09','pru432','pru7765',NULL),(63,'2023-04-04','2023-04-09','pru432','pru7765',4);
/*!40000 ALTER TABLE `viajes` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-24 23:27:03
