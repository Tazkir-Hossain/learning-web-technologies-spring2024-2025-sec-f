
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <link rel="stylesheet" href="../assets/styles/signUp.css">
</head>
<body>
  <div class="form-container">
    <h2>Create Your Account</h2>
    <form method="POST" action="../controller/signUpController.php">
      <input type="text" name="name" id="name" placeholder="Full Name">
      <input type="email" name="email" id="email" placeholder="Email Address">
      <input type="password" name="password" id="pass" placeholder="Password">
      <input type="password" name="confirm_password" id="conpass" placeholder="Confirm Password">
      <button type="submit">Sign Up</button>
    </form>

    <p>Already have an account? <a href="login.php">Login here</a></p>
  </div>
</body>
</html>
