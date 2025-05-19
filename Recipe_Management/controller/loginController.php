<?php
session_start();
include '../model/loginModel.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $user = loginUser($email, $password);

  if ($user) {
    $_SESSION['user'] = $user['name'];

    // Optional: Set cookie for "remember me"
    if (isset($_POST['remember_me'])) {
      setcookie("user_email", $email, time() + (86400 * 7), "/"); // 7 days
    }

    header("Location: ../view/dashboard.php"); // Redirect to dashboard
    exit();
  } else {
    header("Location: ../view/login.php?error=Invalid credentials");
    exit();
  }
}
