<?php
if (isset($_POST['contact_name'])) {$name = $_POST['contact_name'];}
if (isset($_POST['contact_email'])) {$email = $_POST['contact_email'];}
if (isset($_POST['contact_phone'])) {$phone = $_POST['contact_phone'];}
if (isset($_POST['commentsText'])) {$message = $_POST['commentsText'];}
 
 
$address = 'your@mail.ru';
$sub = "Обратная связь";
$mes = "Имя: $name \nЕмейл: $email \nНомер телефона: $phone \nСообщение: $message";
$verify = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8 \r\nFrom:$email");
if ($verify == 'true')
{
$json = array(); // пoдгoтoвим мaссив oтвeтa

}
else 
{
echo json_encode($json); 
		die();
}
?>