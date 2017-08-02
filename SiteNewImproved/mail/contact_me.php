<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$street = strip_tags(htmlspecialchars($_POST['street']));
$city = strip_tags(htmlspecialchars($_POST['city']));
$zip = strip_tags(htmlspecialchars($_POST['zip']));
$startdate = strip_tags(htmlspecialchars($_POST['startdate']));
$enddate = strip_tags(htmlspecialchars($_POST['enddate']));
$servicesrequested = strip_tags(htmlspecialchars($_POST['servicesrequested']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'mikemallit@msn.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contact form confirmation";
$email_body = "Name: $name\n\nEmail: $email_address\n\nPhone: $phone\n\nMessage:\n$message";
$headers = "From: nadia@kittykattime.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
