<?php
session_start();
if (!isset($_SESSION['user'])) {
  header("Location: login.php");
  exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <link rel="stylesheet" href="../assets/styles/dashboard.css">
</head>
<body>
  <div class="dashboard-container">
    <h2>Welcome, <?= htmlspecialchars($_SESSION['user']) ?>!</h2>
    <p>This is your dashboard. You are successfully logged in.</p>

    <div class="nav-links">
      <a href="gallery.html" class="dashboard-link">🍽️ Recipe Gallery</a>
      <a href="mealPlanning.html" class="dashboard-link">📅 Meal Planning</a>
      <a href="shoppingList.html" class="dashboard-link">🛒 Shopping List</a>
      <a href="nutritionInfo.html" class="dashboard-link">📊 Nutritional Info</a>
      <a href="cookingTimer.html" class="dashboard-link">⏲️ Cooking Timer</a>
    </div>

    <a class="logout-btn" href="../controller/logout.php">🚪 Logout</a>
  </div>
</body>
</html>

