<?php

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  // header('Access-Control-Allow-Origin: *');
  header('Access-Control-Allow-Methods: POST, OPTIONS');
  header('Access-Control-Allow-Headers: Content-Type');
  header('Access-Control-Max-Age: 1728000');
  die();
}

// header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');


$postData = file_get_contents('php://input');
$data = json_decode($postData, true);


$botToken = "6046643327:AAFtB2e3g3H_Cc-_Mg962MCWgQD_MjoZgkg";

$website = "https://api.telegram.org/bot" . $botToken;
$chatId = -909373110;  //Receiver Chat Id
$params = [
  'chat_id' => $chatId,
  'text' => "Ім'я: {$data["name"]} \nТел: {$data["phone"]}",
];
$ch = curl_init($website . '/sendMessage');
curl_setopt($ch, CURLOPT_HEADER, false);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, ($params));
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
$result = curl_exec($ch);
curl_close($ch);
