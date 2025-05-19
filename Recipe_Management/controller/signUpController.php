<?php
require_once '../model/userModel.php'; // 

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];
    
    if (empty($name) || empty($email) || empty($password) || empty($confirm_password)) {
    die("All fields are required.");
  }

   if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    die("Invalid email format.");
  }

   if ($password !== $confirm_password) {
    die("Passwords do not match.");
  }

   if (strlen($password) < 8) {
    die("Password must be at least 8 characters.");
  }
    if (insertUser($name, $email, $password, $confirm_password)) {
        //echo "Successfully inserted";
        header("Location: ../view/login.php");
    } else {
        echo "Failed to insert user!";
    }
    // header("Location: ../view/login.php");
    // exit();
}
?>
