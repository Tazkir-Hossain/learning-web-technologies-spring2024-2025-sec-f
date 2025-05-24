<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Add New Recipe</title>
  <link rel="stylesheet" href="../Asset/CSS/style.css">
</head>
<body>

  <h2>Add a New Bangladeshi Recipe</h2>

  <form method="POST" action="../Controller/addRecipe.php">
    <label>Title:</label><br>
    <input type="text" name="title" required><br><br>

    <label>Description:</label><br>
    <textarea name="description" rows="4" required></textarea><br><br>

    <label>Category:</label><br>
    <select name="category">
      <option value="non-veg">Non-Veg</option>
      <option value="vegetarian">Vegetarian</option>
      <option value="fish">Fish</option>
    </select><br><br>

    <label>Cuisine:</label><br>
    <input type="text" name="cuisine" placeholder="e.g. Dhaka, Sylhet"><br><br>

    <label>Meal Type:</label><br>
    <select name="meal">
      <option value="Breakfast">Breakfast</option>
      <option value="Lunch">Lunch</option>
      <option value="Dinner">Dinner</option>
    </select><br><br>

    <label>Diet Type:</label><br>
    <input type="text" name="diet" placeholder="e.g. Non-Veg, Vegan"><br><br>

    <label>Image Path:</label><br>
    <input type="text" name="image" placeholder="../Asset/Image/yourimage.jpg"><br><br>

    <button type="submit">Add Recipe</button>
  </form>

</body>
</html>
