<?php 
// Запретить вызов не через $POST
if (!$_POST) exit('No direct script access allowed');

$phone = trim(strip_tags($_POST['phone']));
$name = trim(strip_tags($_POST['name']));

$to = 'example@mail.ru'; // адрес получателя
$subject = 'Заявка с сайта'; // тема письма
 
// формируем тело сообщения
$message = 'Имя: ' . $name . "\r\n" . 'Телефон: ' . $phone; 
 
// формируем headers для письма
$headers = 'Заявка с сайта' . "\r\n";
 
// кодируем заголовок в UTF-8
$subject = preg_replace("/(\r\n)|(\r)|(\n)/", "", $subject);
$subject = preg_replace("/(\t)/", " ", $subject);
$subject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
 
// отправка
@mail($to, $subject, $message, $headers);

 // ответ от сервера
echo 'Спасибо, ваша заявка отправлена!';
?>