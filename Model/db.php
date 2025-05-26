<?php
$host = "localhost";
$dbname = "recipedb";
$user = "root";
$pass = "";

try {
  $conn = new PDO("mysql:host=$host;dbname=$dbname", $user, $pass);
} catch (PDOException $e) {
  echo "DB Connection failed: " . $e->getMessage();
  exit;
}
?>
