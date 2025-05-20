<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Signup | Recipe Manager</title>
  <link rel="stylesheet" href="../Asset/CSS/style.css">
</head>
<body>

  <h2>Signup</h2>

  <form method="POST" action="../Controller/authController.php">
    <input type="hidden" name="action" value="signup">

    <label for="email">Email:</label><br>
    <input type="email" name="email" id="email" required><br><br>

    <label for="password">Password:</label><br>
    <input type="password" name="password" id="password" required><br><br>

    <button type="submit">Signup</button>
  </form>

  <p>Already have an account? 
    <a href="login.php">Login</a>
  </p>

</body>
</html>
