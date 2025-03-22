<?php

    $to = "zoejuliehobson@gmail.com";
    $from = $_REQUEST['email'];
    $name = $_REQUEST['name'];
    $message = $_REQUEST['message'];
    $headers = "From: ".$from."\r\n";
    $headers .='X-Mailer: PHP/' . phpversion();
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
    $subject = "[Ame de Voyageur] You have a message sent from your website";

    ini_set('SMTP', 'smtp.1and1.com');
    ini_set('smtp_port', 587);
    ini_set('sendmail_from', $from);

    $body = "Here is what was sent :\n\n";
    $body .= $message."\n";
//    $send = mail($to, $subject, $body, $headers);
    $send = true;
    return $send;

?>
