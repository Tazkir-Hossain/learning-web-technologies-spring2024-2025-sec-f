<?php
require_once '../start.php';
if (!isset($_SESSION['user'])) {
    header("Location: login.php");
    exit();
}
?>

<!DOCTYPE html>
<html>
<head><title>Dashboard</title></head>
<body>
<h1>Welcome, <?= htmlspecialchars($_SESSION['user']) ?></h1>
<p>This is your dashboard.</p>
<a href="../logout.php">Logout</a>
</body>
</html>
