-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Dec 19, 2019 at 02:10 PM
-- Server version: 8.0.2-dmr
-- PHP Version: 7.2.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `officemanager`
--

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE `department` (
  `department_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(1),
(1),
(1),
(1),
(1),
(1);

-- --------------------------------------------------------

--
-- Table structure for table `office`
--

CREATE TABLE `office` (
  `office_id` int(11) NOT NULL,
  `building` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `floor` int(11) NOT NULL,
  `num` int(11) NOT NULL,
  `size` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `office`
--

INSERT INTO `office` (`office_id`, `building`, `description`, `floor`, `num`, `size`) VALUES
(1, 'C', 'none', 0, 47, 1),
(2, 'C', 'none', 0, 46, 3),
(3, 'C', 'none', 0, 45, 1),
(4, 'C', 'none', 0, 44, 3),
(5, 'C', 'none', 0, 43, 3),
(6, 'C', 'retro', 0, 42, 4),
(7, 'C', 'retro', 0, 41, 4),
(8, 'C', 'retro', 0, 40, 2),
(9, 'C', 'none', 0, 10, 2),
(10, 'C', 'none', 0, 37, 1),
(11, 'C', 'none', 0, 36, 3),
(12, 'C', 'none', 0, 35, 1),
(13, 'C', 'none', 0, 34, 3),
(14, 'C', 'none', 0, 33, 3),
(15, 'C', 'none', 0, 32, 3),
(16, 'C', 'none', 0, 31, 3),
(17, 'C', 'none', 0, 30, 3),
(18, 'C', 'none', 0, 27, 3),
(19, 'C', 'none', 0, 26, 3),
(20, 'C', 'none', 0, 25, 3),
(21, 'C', 'none', 0, 24, 3),
(22, 'C', 'none', 0, 23, 3),
(23, 'C', 'none', 0, 22, 3),
(24, 'C', 'none', 0, 21, 3),
(25, 'B', 'none', 1, 74, 2),
(26, 'B', 'none', 1, 72, 2),
(27, 'B', 'none', 1, 70, 2),
(28, 'B', 'none', 1, 68, 2),
(29, 'B', 'none', 1, 66, 2),
(30, 'B', 'none', 1, 64, 2),
(31, 'B', 'none', 1, 62, 2),
(32, 'B', 'none', 1, 60, 2),
(34, 'B', 'none', 1, 58, 2),
(35, 'B', 'none', 1, 56, 2),
(36, 'B', 'none', 1, 54, 2),
(37, 'B', 'none', 1, 52, 2),
(38, 'B', 'none', 1, 48, 2),
(39, 'B', 'none', 1, 46, 2),
(40, 'B', 'none', 1, 44, 2),
(41, 'B', 'none', 1, 42, 2),
(42, 'B', 'none', 1, 40, 2),
(43, 'B', 'none', 1, 25, 2),
(44, 'B', 'none', 1, 21, 2),
(45, 'B', 'none', 1, 27, 2),
(46, 'B', 'none', 1, 29, 2),
(47, 'B', 'none', 1, 33, 2),
(48, 'B', 'none', 1, 35, 2),
(49, 'B', 'none', 1, 0, 2),
(50, 'B', 'none', 1, 2, 2),
(51, 'B', 'none', 1, 4, 2),
(52, 'B', 'none', 1, 6, 2),
(53, 'B', 'none', 1, 8, 2),
(54, 'B', 'none', 1, 10, 2),
(55, 'B', 'none', 1, 12, 2),
(56, 'B', 'none', 1, 16, 2),
(57, 'B', 'none', 1, 18, 2),
(58, 'B', 'none', 1, 20, 2),
(59, 'B', 'none', 1, 22, 2),
(60, 'B', 'none', 1, 24, 2),
(61, 'B', 'none', 1, 26, 2),
(62, 'B', 'none', 1, 28, 2),
(63, 'B', 'none', 1, 30, 2),
(64, 'B', 'none', 1, 32, 2),
(65, 'B', 'none', 1, 34, 2),
(66, 'B', 'none', 1, 36, 2),
(67, 'B', 'none', 1, 38, 2),
(68, 'B', 'none', 1, 37, 2),
(69, 'B', 'none', 1, 1, 2),
(70, 'B', 'none', 1, 39, 2),
(71, 'B', 'none', 1, 3, 2),
(72, 'B', 'none', 1, 5, 2),
(73, 'B', 'none', 1, 7, 2),
(74, 'B', 'none', 1, 9, 2),
(75, 'B', 'none', 1, 13, 2),
(76, 'B', 'none', 1, 15, 2),
(77, 'B', 'none', 1, 50, 2),
(78, 'B', 'none', 2, 74, 2),
(79, 'B', 'none', 2, 72, 2),
(80, 'B', 'none', 2, 70, 2),
(81, 'B', 'none', 2, 68, 2),
(82, 'B', 'none', 2, 66, 2),
(83, 'B', 'none', 2, 64, 2),
(84, 'B', 'none', 2, 62, 2),
(85, 'B', 'none', 2, 60, 2),
(86, 'B', 'none', 2, 58, 2),
(87, 'B', 'none', 2, 56, 2),
(88, 'B', 'none', 2, 54, 2),
(89, 'B', 'none', 2, 52, 2),
(90, 'B', 'none', 2, 50, 2),
(91, 'B', 'none', 2, 48, 2),
(92, 'B', 'none', 2, 46, 2),
(93, 'B', 'none', 2, 44, 2),
(94, 'B', 'none', 2, 42, 2),
(95, 'B', 'none', 2, 40, 2),
(96, 'B', 'none', 2, 17, 2),
(97, 'B', 'none', 2, 19, 2),
(98, 'B', 'none', 2, 25, 2),
(99, 'B', 'none', 2, 27, 2),
(100, 'B', 'none', 2, 29, 2),
(101, 'B', 'none', 2, 31, 2),
(102, 'B', 'none', 2, 33, 2),
(103, 'B', 'none', 2, 0, 2),
(104, 'B', 'none', 2, 2, 2),
(105, 'B', 'none', 2, 4, 2),
(106, 'B', 'none', 2, 6, 2),
(107, 'B', 'none', 2, 8, 2),
(108, 'B', 'none', 2, 10, 2),
(109, 'B', 'none', 2, 12, 2),
(110, 'B', 'none', 2, 14, 2),
(111, 'B', 'none', 2, 16, 2),
(112, 'B', 'none', 2, 18, 2),
(113, 'B', 'none', 2, 20, 2),
(114, 'B', 'none', 2, 22, 2),
(115, 'B', 'none', 2, 24, 2),
(116, 'B', 'none', 2, 26, 2),
(117, 'B', 'none', 2, 28, 2),
(118, 'B', 'none', 2, 30, 2),
(119, 'B', 'none', 2, 32, 2),
(120, 'B', 'none', 2, 34, 2),
(121, 'B', 'none', 2, 36, 2),
(122, 'B', 'none', 2, 38, 2),
(123, 'B', 'none', 2, 15, 2),
(124, 'B', 'none', 2, 13, 2),
(125, 'B', 'none', 2, 9, 2),
(126, 'B', 'none', 2, 7, 2),
(127, 'B', 'none', 2, 5, 2),
(128, 'B', 'none', 2, 3, 2),
(129, 'B', 'none', 2, 1, 2),
(130, 'B', 'none', 2, 37, 2),
(131, 'B', 'none', 2, 35, 2),
(132, 'B', 'none', 2, 74, 2);

-- --------------------------------------------------------

--
-- Table structure for table `office_assignment`
--

CREATE TABLE `office_assignment` (
  `office_assignment_id` int(11) NOT NULL,
  `end_date` date NOT NULL,
  `start_date` date NOT NULL,
  `office_id` int(11) DEFAULT NULL,
  `person_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `office_assignment`
--

INSERT INTO `office_assignment` (`office_assignment_id`, `end_date`, `start_date`, `office_id`, `person_id`) VALUES
(1, '2020-03-16', '2019-12-12', 1, 1),
(2, '2020-03-16', '2019-12-12', 2, 2),
(3, '2020-03-16', '2019-12-12', 2, 3),
(4, '2020-03-16', '2019-12-12', 3, 7),
(5, '2020-03-16', '2019-12-12', 3, 6),
(6, '2020-03-16', '2019-12-12', 4, 5),
(7, '2020-03-16', '2019-12-12', 4, 8),
(8, '2020-03-16', '2019-12-12', 4, 4),
(9, '2019-11-05', '2019-07-07', 8, 9),
(10, '2020-03-16', '2019-07-07', 21, 20),
(11, '2020-03-16', '2019-07-07', 21, 14),
(12, '2020-03-16', '2019-12-12', 13, 15),
(13, '2020-03-16', '2019-12-12', 14, 12),
(14, '2020-03-16', '2019-12-12', 14, 13),
(15, '2020-03-16', '2019-07-07', 14, 17),
(16, '2020-03-16', '2019-12-12', 15, 21),
(17, '2020-03-16', '2019-12-12', 15, 18),
(18, '2020-03-16', '2019-12-12', 16, 11),
(19, '2020-03-16', '2019-12-12', 17, 16),
(20, '2020-03-16', '2019-07-07', 19, 16),
(21, '2020-03-16', '2019-12-12', 22, 19),
(22, '2020-03-16', '2019-12-12', 25, 22),
(23, '2020-03-16', '2019-12-12', 25, 23),
(24, '2020-03-16', '2019-12-12', 26, 24),
(25, '2020-03-16', '2019-12-12', 26, 25),
(26, '2020-03-16', '2019-12-12', 27, 26),
(27, '2020-03-16', '2019-12-12', 29, 27),
(28, '2020-03-16', '2019-12-12', 29, 28),
(29, '2020-03-16', '2019-12-12', 30, 29),
(30, '2020-03-16', '2019-12-12', 30, 30),
(31, '2020-03-16', '2019-12-12', 32, 31),
(32, '2020-03-16', '2019-12-12', 32, 32),
(33, '2020-03-16', '2019-12-12', 34, 33),
(36, '2020-03-16', '2019-12-12', 34, 36),
(37, '2020-03-16', '2019-12-12', 35, 37),
(38, '2020-03-16', '2019-12-12', 36, 38),
(39, '2020-03-16', '2019-12-12', 36, 39),
(40, '2020-03-16', '2019-12-12', 37, 40),
(41, '2020-03-16', '2019-12-12', 37, 41),
(42, '2020-03-16', '2019-12-12', 38, 42),
(43, '2020-03-16', '2019-12-12', 38, 43),
(44, '2020-03-16', '2019-12-12', 38, 44),
(45, '2020-03-16', '2019-12-12', 39, 45),
(46, '2020-03-16', '2019-12-12', 40, 46),
(47, '2020-03-16', '2019-12-12', 41, 47),
(48, '2020-03-16', '2019-12-12', 42, 48),
(49, '2020-03-16', '2019-12-12', 42, 49),
(50, '2020-03-16', '2019-12-12', 43, 50),
(51, '2020-03-16', '2019-12-12', 43, 51),
(53, '2020-03-16', '2019-12-12', 44, 53),
(54, '2020-03-16', '2019-12-12', 45, 54),
(55, '2020-03-16', '2019-12-12', 47, 55),
(56, '2020-03-16', '2019-12-12', 47, 56),
(57, '2020-03-16', '2019-12-12', 48, 57),
(58, '2020-03-16', '2019-12-12', 51, 58),
(59, '2020-03-16', '2019-12-12', 51, 59),
(60, '2020-03-16', '2019-12-12', 52, 60),
(61, '2020-03-16', '2019-12-12', 52, 61),
(62, '2020-03-16', '2019-12-12', 52, 62),
(63, '2020-03-16', '2019-12-12', 53, 63),
(64, '2020-03-16', '2019-12-12', 54, 64),
(65, '2020-03-16', '2019-12-12', 54, 65),
(66, '2020-03-16', '2019-12-12', 54, 66),
(67, '2020-03-16', '2019-12-12', 55, 67),
(68, '2020-03-16', '2019-12-12', 56, 68),
(69, '2020-03-16', '2019-12-12', 57, 69),
(70, '2020-03-16', '2019-12-12', 57, 70),
(71, '2020-03-16', '2019-12-12', 58, 71),
(72, '2020-03-16', '2019-12-12', 58, 72),
(73, '2020-03-16', '2019-12-12', 59, 73),
(74, '2020-03-16', '2019-12-12', 59, 74),
(75, '2020-03-16', '2019-12-12', 60, 75),
(76, '2020-03-16', '2019-12-12', 61, 76),
(77, '2020-03-16', '2019-12-12', 61, 77),
(78, '2020-03-16', '2019-12-12', 62, 78),
(79, '2020-03-16', '2019-12-12', 62, 79),
(80, '2020-03-16', '2019-12-12', 63, 80),
(81, '2020-03-16', '2019-12-12', 63, 81),
(82, '2020-03-16', '2019-12-12', 64, 82),
(83, '2020-03-16', '2019-12-12', 65, 83),
(84, '2020-03-16', '2019-12-12', 66, 84),
(85, '2020-03-16', '2019-12-12', 67, 85),
(86, '2020-03-16', '2019-12-12', 68, 86),
(87, '2020-03-16', '2019-12-12', 69, 87),
(88, '2020-03-16', '2019-12-12', 70, 88),
(89, '2020-03-16', '2019-12-12', 71, 89),
(90, '2020-03-16', '2019-12-12', 71, 90),
(91, '2020-03-16', '2019-12-12', 72, 91),
(92, '2020-03-16', '2019-12-12', 72, 92),
(93, '2020-03-16', '2019-12-12', 73, 93),
(94, '2020-03-16', '2019-12-12', 74, 94),
(95, '2020-03-16', '2019-12-12', 75, 95),
(96, '2020-03-16', '2019-12-12', 75, 96),
(97, '2020-03-16', '2019-12-12', 76, 97),
(98, '2020-03-16', '2019-12-12', 76, 98),
(99, '2020-03-16', '2019-12-12', 77, 99),
(100, '2020-03-16', '2019-12-12', 75, 100),
(101, '2020-03-16', '2019-12-12', 62, 101),
(102, '2020-03-16', '2019-12-12', 64, 102),
(103, '2020-03-16', '2019-12-12', 65, 103),
(104, '2020-03-16', '2019-12-12', 66, 104),
(105, '2020-03-16', '2019-12-12', 45, 105),
(106, '2020-03-16', '2019-12-12', 36, 106),
(107, '2020-03-16', '2019-12-12', 48, 107),
(108, '2020-03-16', '2019-12-12', 42, 108),
(109, '2020-03-16', '2019-12-12', 72, 109),
(110, '2020-03-16', '2019-12-12', 78, 109),
(111, '2020-03-16', '2019-12-12', 78, 110),
(112, '2020-03-16', '2019-12-12', 79, 111),
(113, '2020-03-16', '2019-12-12', 79, 112),
(114, '2020-03-16', '2019-12-12', 80, 113),
(115, '2020-03-16', '2019-12-12', 78, 114),
(116, '2020-03-16', '2019-12-12', 81, 115),
(117, '2020-03-16', '2019-12-12', 81, 116),
(118, '2020-03-16', '2019-12-12', 82, 117),
(119, '2020-03-16', '2019-12-12', 82, 118),
(120, '2020-03-16', '2019-12-12', 83, 119),
(121, '2020-03-16', '2019-12-12', 85, 120),
(122, '2020-03-16', '2019-12-12', 86, 121),
(123, '2020-03-16', '2019-12-12', 86, 122),
(124, '2020-03-16', '2019-12-12', 87, 123),
(125, '2020-03-16', '2019-12-12', 88, 124),
(126, '2020-03-16', '2019-12-12', 89, 125),
(127, '2020-03-16', '2019-12-12', 89, 126),
(128, '2020-03-16', '2019-12-12', 89, 127),
(129, '2020-03-16', '2019-12-12', 90, 128),
(130, '2020-03-16', '2019-12-12', 91, 129),
(131, '2020-03-16', '2019-12-12', 92, 130),
(132, '2020-03-16', '2019-12-12', 94, 131),
(137, '2020-03-16', '2019-12-12', 99, 136),
(138, '2020-03-16', '2019-12-12', 10, 137),
(139, '2020-03-16', '2019-12-12', 101, 138),
(140, '2020-03-16', '2019-12-12', 101, 139),
(141, '2020-03-16', '2019-12-12', 102, 140),
(142, '2020-03-16', '2019-12-12', 103, 141),
(143, '2020-03-16', '2019-12-12', 104, 142),
(144, '2020-03-16', '2019-12-12', 105, 143),
(145, '2020-03-16', '2019-12-12', 106, 144),
(146, '2020-03-16', '2019-12-12', 107, 145),
(147, '2020-03-16', '2019-12-12', 108, 146);

-- --------------------------------------------------------

--
-- Table structure for table `person`
--

CREATE TABLE `person` (
  `person_id` int(11) NOT NULL,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `is_manager` bit(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `person`
--

INSERT INTO `person` (`person_id`, `first_name`, `last_name`, `is_manager`) VALUES
(1, 'gauthier', 'brin', b'0'),
(2, 'quentin', 'thouvenot', b'0'),
(3, 'Julien', 'bailly', b'0'),
(4, 'Brice ', 'Losson ', b'0'),
(5, 'Charlotte', 'Lanuel; ', b'0'),
(6, 'Valentin', 'Thouvenin', b'0'),
(7, 'Bryan', 'Virte', b'0'),
(8, 'Omar', 'Bellahcene', b'0'),
(9, 'shane', 'Walsh', b'0'),
(10, 'Vernom', 'Leclair', b'0'),
(11, 'Pansy', 'Bérard', b'0'),
(12, 'Fabienne', 'Pinette', b'0'),
(13, 'florus', 'Tétrault', b'0'),
(14, 'channing', 'Auger', b'0'),
(15, 'Didier', 'Ayot', b'0'),
(16, 'soren', 'Charest', b'0'),
(17, 'legget', 'Dubé', b'0'),
(18, 'Marcelle', 'Pirouet', b'0'),
(19, 'Zdenek', 'Pichette', b'0'),
(20, 'Blancher', 'Doiron', b'0'),
(21, 'Lotye', 'Tétrault', b'0'),
(22, 'Charmaine ', 'Paiement', b'0'),
(23, 'Mattie', 'Orrell', b'0'),
(24, 'Orelia', 'Houldin', b'0'),
(25, 'Liza', 'Bodimeade', b'0'),
(26, 'Marshall', 'Brinded', b'0'),
(27, 'Hedda', 'Ebhardt', b'0'),
(28, 'Quentin', 'Roll', b'0'),
(29, 'Shanie', 'Leetham', b'0'),
(30, 'Belinda', 'Ayliff', b'0'),
(31, 'Constantine', 'Goldster', b'0'),
(32, 'Myles', 'Neiland', b'0'),
(33, 'Carling', 'Searle', b'1'),
(34, 'Gustav', 'Vlies', b'0'),
(35, 'Yasmeen', 'Lassell', b'1'),
(36, 'Daniele', 'Temblett', b'0'),
(37, 'Catlee', 'Wavell', b'0'),
(38, 'Astrid', 'Lepick', b'0'),
(39, 'Henry', 'Barden', b'0'),
(40, 'Vinson', 'Batting', b'1'),
(41, 'Agatha', 'Lacroutz', b'0'),
(42, 'Letti', 'Westmore', b'1'),
(43, 'Christin', 'Rogers', b'0'),
(44, 'Jackquelin', 'Karle', b'0'),
(45, 'Gareth', 'Stokell', b'1'),
(46, 'Fernandina', 'Cotillard', b'0'),
(47, 'Major', 'Georghiou', b'1'),
(48, 'Hugo', 'Hovenden', b'0'),
(49, 'Edee', 'Channer', b'0'),
(50, 'Ardeen', 'Scholard', b'0'),
(51, 'Tedda', 'Mew', b'1'),
(52, 'Yanaton', 'Keuntje', b'0'),
(53, 'Dina', 'Varden', b'1'),
(54, 'Rebecka', 'Ancketill', b'0'),
(55, 'Merrili', 'Becaris', b'1'),
(56, 'Filia', 'Andrivot', b'1'),
(57, 'Donall', 'Measen', b'1'),
(58, 'Christina', 'Whitsun', b'0'),
(59, 'Gordan', 'Rattry', b'0'),
(60, 'Mil', 'Pakeman', b'1'),
(61, 'Robinette', 'Gremane', b'1'),
(62, 'Casar', 'Markl', b'1'),
(63, 'Cobby', 'Besnardeau', b'1'),
(64, 'Elonore', 'Sunner', b'1'),
(65, 'Marina', 'Goodayle', b'0'),
(66, 'Quincey', 'Wilmington', b'0'),
(67, 'Kenn', 'Fairham', b'0'),
(68, 'Tito', 'Burke', b'0'),
(69, 'Mal', 'Hammill', b'0'),
(70, 'Myrna', 'Brickner', b'1'),
(71, 'Godfrey', 'Frugier', b'0'),
(72, 'Silvester', 'Cottier', b'0'),
(73, 'Ara', 'Kirkup', b'1'),
(74, 'Nalani', 'Klyn', b'0'),
(75, 'Patience', 'Strattan', b'1'),
(76, 'Delbert', 'Balint', b'1'),
(77, 'Liana', 'Kofax', b'1'),
(78, 'Garwin', 'Moughtin', b'1'),
(79, 'Pauly', 'Emmerson', b'0'),
(80, 'Dawn', 'Clipston', b'0'),
(81, 'Berty', 'Redmond', b'0'),
(82, 'Doralynne', 'Hawkey', b'0'),
(83, 'Rocky', 'Noades', b'1'),
(84, 'Nicky', 'Buckel', b'1'),
(85, 'Jennilee', 'Gumley', b'1'),
(86, 'Ber', 'Caldaro', b'1'),
(87, 'Clo', 'Dundon', b'1'),
(88, 'Willey', 'Candish', b'1'),
(89, 'Deanna', 'Walker', b'1'),
(90, 'Devan', 'Fasset', b'1'),
(91, 'Georg', 'Gallihawk', b'0'),
(92, 'Melvyn', 'Stebbin', b'1'),
(93, 'Anabel', 'Casbolt', b'0'),
(94, 'Arty', 'MacCaghan', b'1'),
(95, 'Brandyn', 'Durtnell', b'0'),
(96, 'Curtice', 'Slegg', b'0'),
(97, 'Wallie', 'Huikerby', b'1'),
(98, 'Pam', 'Vignaux', b'0'),
(99, 'Marylinda', 'Reignard', b'1'),
(100, 'Eveline', 'Sansbury', b'0'),
(101, 'Maddi', 'Frushard', b'0'),
(102, 'Chester', 'McBryde', b'0'),
(103, 'Roslyn', 'Arman', b'1'),
(104, 'Hunfredo', 'Rambadt', b'0'),
(105, 'Jorgan', 'Usher', b'1'),
(106, 'Valencia', 'Stretton', b'0'),
(107, 'Chlo', 'Whitney', b'0'),
(108, 'Quinn', 'Nipper', b'0'),
(109, 'Amelita', 'Talman', b'0'),
(110, 'Amy', 'Gartan', b'1'),
(111, 'Willdon', 'Lomasna', b'1'),
(112, 'Cassie', 'Mariette', b'1'),
(113, 'Alina', 'Kattenhorn', b'0'),
(114, 'Benoit', 'H', b'0'),
(115, 'Curran', 'St Quenin', b'1'),
(116, 'Brooke', 'Bennet', b'0'),
(117, 'Ardene', 'Benoey', b'0'),
(118, 'Laurie', 'Bowller', b'1'),
(119, 'Natala', 'Rubke', b'1'),
(120, 'Jeannette', 'Duchatel', b'1'),
(121, 'Farr', 'Fleetham', b'1'),
(122, 'Netty', 'Portwain', b'1'),
(123, 'Yorgos', 'Farfoot', b'1'),
(124, 'Dido', 'Bummfrey', b'1'),
(125, 'Lawton', 'D\'Hooghe', b'1'),
(126, 'Eustace', 'Graith', b'0'),
(127, 'Bale', 'Logesdale', b'0'),
(128, 'Eadith', 'Scollick', b'1'),
(129, 'Bab', 'Flott', b'1'),
(130, 'Galven', 'Timbridge', b'0'),
(131, 'Nonnah', 'Corns', b'0'),
(132, 'Dirk', 'Oldershaw', b'0'),
(134, 'Nichole', 'Aldins', b'1'),
(135, 'Kenny', 'Klouz', b'0'),
(136, 'Rozele', 'Feifer', b'0'),
(137, 'Gay', 'Busfield', b'0'),
(138, 'Fiorenze', 'Ledrane', b'1'),
(139, 'Adah', 'Pargeter', b'1'),
(140, 'Dorita', 'Ivashnyov', b'1'),
(141, 'Heloise', 'Alcalde', b'1'),
(142, 'Corny', 'Boldt', b'0'),
(143, 'Kari', 'Jouanet', b'1'),
(144, 'Reggie', 'Ring', b'0'),
(145, 'Selena', 'Riccione', b'0'),
(146, 'Ase', 'Gutman', b'0'),
(147, 'Dru', 'Camili', b'0'),
(148, 'Brewer', 'Jodrellec', b'1'),
(149, 'Marven', 'Goodbar', b'1'),
(150, 'Cesya', 'Tebbit', b'0'),
(151, 'Tanitansy', 'Sitford', b'1'),
(152, 'Jolene', 'Le Grice', b'0'),
(153, 'Gayle', 'Poynzer', b'1'),
(154, 'Maje', 'Buddell', b'1'),
(155, 'Danna', 'Fossitt', b'1'),
(156, 'Ellerey', 'Bellay', b'1'),
(157, 'Pebrook', 'Blackler', b'1'),
(158, 'Waldemar', 'Worsfold', b'0'),
(159, 'Cecilla', 'Aumerle', b'1'),
(160, 'Mommy', 'Rouke', b'1'),
(170, 'Ninon', 'Reedyhough', b'0'),
(171, 'Nonie', 'Stentiford', b'0'),
(172, 'Evelyn', 'Kegan', b'0'),
(173, 'Stacie', 'Finder', b'0'),
(174, 'Norah', 'Carmo', b'0'),
(175, 'Manuel', 'Mapp', b'1'),
(176, 'Ritchie', 'Gawith', b'0'),
(177, 'Tedda', 'Buttrick', b'1'),
(178, 'Tadd', 'Alliban', b'0'),
(179, 'Evelyn', 'Litchmore', b'1'),
(180, 'Leroy', 'Etchingham', b'0'),
(181, 'Odelia', 'Chagg', b'0'),
(182, 'Sydelle', 'Bernaciak', b'0'),
(183, 'Aimil', 'Sore', b'0'),
(184, 'Elly', 'Rieme', b'1');

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `status_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `size` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `team_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `department`
--
ALTER TABLE `department`
  ADD PRIMARY KEY (`department_id`);

--
-- Indexes for table `office`
--
ALTER TABLE `office`
  ADD PRIMARY KEY (`office_id`);

--
-- Indexes for table `office_assignment`
--
ALTER TABLE `office_assignment`
  ADD PRIMARY KEY (`office_assignment_id`),
  ADD KEY `FKmw9nktapj7lmdeibtu01xdosj` (`office_id`),
  ADD KEY `FK4h7tsf7sdkj2j1l5k1hixk1ts` (`person_id`);

--
-- Indexes for table `person`
--
ALTER TABLE `person`
  ADD PRIMARY KEY (`person_id`);

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`status_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`team_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `office_assignment`
--
ALTER TABLE `office_assignment`
  ADD CONSTRAINT `FK4h7tsf7sdkj2j1l5k1hixk1ts` FOREIGN KEY (`person_id`) REFERENCES `person` (`person_id`),
  ADD CONSTRAINT `FKmw9nktapj7lmdeibtu01xdosj` FOREIGN KEY (`office_id`) REFERENCES `office` (`office_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
