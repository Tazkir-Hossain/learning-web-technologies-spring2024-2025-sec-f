<?php
require_once '../start.php';
require_once '../Model/User.php';

$userModel = new User($conn);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'];

    if ($action === 'login') {
        $email = $_POST['email'];
        $password = $_POST['password'];

        $user = $userModel->login($email, $password);
        if ($user) {
            $_SESSION['user'] = $user['email'];
            header("Location: ../View/dashboard.php");
        } else {
            echo "Invalid credentials.";
        }

    } elseif ($action === 'signup') {
        $email = $_POST['email'];
        $password = $_POST['password'];

        if ($userModel->register($email, $password)) {
            echo "Registered successfully. <a href='../View/login.php'>Login here</a>";
        } else {
            echo "Registration failed. Try another email.";
        }
    }
}
?>
