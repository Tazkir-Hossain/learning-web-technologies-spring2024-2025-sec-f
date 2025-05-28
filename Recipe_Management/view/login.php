<!-- view/login.php -->
<?php
session_start(); // using this if the session is still running(to run this session need to create session in every php file)
if (isset($_SESSION['user'])) {
  header("Location: dashboard.php"); // http call
  exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Login</title>
  <link rel="stylesheet" href="../assets/styles/login.css">
</head>
<body>
  <div class="login-container">
    <h2>Login to Your Account</h2>
    <?php if (isset($_GET['error'])): ?>
      <p style="color:red"><?= htmlspecialchars($_GET['error']) ?></p>
    <?php endif; ?>
    
    <form method="POST" action="../controller/loginController.php">
      <input type="email" name="email" placeholder="Email Address" required>
      <input type="password" name="password" placeholder="Password" required>
      <label>
        <input type="checkbox" name="remember_me"> Remember Me
      </label>
      <button type="submit">Login</button>
    </form>

    <p>Don't have an account? <a href="./signup.html">Sign up here</a></p>
  </div>
</body>
</html>
