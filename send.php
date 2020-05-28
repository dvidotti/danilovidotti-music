<?php

$to = 'shows@danilovidotti.com.br';
$subject = "Contato do Site";
$txt = $_POST['message'];
$headers = 'From: ' . $_POST['name'] . ' <' . $_POST['email'] . '>' . "\r\n" .
    'Reply-To: ' . $_POST['email'] . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

mail($to,$subject,$txt,$headers);