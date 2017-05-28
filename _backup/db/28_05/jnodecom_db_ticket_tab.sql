CREATE DATABASE  IF NOT EXISTS `jnodecom_db` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `jnodecom_db`;
-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: j2node.com    Database: jnodecom_db
-- ------------------------------------------------------
-- Server version	5.6.35-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `ticket_tab`
--

DROP TABLE IF EXISTS `ticket_tab`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ticket_tab` (
  `ticket_id` int(11) NOT NULL AUTO_INCREMENT,
  `ticket_title` varchar(45) DEFAULT NULL,
  `ticket_inProjectId` varchar(45) DEFAULT NULL,
  `ticket_type` int(11) DEFAULT NULL,
  `ticket_label` int(11) DEFAULT NULL,
  `ticket_createDate` datetime DEFAULT NULL,
  `ticket_lastModificationDate` datetime DEFAULT NULL,
  `ticket_description` varchar(255) DEFAULT NULL,
  `ticket_points` int(11) DEFAULT NULL,
  `ticket_attachments` int(11) DEFAULT NULL,
  `ticket_assignee` int(11) DEFAULT NULL,
  `ticket_reporter` int(11) DEFAULT NULL,
  `ticket_watchers` int(11) DEFAULT NULL,
  `ticket_priority` int(11) DEFAULT NULL,
  `ticket_environment` varchar(255) DEFAULT NULL,
  `ticket_sprintName` varchar(255) DEFAULT NULL,
  `ticket_status` int(11) DEFAULT NULL,
  `ticket_comments` int(11) DEFAULT NULL,
  `ticket_workLog` int(11) DEFAULT NULL,
  `ticket_history` int(11) DEFAULT NULL,
  PRIMARY KEY (`ticket_id`),
  UNIQUE KEY `ticket_id_UNIQUE` (`ticket_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3108 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-05-28  9:44:19
