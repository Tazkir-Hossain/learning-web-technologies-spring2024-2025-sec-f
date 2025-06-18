
<!-- // file_put_contents("debug_log.txt", print_r($_POST, true));

// require_once '../model/userModel.php';

// if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['email'])) {
//     $email = $_POST['email'];

//     if (emailExists($email)) {
//         echo "❌ Email already exists!";
//     } else {
//         echo "✅ Email is available.";
//     }
// } else {
//     echo "Invalid request!";
// } -->



<?php

// require_once '../model/userModel.php';
// // checkEmail.php
// header('Content-Type: application/json');

// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//     $email = $_POST['email'];

//     // TODO: Connect to your database
//     // $conn = new mysqli(...);

//     // Example check
//     $exists = false;

//     // Replace with actual DB query
//     // $query = "SELECT * FROM users WHERE email = ?";
//     // $stmt = $conn->prepare($query);
//     // $stmt->bind_param("s", $email);
//     // $stmt->execute();
//     // $result = $stmt->get_result();
//     // $exists = $result->num_rows > 0;

//     // Simulated response
//     if ($email === "test@example.com") {
//         $exists = true;
//     }

//     echo json_encode(["exists" => $exists]);
// }
// ?>
