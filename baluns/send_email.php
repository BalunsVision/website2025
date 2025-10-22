<?php
// Sanitize POST inputs
$address   = htmlspecialchars(strip_tags($_POST['address']));
$location  = htmlspecialchars(strip_tags($_POST['location']));
$mapsLink  = filter_var($_POST['mapsLink'], FILTER_SANITIZE_URL);
$clickType = htmlspecialchars(strip_tags($_POST['clickType']));

// Prepare mail
$to = "amutha@balunstech.com,sales@balunstech.com";
$subject = "New Location Submission";

$message = '<html><body>';
$message .= '<h2>User Location Details:</h2>';
$message .= '<p>
                <b>Address:</b> ' . $address . '<br><br>
                <b>Location:</b> ' . $location . '<br><br>
                <b>Google Maps Link:</b> <a href="' . $mapsLink . '">' . $mapsLink . '</a><br><br>
                <b>Clicked Slide Title:</b> ' . $clickType . '<br>
             </p>';
$message .= '</body></html>';

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type:text/html;charset=UTF-8\r\n";
$headers .= "From: sales@balunstech.com\r\n";
$headers .= "Reply-To: sales@balunstech.com\r\n";
$headers .= "Return-Path: sales@balunstech.com\r\n";

$mail = mail($to, $subject, $message, $headers);

if ($mail) {
    echo "Mail sent successfully";
} else {
    echo "Mail sending failed: " . error_get_last()['message'];
}
?>
