<?php
$name = $_POST['name'];
$surname = $_POST['surname'];
$email = $_POST['email'];
$message = "From: $name \n Message: $message";
$recipient = "jacobortiz90@gmail.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $message, $mailheader) or die("Error!");
header("Location: contact.ejs")
echo "Thank You!";
?>