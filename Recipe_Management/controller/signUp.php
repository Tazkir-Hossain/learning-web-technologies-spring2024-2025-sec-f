<?php
// Initialize variables
$name = $email = $password = $confirmPassword = "";
$errors = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  // Sanitize input
  $name = trim($_POST["name"]);
  $email = trim($_POST["email"]);
  $password = $_POST["password"];
  $confirmPassword = $_POST["confirm_password"];

  // Basic validation
  if (empty($name)) $errors[] = "Name is required.";
  if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = "Valid email is required.";
  if (strlen($password) < 6) $errors[] = "Password must be at least 6 characters.";
  if ($password !== $confirmPassword) $errors[] = "Passwords do not match.";

  // Save to database if no errors
  if (empty($errors)) {
    // Database connection
    $conn = new mysqli("localhost", "root", "", "recipe_db");

    if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
    }

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    // Insert query
    $stmt = $conn->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
    $stmt->bind_param("sss", $name, $email, $hashedPassword);

    if ($stmt->execute()) {
      echo "<p class='success'>Registration successful! You can now <a href='login.php'>Login</a>.</p>";
    } else {
      $errors[] = "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
  }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <link rel="stylesheet" href="../Styles/signUp.css">
</head>
<body>
  <div class="form-container">
    <h2>Create Your Account</h2>

    <?php if (!empty($errors)): ?>
      <div class="error-box">
        <?php foreach ($errors as $error): ?>
          <p><?php echo htmlspecialchars($error); ?></p>
        <?php endforeach; ?>
      </div>
    <?php endif; ?>

    <form method="POST" action="signup.php">
      <input type="text" name="name" placeholder="Full Name" value="<?php echo htmlspecialchars($name); ?>" required>
      <input type="email" name="email" placeholder="Email Address" value="<?php echo htmlspecialchars($email); ?>" required>
      <input type="password" name="password" placeholder="Password" required>
      <input type="password" name="confirm_password" placeholder="Confirm Password" required>
      <button type="submit">Sign Up</button>
    </form>

    <p>Already have an account? <a href="login.php">Login here</a></p>
  </div>
</body>
</html>
