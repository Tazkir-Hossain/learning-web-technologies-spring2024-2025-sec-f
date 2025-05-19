<?php
function loginUser($email, $password) {
  $con = new mysqli("localhost", "root", "", "recipe_management");// host, Username, password, DB name

  if ($con->connect_error) {
    die("Connection failed: " . $con->connect_error);
  }
  else{
    echo `Successfull`;
  }
  
  $query = "SELECT * FROM signup WHERE email = '$email' AND password = '$password'";
  $result = $con->query($query);

  // $stmt = $con->prepare("SELECT * FROM signup WHERE email = ? AND password = ?");
  // $stmt->bind_param("ss", $email, $password); // call bind_param and $email,$password are actual value
  // $stmt->execute();
  // $result = $stmt->get_result();

  if ($result->num_rows === 1) {
    return $result->fetch_assoc(); // Return user info
  }

  return false;
}
