-- MySQL dump 10.13  Distrib 8.0.31, for Linux (aarch64)
--
-- Host: localhost    Database: cheatsheet
-- ------------------------------------------------------
-- Server version	8.0.31-0ubuntu0.20.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bash`
--

DROP TABLE IF EXISTS `bash`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bash` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bash`
--

LOCK TABLES `bash` WRITE;
/*!40000 ALTER TABLE `bash` DISABLE KEYS */;
INSERT INTO `bash` VALUES (1,'SSH','ssh -i \'./chave\' -u user -p',NULL),(2,'List processes listening to port','lsof -i:port',NULL),(3,'List active processes with given name','ps -x | grep ./processname',NULL),(4,'List directories with readable size','du -sh ./',NULL),(5,'Disk usage info','df -h',NULL),(6,'Find files with given text inside','find path -type f -exec grep -l \'text-to-find-here\' {} \\;',NULL),(7,'Install certbot','sudo apt install certbot && sudo apt install python3-certbot-nginx',NULL),(8,'Add free ssl certificate for a domain on nginx','sudo certbot --nginx -d example.com -d www.example.com',NULL),(9,'Add user','sudo adduser nomedousuario',NULL),(10,'Append user to a group (sudo e.)','sudo usermod sudo nomedousuario',NULL),(11,'Set permissions for file or directory only (\'f\' or \'d\')','find ./ -type f -exec chmod 644 {} \\;',NULL);
/*!40000 ALTER TABLE `bash` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `git`
--

DROP TABLE IF EXISTS `git`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `git` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `git`
--

LOCK TABLES `git` WRITE;
/*!40000 ALTER TABLE `git` DISABLE KEYS */;
INSERT INTO `git` VALUES (1,'remember the next git credentials for further logins','git config credential.helper store',NULL),(2,'remove python cached','git rm -r --cached __pycache__',NULL),(3,'force stash everything','git stash -u',NULL);
/*!40000 ALTER TABLE `git` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `javascript`
--

DROP TABLE IF EXISTS `javascript`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `javascript` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `javascript`
--

LOCK TABLES `javascript` WRITE;
/*!40000 ALTER TABLE `javascript` DISABLE KEYS */;
INSERT INTO `javascript` VALUES (2,'Install Node.js','https://nodejs.org/en/download/',NULL),(3,'React: init','npx create-react-app repository_name','react'),(4,'React: add default libs','yarn add formik axios node-sass react-router-dom react-loading react-text-mask react-burgos','react'),(5,'React: miraculous table lib','https://react-data-table-component.netlify.app/?path=/docs/getting-started-installation--page','react'),(6,'React Native: init','yarn create expo-app repository_name','react native'),(7,'React Native: navigation','yarn add @react-navigation/native @react-navigation/native-stack<br>npx expo install react-native-screens react-native-safe-area-context','react native'),(8,'React Native: local storage','expo install @react-native-async-storage/async-storage','react native'),(9,'Express-API: init','npx express-api repository_name','express-api'),(10,'Express-API: default libs','yarn add mysql cors','express-api'),(11,'React: Copy text to clipboard','navigator.clipboard.writeText(str_text)','react');
/*!40000 ALTER TABLE `javascript` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mysql`
--

DROP TABLE IF EXISTS `mysql`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mysql` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mysql`
--

LOCK TABLES `mysql` WRITE;
/*!40000 ALTER TABLE `mysql` DISABLE KEYS */;
INSERT INTO `mysql` VALUES (1,'Create user and give privileges','CREATE USER \'username\'@\'localhost\' IDENTIFIED BY \'password\';<br>GRANT ALL PRIVILEGES ON * . * TO \'username\'@\'localhost\';<br>FLUSH PRIVILEGES;',NULL),(2,'Insert data into selected database table','insert into table_name (column1, column2, column3) values (\"value1\", \"value2\", \"value3\");',NULL),(3,'Create table','use database create table table_name (id int not null auto_increment primary key, column_1 text, column_2 varchar(5) default 0);',NULL),(4,'Update row','UPDATE table_name SET VALUE = value WHERE column_name = column;',NULL),(5,'Delete row','delete from table_name where condition = value;',NULL),(6,'Export/Import all databases','mysqldump --all-databases > alldb.sql<br>mysql < alldb.sql',NULL);
/*!40000 ALTER TABLE `mysql` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `powershell`
--

DROP TABLE IF EXISTS `powershell`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `powershell` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `powershell`
--

LOCK TABLES `powershell` WRITE;
/*!40000 ALTER TABLE `powershell` DISABLE KEYS */;
INSERT INTO `powershell` VALUES (1,'Install Scoop','Set-ExecutionPolicy RemoteSigned -scope CurrentUser<br>iwr -useb get.scoop.sh | iex',NULL),(2,'Install NeoVim','scoop install neovim gcc',NULL),(3,'Install Posh-GIT','Install-Module posh-git -Scope CurrentUser -Force<br>Import-Module posh-git',NULL),(4,'Install AutoCompletion','Install-Module -Name PSReadLine -AllowPrerelease -Scope CurrentUser -Force -SkipPublisherCheck<br>Set-PSReadLineOption -PredictionSource History',NULL),(5,'Alert Message','msg user<br>\'message\'<br>ctrl+z',NULL),(6,'Process list','tasklist',NULL),(7,'Kill process','taskkill/im chrome.exe /F',NULL),(8,'Restart PowerShell as Admin','Start-Process powershell -Verb runAs',NULL),(9,'Directory size','Get-ChildItem CAMINHO -Recurse | Measure-Object -Property Length -Sum',NULL);
/*!40000 ALTER TABLE `powershell` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `python`
--

DROP TABLE IF EXISTS `python`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `python` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(55) NOT NULL,
  `description` text NOT NULL,
  `category` varchar(55) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `python`
--

LOCK TABLES `python` WRITE;
/*!40000 ALTER TABLE `python` DISABLE KEYS */;
INSERT INTO `python` VALUES (1,'Replace characters inside a string','string = string.replace(\"old_char\", \"new_char\")',NULL),(2,'\'Concatenate\' dictionary','d3 = dict(d1)<br>d3.update(d2)',NULL),(3,'String slicing','\'string\'[2:] = \'ring\'',NULL),(4,'Run a terminal command','os.system(\'command\')',NULL),(8,'Sleep','system.sleep(seconds)',NULL);
/*!40000 ALTER TABLE `python` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-15  4:16:55
