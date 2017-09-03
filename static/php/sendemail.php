<?php

/* Prepares an email from the `Contact Us` page and sends the email to
 * the CPSGrader developers. Code inspired by
 * http://trevordavis.net/images/content/2008/01/sendemail.phps,
 * linked to from http://trevordavis.net/blog/ajax-forms-with-jquery/. */

$to = "cpsgrader-dev@lists.eecs.berkeley.edu";
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$emailaddress = $_POST["emailaddress"];
$subject = $_POST["subject"];
$message = $_POST["message"];
$headers = "From: " . $firstname . " " . $lastname .
    " <" . $emailaddress . ">" . "\r\n" .
    "Reply-To: " . $firstname . " " . $lastname .
    " <" . $emailaddress . ">" . "\r\n" .
    "X-Mailer: PHP/" . phpversion();

mail($to, $subject, $message, $headers);

?>
