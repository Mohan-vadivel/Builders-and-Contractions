<?php
$success = 'failed';
//if($_REQUEST['submit']!='') {
    $to_email = 'vadivelmohan2@gmail.com';    
    $from_name = $_REQUEST['name'];
    $from_email = $_REQUEST['email'];
    $from_subject = $_REQUEST['subject'];
    $from_text = $_REQUEST['text'];
    // Always set content-type when sending HTML email
    $headers = "MIME-Version: 1.0" . "\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    
    // More headers
    $headers .= 'From: '.$from_name.' <'.$from_email.'>' . "\r\n";
    //$headers .= 'Cc: myboss@example.com' . "\r\n";    
    mail($to_email, $from_subject, $from_text, $headers);
    $success = 'success';
    //echo 'loosu';exit;
//}
echo $success;
?>