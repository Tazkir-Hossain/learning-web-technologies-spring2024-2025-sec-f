<?php
require_once '../model/userModel.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['name'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    if (insertUser($name, $email, $password, $confirm_password)) {
        echo "Successfully inserted";
        // Optionally redirect: header("Location: ../view/login.php");
    } else {
        echo "Failed to insert user!";
    }
}
?>
