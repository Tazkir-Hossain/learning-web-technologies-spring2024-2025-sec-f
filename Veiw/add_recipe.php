<?php
require_once("../Model/db.php");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Get text inputs
  $title = $_POST['title'];
  $description = $_POST['description'];
  $category = $_POST['category'];
  $cuisine = $_POST['cuisine'];
  $meal = $_POST['meal'];
  $diet = $_POST['diet'];

  // Handle image upload
  $imagePathForDB = ""; // fallback in case of no upload

  if (isset($_FILES['food_photo']) && $_FILES['food_photo']['error'] === UPLOAD_ERR_OK) {
    $imageTmp = $_FILES['food_photo']['tmp_name'];
    $imageName = basename($_FILES['food_photo']['name']);
    $targetPath = "../Asset/Image/" . $imageName;

    if (move_uploaded_file($imageTmp, $targetPath)) {
      $imagePathForDB = $targetPath;
    } else {
      echo "<script>alert(' Image upload failed.'); window.history.back();</script>";
      exit;
    }
  }

  // Insert into database
  $sql = "INSERT INTO recipes (title, description, category, cuisine, meal, diet, image)
          VALUES (:title, :description, :category, :cuisine, :meal, :diet, :image)";

  $stmt = $conn->prepare($sql);
  $stmt->bindParam(':title', $title);
  $stmt->bindParam(':description', $description);
  $stmt->bindParam(':category', $category);
  $stmt->bindParam(':cuisine', $cuisine);
  $stmt->bindParam(':meal', $meal);
  $stmt->bindParam(':diet', $diet);
  $stmt->bindParam(':image', $imagePathForDB);

  if ($stmt->execute()) {
    echo "<script>alert(' Recipe added successfully!'); window.location.href='../View/recipes.html';</script>";
  } else {
    echo "<script>alert(' Failed to add recipe to DB.'); window.history.back();</script>";
  }
}
?>
