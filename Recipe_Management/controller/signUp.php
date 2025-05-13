<?php
if(isset($_POST['name']))
{
  $server = "localhost";
  $username = "root";
  $password ="";

  $con = mysqli_connect($server, $username, $password);

  if(!$con){
    die("connection to this database failed due to" . mysqli_connect_error());
  }
  //echo "Success connecting to the db";
  $name = $_POST['name'];
  $email = $_POST['email'];
  $password = $_POST['password'];
  $confirm_password = $_POST['confirm_password'];

  $sql = "INSERT INTO `recipe_management`.`signup` (`name`, `email`, `password`, `confirm_password`, `date`) VALUES
   ('$name', '$email', '$password', '$confirm_password', current_timestamp());";

   echo $sql;

   if($con->query($sql) == true){
    echo "Successfully inserted";
   }
   else{
    echo "ERROR: $sql <br> $con->error";
   }

   $con->close();

}
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Sign Up</title>
  <link rel="stylesheet" href="../Styles/signUp.css">
</head>
<body>
  <div class="form-container">
    <h2>Create Your Account</h2>
    <p>Thank you for choosing our Recipe Management System!</p>
    <form method="POST" action="signup.php">
      <input type="text" name="name" id="name" placeholder="Full Name">
      <input type="email" name="email" id="email" placeholder="Email Address">
      <input type="password" name="password" id="pass" placeholder="Password">
      <input type="password" name="confirm_password" id="conpass" placeholder="Confirm Password">
      <button type="submit">Sign Up</button>
    </form>

    <p>Already have an account? <a href="login.php">Login here</a></p>
  </div>
</body>
</html>
