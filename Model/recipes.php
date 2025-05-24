<?php
header("Content-Type: application/json");
require_once("../Model/db.php");

try {
  $stmt = $conn->query("SELECT id, title, category, image FROM recipes");
  $recipes = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($recipes);
} catch (Exception $e) {
  echo json_encode(["error" => $e->getMessage()]);
}
?>
