/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-12.2.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: SantiagoSA
-- ------------------------------------------------------
-- Server version	12.2.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `alertas_config`
--

DROP TABLE IF EXISTS `alertas_config`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `alertas_config` (
  `alerta_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `tipo_alerta` enum('transaccion','saldo_bajo','vencimiento','seguridad') DEFAULT NULL,
  `valor_umbral` decimal(15,2) DEFAULT NULL,
  `canal` enum('email','sms','push') DEFAULT 'email',
  PRIMARY KEY (`alerta_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alertas_config`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `alertas_config` WRITE;
/*!40000 ALTER TABLE `alertas_config` DISABLE KEYS */;
/*!40000 ALTER TABLE `alertas_config` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `cuentas`
--

DROP TABLE IF EXISTS `cuentas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `cuentas` (
  `cuenta_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `tipo_id` int(11) DEFAULT NULL,
  `numero_cuenta` varchar(20) NOT NULL,
  `saldo_disponible` decimal(15,2) DEFAULT 0.00,
  `saldo_contable` decimal(15,2) DEFAULT 0.00,
  `estado` enum('activa','congelada','cerrada') DEFAULT 'activa',
  `fecha_apertura` date DEFAULT NULL,
  PRIMARY KEY (`cuenta_id`),
  UNIQUE KEY `numero_cuenta` (`numero_cuenta`),
  KEY `usuario_id` (`usuario_id`),
  KEY `tipo_id` (`tipo_id`),
  CONSTRAINT `1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  CONSTRAINT `2` FOREIGN KEY (`tipo_id`) REFERENCES `tipos_producto` (`tipo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cuentas`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `cuentas` WRITE;
/*!40000 ALTER TABLE `cuentas` DISABLE KEYS */;
/*!40000 ALTER TABLE `cuentas` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `faq`
--

DROP TABLE IF EXISTS `faq`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `faq` (
  `faq_id` int(11) NOT NULL AUTO_INCREMENT,
  `pregunta` varchar(255) DEFAULT NULL,
  `respuesta` text DEFAULT NULL,
  `categoria` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`faq_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faq`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `faq` WRITE;
/*!40000 ALTER TABLE `faq` DISABLE KEYS */;
/*!40000 ALTER TABLE `faq` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `prestamos`
--

DROP TABLE IF EXISTS `prestamos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `prestamos` (
  `prestamo_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `monto_aprobado` decimal(15,2) DEFAULT NULL,
  `tasa_interes` decimal(5,2) DEFAULT NULL,
  `plazo_meses` int(11) DEFAULT NULL,
  `saldo_pendiente` decimal(15,2) DEFAULT NULL,
  `dia_pago_mensual` int(11) DEFAULT NULL,
  `estado` enum('al_dia','mora','finalizado') DEFAULT NULL,
  PRIMARY KEY (`prestamo_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestamos`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `prestamos` WRITE;
/*!40000 ALTER TABLE `prestamos` DISABLE KEYS */;
/*!40000 ALTER TABLE `prestamos` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `reclamaciones`
--

DROP TABLE IF EXISTS `reclamaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `reclamaciones` (
  `reclamacion_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `asunto` varchar(200) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  `estado` enum('abierta','en_investigacion','resuelta','cerrada') DEFAULT NULL,
  `prioridad` enum('baja','media','alta') DEFAULT NULL,
  `fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`reclamacion_id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reclamaciones`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `reclamaciones` WRITE;
/*!40000 ALTER TABLE `reclamaciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `reclamaciones` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `servicios_pagos`
--

DROP TABLE IF EXISTS `servicios_pagos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `servicios_pagos` (
  `servicio_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_empresa` varchar(100) DEFAULT NULL,
  `categoria` enum('luz','agua','telefonia','internet','otros') DEFAULT NULL,
  `convenio_numero` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`servicio_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `servicios_pagos`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `servicios_pagos` WRITE;
/*!40000 ALTER TABLE `servicios_pagos` DISABLE KEYS */;
/*!40000 ALTER TABLE `servicios_pagos` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `solicitudes` (
  `solicitud_id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(11) DEFAULT NULL,
  `tipo_id` int(11) DEFAULT NULL,
  `estado_solicitud` enum('pendiente','en_revision','aprobada','rechazada') DEFAULT NULL,
  `datos_formulario` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`datos_formulario`)),
  `fecha_creacion` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`solicitud_id`),
  KEY `usuario_id` (`usuario_id`),
  KEY `tipo_id` (`tipo_id`),
  CONSTRAINT `1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`usuario_id`),
  CONSTRAINT `2` FOREIGN KEY (`tipo_id`) REFERENCES `tipos_producto` (`tipo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudes`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `solicitudes` WRITE;
/*!40000 ALTER TABLE `solicitudes` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitudes` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `tarjetas`
--

DROP TABLE IF EXISTS `tarjetas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tarjetas` (
  `tarjeta_id` int(11) NOT NULL AUTO_INCREMENT,
  `cuenta_id` int(11) DEFAULT NULL,
  `numero_tarjeta_mask` varchar(19) DEFAULT NULL,
  `token_tarjeta` varchar(255) DEFAULT NULL,
  `tipo_tarjeta` enum('debito','credito') DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `estado` enum('activa','bloqueada','vencida','por_activar') DEFAULT 'por_activar',
  `limite_gasto_diario` decimal(15,2) DEFAULT 1000.00,
  PRIMARY KEY (`tarjeta_id`),
  KEY `cuenta_id` (`cuenta_id`),
  CONSTRAINT `1` FOREIGN KEY (`cuenta_id`) REFERENCES `cuentas` (`cuenta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tarjetas`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `tarjetas` WRITE;
/*!40000 ALTER TABLE `tarjetas` DISABLE KEYS */;
/*!40000 ALTER TABLE `tarjetas` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `tipos_producto`
--

DROP TABLE IF EXISTS `tipos_producto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipos_producto` (
  `tipo_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre_producto` varchar(50) DEFAULT NULL,
  `descripcion` text DEFAULT NULL,
  PRIMARY KEY (`tipo_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipos_producto`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `tipos_producto` WRITE;
/*!40000 ALTER TABLE `tipos_producto` DISABLE KEYS */;
/*!40000 ALTER TABLE `tipos_producto` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `transacciones`
--

DROP TABLE IF EXISTS `transacciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `transacciones` (
  `transaccion_id` int(11) NOT NULL AUTO_INCREMENT,
  `cuenta_origen_id` int(11) DEFAULT NULL,
  `cuenta_destino_id` int(11) DEFAULT NULL,
  `monto` decimal(15,2) NOT NULL,
  `tipo_transaccion` enum('transferencia','pago_servicio','deposito','retiro') DEFAULT NULL,
  `descripcion` varchar(255) DEFAULT NULL,
  `referencia_externa` varchar(100) DEFAULT NULL,
  `fecha_hora` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`transaccion_id`),
  KEY `cuenta_origen_id` (`cuenta_origen_id`),
  CONSTRAINT `1` FOREIGN KEY (`cuenta_origen_id`) REFERENCES `cuentas` (`cuenta_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transacciones`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `transacciones` WRITE;
/*!40000 ALTER TABLE `transacciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `transacciones` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `usuario_id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `apellido` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `telefono` varchar(20) DEFAULT NULL,
  `mfa_secret` varchar(100) DEFAULT NULL,
  `mfa_enabled` tinyint(1) DEFAULT 0,
  `ultimo_acceso` datetime DEFAULT NULL,
  `estado` enum('activo','bloqueado','inactivo') DEFAULT 'activo',
  `fecha_registro` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`usuario_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

SET @OLD_AUTOCOMMIT=@@AUTOCOMMIT, @@AUTOCOMMIT=0;
LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
COMMIT;
SET AUTOCOMMIT=@OLD_AUTOCOMMIT;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2026-02-25 14:21:02
