<?php 
// Запретить вызов не через $POST
if (!$_POST) exit('No direct script access allowed');

$name = trim(strip_tags($_POST['name']));
$company = trim(strip_tags($_POST['company']));
$city = trim(strip_tags($_POST['city']));
$mail = trim(strip_tags($_POST['mail']));
$phone = trim(strip_tags($_POST['tel']));


$to = 'example@mail.ru'; // адрес получателя
$subject = 'Заявка с сайта'; // тема письма
 
// формируем тело сообщения
$message = 'Имя: ' . $name . "\r\n" . 'Компания: ' . $company .  "\r\n" . 
'Город: ' . $city . "\r\n" . 'E-mail: ' . $mail .  "\r\n" . 'Телефон: ' . $phone .  "\r\n" ; 
 
// формируем headers для письма
$headers = 'Заявка с сайта' . "\r\n"; // от кого
 
// кодируем заголовок в UTF-8
$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
$subject = preg_replace("/(\t)/", " ", $subject);
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
 
// отправка
@mail($to, $subject, $message, $headers);

 // ответ от сервера
echo 'Спасибо, ваша заявка отправлена!';
?>