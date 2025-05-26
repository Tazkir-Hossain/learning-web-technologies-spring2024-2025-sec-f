<?php
session_start();
include '../model/loginModel.php'; // show me a warning if the file is missing

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $email = $_POST['email'];
  $password = $_POST['password'];

  $user = loginUser($email, $password);

  if ($user) {
    $_SESSION['user'] = $user['name'];

    //  Set cookie for "remember me"
    if (isset($_POST['remember_me'])) {
      setcookie("user_email", $email, time() + (86400 * 7), "/"); // destry cookie after 7 days
    }

    header("Location: ../view/dashboard.php"); // http call to dashboard
    exit();
  } else {
    header("Location: ../view/login.php?error=Invalid credentials"); // after end of cookie session go to login page 
    exit();
  }
}
