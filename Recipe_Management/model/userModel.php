<?php
function connectDB() {
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "recipe_management";

    $con = mysqli_connect($server, $username, $password, $database);
    if (!$con) {
        die("Connection failed: " . mysqli_connect_error());
    }
    return $con;
}


function insertUser($name, $email, $password, $confirm_password) {
    $con = connectDB();
    $sql = "INSERT INTO signup (name, email, password, confirm_password, date)
            VALUES ('$name', '$email', '$password', '$confirm_password', current_timestamp())";
    $result = $con->query($sql);
    $con->close();
    return $result;
}


function emailExists($email) {
    $con = connectDB();
    $stmt = $con->prepare("SELECT email FROM signup WHERE email = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();
    $exists = $stmt->num_rows > 0;
    $stmt->close();
    $con->close();
    return $exists;
}


?>