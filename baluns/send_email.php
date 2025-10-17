<?php

// Get inputs safely
$name      = isset($_POST['name']) ? htmlspecialchars($_POST['name']) : '';
$email     = isset($_POST['email']) ? htmlspecialchars($_POST['email']) : '';
$phone     = isset($_POST['phone']) ? htmlspecialchars($_POST['phone']) : '';
$query     = isset($_POST['query']) ? htmlspecialchars($_POST['query']) : '';
$clickType = isset($_POST['clickType']) ? htmlspecialchars($_POST['clickType']) : '';

// Recipient emails
$to = "amutha@balunstech.com, sales@balunstech.com";

// Subject
$subject = "New Contact Query from Website";

// Build HTML email message
$message = '
<html>
  <body style="font-family: Arial, sans-serif; line-height: 1.6;">
    <h2>New Contact Form Submission</h2>
    <p>
      <b>Name:</b> ' . $name . '<br><br>
      <b>Email:</b> ' . $email . '<br><br>
      <b>Phone:</b> ' . $phone . '<br><br>
      <b>Query:</b> ' . nl2br($query) . '<br><br>
      <b>Clicked Slide Title:</b> ' . $clickType . '
    </p>
  </body>
</html>';

// Email headers
$headers  = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: BalunsTech <sales@balunstech.com>" . "\r\n";
$headers .= "Reply-To: " . $email . "\r\n"; // reply to user

// Send mail
if (mail($to, $subject, $message, $headers)) {
    echo "Mail sent successfully";
} else {
    echo "Mail sending failed";
}
