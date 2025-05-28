

<?php 

// require_once '../model/userModel.php'; // 
// // signUpController.php
// header("Content-Type: application/json");

// $data = json_decode(file_get_contents("php://input"), true);


// $name = $data['name'] ?? '';
// $email = $data['email'] ?? '';
// $password = $data['password'] ?? '';
// $confirm_password = $data['confirm_password'] ?? '';

// // Basic validation
// if (empty($name) || empty($email) || empty($password)) {
//     echo json_encode(["success" => false, "message" => "Required fields are missing."]);
//     exit;
// }

// if ($password !== $confirm_password) {
//     echo json_encode(["success" => false, "message" => "Passwords do not match."]);
//     exit;
// }

// // if (emailExists($email)) {
// //     echo json_encode(["success" => false, "message" => "Email already registered."]);
// //     exit;
// // }

// if (insertUser($name, $email, $password, $confirm_password)) {
//     echo json_encode(["success" => true]);
// } else {
//     echo json_encode(["success" => false, "message" => "Database error."]);
// }

// // TODO: Hash password and insert into database
// // $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
// // INSERT into DB...

// // echo json_encode(["success" => true]);


require_once '../model/userModel.php';

header("Content-Type: application/json");

// Get JSON input
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validate JSON decoding
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid JSON data received'
    ]);
    exit;
}

// Extract data with null coalescing
$name = $data['name'] ?? null;
$email = $data['email'] ?? null;
$password = $data['password'] ?? null;
$confirm_password = $data['confirm_password'] ?? null;

// Validate required fields
if (empty($name) || empty($email) || empty($password) || empty($confirm_password)) {
    echo json_encode([
        'success' => false,
        'message' => 'All fields are required'
    ]);
    exit;
}

// Validate email format
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode([
        'success' => false,
        'message' => 'Invalid email format'
    ]);
    exit;
}

// Validate password length
if (strlen($password) < 8) {
    echo json_encode([
        'success' => false,
        'message' => 'Password must be at least 6 characters'
    ]);
    exit;
}

// Validate password match
if ($password !== $confirm_password) {
    echo json_encode([
        'success' => false,
        'message' => 'Passwords do not match'
    ]);
    exit;
}



// Insert user into database
if (insertUser($name, $email, $password, $confirm_password)) {
    echo json_encode([
        'success' => true,
        'message' => 'Registration successful'
    ]);
} else {
    echo json_encode([
        'success' => false,
        'message' => 'Registration failed. Please try again.'
    ]);
}

?>
