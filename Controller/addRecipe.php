<?php
require_once("../Model/db.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $title = $_POST['title'];
  $description = $_POST['description'];
  $category = $_POST['category'];
  $cuisine = $_POST['cuisine'];
  $meal = $_POST['meal'];
  $diet = $_POST['diet'];
  $image = $_POST['image'];

  $sql = "INSERT INTO recipes (title, description, category, cuisine, meal, diet, image)
          VALUES (:title, :description, :category, :cuisine, :meal, :diet, :image)";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':title', $title);
  $stmt->bindParam(':description', $description);
  $stmt->bindParam(':category', $category);
  $stmt->bindParam(':cuisine', $cuisine);
  $stmt->bindParam(':meal', $meal);
  $stmt->bindParam(':diet', $diet);
  $stmt->bindParam(':image', $image);

  if ($stmt->execute()) {
    echo "<script>alert(' Recipe added successfully!'); window.location.href='../View/recipes.html';</script>";
  } else {
    echo "<script>alert(' Failed to add recipe'); window.history.back();</script>";
  }
}
?>
