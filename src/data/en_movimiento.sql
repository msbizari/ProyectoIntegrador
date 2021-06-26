-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jun 10, 2021 at 08:27 PM
-- Server version: 5.7.24
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `en_movimiento`
--
CREATE DATABASE IF NOT EXISTS `en_movimiento` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE `en_movimiento`;

-- --------------------------------------------------------

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
CREATE TABLE IF NOT EXISTS `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf32 COLLATE utf32_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Truncate table before insert `brands`
--

TRUNCATE TABLE `brands`;
--
-- Dumping data for table `brands`
--

INSERT DELAYED IGNORE INTO `brands` (`id`, `name`) VALUES
(1, 'Nike'),
(2, 'Adidas'),
(3, 'Puma'),
(4, 'Salomon'),
(5, 'Generico'),
(6, 'Asics'),
(7, 'New Balance');

-- --------------------------------------------------------

--
-- Table structure for table `categorys`
--

DROP TABLE IF EXISTS `categorys`;
CREATE TABLE IF NOT EXISTS `categorys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Truncate table before insert `categorys`
--

TRUNCATE TABLE `categorys`;
--
-- Dumping data for table `categorys`
--

INSERT DELAYED IGNORE INTO `categorys` (`id`, `name`) VALUES
(1, 'novedad'),
(2, 'en-oferta'),
(3, 'visitado');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `discount` tinyint(4) DEFAULT NULL,
  `image` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `size` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `brand_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Truncate table before insert `products`
--

TRUNCATE TABLE `products`;
--
-- Dumping data for table `products`
--

INSERT DELAYED IGNORE INTO `products` (`id`, `name`, `description`, `price`, `discount`, `image`, `category_id`, `size`, `brand_id`) VALUES
(1, 'Bolso Sport Unisex', 'Practico bolso para ir al gimnasio, con correa regulable y compartimentos varios', '6770.00', 0, 'bolso.jpg', 1, '30', 1),
(2, 'Camiseta Argentina', 'camiseta selección Argentina - Mundial', '250000.00', 10, 'camisetaargentina_2.jpg', 2, 'XS - S - M - L - XL', 1),
(3, 'Pesas de entrenamiento MIR', 'pesas de metal, NO SE OXIDAN', '4500.00', 0, 'pesas.jpg', 1, '5kg - 10 kg', 5),
(4, 'Zapatillas Urbanas Model.0', 'calzado de uso diario, modelo bota con abrojo', '7990.00', 0, 'zapatillas.jpg', 2, '36 - 38', 1),
(5, 'Calzas Nike', 'calzas de mujer, 100% lycra. Tecnología GORE-TECH', '3450.00', 0, 'myfile-1614785466630.jpg', 1, 'S - L', 1),
(6, 'Botines de Futlbol ADIDAS', 'Botines para fútbol, con tapones intercambiables', '15500.00', 10, 'botines-adidas.jpg', 3, '40-44', 2),
(7, 'Botines Borussia TT', 'Los botines Puma Borussia TT mantienen el diseño típico, además del confort interno, para que sientas control de la pelota', '6100.00', 10, 'botines-puma.jpg', 1, '41', 1),
(8, 'Remera Deportiva Adidas', 'camiseta tecnología DRI-FIT', '3700.00', 10, 'camiseta_deportiva.jpg', 1, '26', 2),
(9, 'Camiseta Deportiva Style Deluxe', 'Camiseta con redes laterales para una mejor circulacion de aire', '4200.00', 0, 'camiseta_deportiva_2.jpg', 2, '29', 5),
(10, 'Camiseta entrenamiento brasil', 'Camiseta de entrenamiento dri-fit del equipo nacional de Brasil', '12000.00', 10, 'image-1620857191298.jpg', 1, '38', 5),
(11, 'Remera Barcelona - RAKUTEN', 'remera de futbol Club Barcelona', '9153.00', 0, 'camiseta-entrenamiento_2.jpg', 1, '38', 5),
(12, 'Remera mujer deportiva ADIDAS', 'remera deportiva, fibra altamente resistente', '4618.00', 10, 'camiseta-mujer-2.jpg', 1, '38', 2),
(13, 'Camiseta Mujer Salomon', 'remera deportiva', '6958.00', 5, 'camiseta-mujer-violeta.jpg', 3, '38', 4),
(14, 'Camiseta de fultbol Nigeria', 'camiseta oficial Nigeria', '8014.00', 15, 'camiseta-nigeria.jpg', 2, '38', 5),
(15, 'Camiseta oficial Club PSG', 'Está inspirada en los colores de la bandera francesa y con tecnología Dri-Fit para que te mantengas cómodo durante todo el partidos', '9305.00', 0, 'camiseta-PSG.jpg', 2, '38', 5),
(16, 'Pantalon Sportswear Gym Vntg', 'pantalon corto entrenamiento para mujer', '4500.00', 10, 'pantalon-corto-running-mujer.jpg', 1, '38', 5),
(17, 'Pantalon Corto Salomon', 'Pantalón corto, con malla interna', '1990.00', 5, 'pantalon-corto-running-mujer-2.jpg', 3, '38', 4),
(18, 'Campera deportiva Nike Jacket 2.0', 'Campera capucha ajustable', '5500.00', 10, 'running-jacket.jpg', 3, '38', 1),
(19, 'Campera Jacket', 'Campera impermeable, con cuello y cierre', '4714.00', 0, 'running-jacket_2.jpg', 1, '38', 5),
(21, 'Short Deportivo Nike', 'pantalon corto liso, de algodon para hombre', '6500.00', 25, 'short_deporte.jpg', 3, '38', 1),
(22, 'Short Nike Running II', 'Short de microfibra', '4925.00', 20, 'short-nike-running.jpg', 1, '38', 1),
(23, 'AIRMAX Shoes', 'zapatillas de mujer con camara de aire', '7200.00', 20, 'zapatillas_2.jpg', 3, '38', 1),
(24, 'Zapatillas ASICS, modelo Spring 2020', 'zapatillas', '4350.00', 0, 'zapatillas_asics.jpg', 2, '38', 6),
(25, 'Calzado New Balance - Edición 2021', 'Zapatillas marca Nike, edicion Post Pandemia', '6229.00', 20, 'myfile-1621875796612.jpg', 1, '38', 1);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `lastName` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `birthDate` date NOT NULL,
  `adress` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `passwordConfirme` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `newsletter` tinyint(4) NOT NULL,
  `image` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Truncate table before insert `users`
--

TRUNCATE TABLE `users`;
--
-- Dumping data for table `users`
--

INSERT DELAYED IGNORE INTO `users` (`id`, `name`, `lastName`, `birthDate`, `adress`, `email`, `password`, `passwordConfirme`, `newsletter`, `image`) VALUES
(4, 'pedro', 'picapiedra', '1900-01-01', 'cuevana 01', 'pedro.notiene@mail.com', '$2a$10$03atCKu/GWwTdAU070By8uc0qiUqhwZozhRgWeGtMBjYUYvNhIMMu', 'pedro123', 1, '1620429583225-pedropicapiedra.jpeg'),
(5, 'blanca', 'nieves', '1950-06-06', 'havaii 1000', 'blanca.nieves@mail.com', '$2a$10$zGANxuo9IgAUHbWVHJZDkOrRqcTRP2UClzdKEfVpRuSA0H/5V7nyW', 'hola123', 1, '1620857805259-blanca_nieves.jpeg'),
(6, 'Ricky', 'Martin', '1980-10-10', 'meame 10', 'rickymartin@mail.com', '$2a$10$2bs1frqUvsTWR7UVhIHh6.tDOBVZ448Ooh.NhflKI4APfDfag7Vaa', 'ricky123', 0, '1620857886020-Ricky_Martin.jpg'),
(7, 'Ricky', 'Fort', '1970-10-01', 'Libertador 1', 'rickyfort@mail.com', '$2a$10$KGEUp/lnZF4IK/CJLP99eO6p9AW2jDGNQp9XgQdYGJWDkrCmgAAAu', 'ricky123', 0, '1623355815946-RickyFort.jpg');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
