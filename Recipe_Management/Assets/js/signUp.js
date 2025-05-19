document.querySelector("form").addEventListener("submit", function (e) {
  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("pass").value;
  let confirmPassword = document.getElementById("conpass").value;
  let errorMsg = "";

  if (name === "") {
    errorMsg += "Full Name is required.\n";
  }
  if (email === "") errorMsg += "Email is required.\n";
  else if (!/^\S+@\S+\.\S+$/.test(email))
    errorMsg += "Email format is invalid.\n";
  if (password === "") errorMsg += "Password is required.\n";
  else if (password.length < 6)
    errorMsg += "Password must be at least 6 characters.\n";
  if (confirmPassword !== password) errorMsg += "Passwords do not match.\n";

  if (errorMsg !== "") {
    e.preventDefault(); // Stop form submission
    alert(errorMsg);
  }
});
