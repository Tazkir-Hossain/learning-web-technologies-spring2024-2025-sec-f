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

if (emailExists($email)) {
    die("Email already registered.");
}


function insertUser($name, $email, $password, $confirm_password) {
    $con = connectDB();
    $sql = "INSERT INTO signup (name, email, password, confirm_password, date)
            VALUES ('$name', '$email', '$password', '$confirm_password', current_timestamp())";
    $result = $con->query($sql);
    $con->close();
    return $result;
}


// this function to check email availability
// function emailExists($email) {
//     $con = connectDB();
//     $sql = "SELECT * FROM signup WHERE email = '$email'";
//     $result = mysqli_query($con, $sql);
//     $exists = mysqli_num_rows($result) > 0;
//     mysqli_close($con);
//     return $exists;
// }


function emailExists($email) {
    $con = connectDB();
    $email = mysqli_real_escape_string($con, $email);
    $sql = "SELECT * FROM signup WHERE email = '$email'";
    $result = mysqli_query($con, $sql);
    $exists = mysqli_num_rows($result) > 0;
    mysqli_close($con);
    return $exists;
}

?>