document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("signupForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let name = document.getElementById("name").value.trim();
      let email = document.getElementById("email").value.trim();
      let password = document.getElementById("pass").value;
      let confirmPassword = document.getElementById("conpass").value;
      let errorMsg = "";

      // Client-side validation
      if (name === "") errorMsg += "Full Name is required.\n";
      if (email === "") errorMsg += "Email is required.\n";
      else if (!/^\S+@\S+\.\S+$/.test(email))
        errorMsg += "Email format is invalid.\n";
      if (password === "") errorMsg += "Password is required.\n";
      else if (password.length < 6)
        errorMsg += "Password must be at least 6 characters.\n";
      if (confirmPassword !== password) errorMsg += "Passwords do not match.\n";

      if (errorMsg !== "") {
        alert(errorMsg);
        return;
      }

      // Prepare JSON data
      let userData = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirmPassword,
      };

      let xhttp = new XMLHttpRequest();
      xhttp.open(
        "POST",
        "http://localhost/learning-web-technologies-spring2024-2025-sec-f/Recipe_Management/controller/signUpController.php",
        true
      );
      xhttp.setRequestHeader("Content-Type", "application/json");
      console.log("Sending JSON:", JSON.stringify(userData));
      xhttp.send(JSON.stringify(userData));

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4) {
          if (this.status === 200) {
            try {
              let response = JSON.parse(this.responseText);
              if (response.success) {
                alert("Registration successful!");
                window.location.href = "login.php";
              } else {
                alert(response.message);
              }
            } catch (e) {
              alert("Invalid server response");
            }
          } else {
            alert("Request failed with status: " + this.status);
          }
        }
      };
    });
});
