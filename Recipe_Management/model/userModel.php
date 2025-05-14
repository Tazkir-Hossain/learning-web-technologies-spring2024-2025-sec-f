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
?>
