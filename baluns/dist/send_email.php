<?php

$name      = isset($_POST['name']) ? strip_tags($_POST['name']) : '';
$email     = isset($_POST['email']) ? filter_var($_POST['email'], FILTER_SANITIZE_EMAIL) : '';
$phone     = isset($_POST['phone']) ? strip_tags($_POST['phone']) : '';
$query     = isset($_POST['query']) ? strip_tags($_POST['query']) : '';
$clickType = isset($_POST['clickType']) ? strip_tags($_POST['clickType']) : '';

$to = "amutha@balunstech.com, sales@balunstech.com";
$subject = "New Contact Query from Website";

$message = "
New Contact Form Submission

Name: $name
Email: $email
Phone: $phone
Query: $query
Clicked Slide Title: $clickType
";

$headers  = "From: BalunsTech <sales@balunstech.com>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully";
} else {
    echo "Mail sending failed";
}
?>
