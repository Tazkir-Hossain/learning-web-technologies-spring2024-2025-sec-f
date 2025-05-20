<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login | Recipe Manager</title>
  <link rel="stylesheet" href="../Asset/CSS/style.css"> 
</head>
<body>

  <h2>Login</h2>

  <form method="POST" action="../Controller/authController.php">
    <input type="hidden" name="action" value="login">

    <label for="email">Email:</label><br>
    <input type="email" name="email" id="email" required><br><br>

    <label for="password">Password:</label><br>
    <input type="password" name="password" id="password" required><br><br>

    <button type="submit">Login</button>
  </form>

  <p>Don't have an account? 
    <a href="../View/signup.php">Signup</a> 
  </p>

</body>
</html>
