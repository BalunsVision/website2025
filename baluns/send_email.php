<?php

// Get inputs from POST
$address   = $_POST['address'];
$location  = $_POST['location'];
$mapsLink  = $_POST['mapsLink'];
$clickType = $_POST['clickType']; // Get the slide title

// Prepare mail
$to = "amutha@balunstech.com, sales@balunstech.com";
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

$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
$headers .= "From: <sales@balunstech.com>" . "\r\n";

$mail = mail($to, $subject, $message, $headers);

if ($mail) {
    echo "Mail sent successfully";
} else {
    echo "Mail sending failed";
}
