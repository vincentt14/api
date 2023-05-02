<?php

// $mahasiswa =
//   [
//     [
//       "nama" => "Vincent",
//       "nim" => "00000037401",
//       "email" => "vincent@gmail.com"
//     ],
//     [
//       "nama" => "Rucci",
//       "nim" => "000000111111",
//       "email" => "rucci@gmail.com"
//     ]
//   ];

// $data = json_encode($mahasiswa);

// var_dump($data);

$dbh = new PDO('mysql:host=localhost; dbname=phpdasar', 'root', '');
$db = $dbh->prepare('SELECT * FROM mahasiswa');
$db->execute();
$mahasiswa = $db->fetchAll(PDO::FETCH_ASSOC);

var_dump($mahasiswa);

?>