<?php
file_put_contents("debug_log.txt", print_r($_POST, true));

require_once '../model/userModel.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
    $email = $_POST['email'];

    if (emailExists($email)) {
        echo "❌ Email already exists!";
    } else {
        echo "✅ Email is available.";
    }
} else {
    echo "Invalid request!";
}
?>
