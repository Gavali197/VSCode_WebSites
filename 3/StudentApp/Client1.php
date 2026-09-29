<?php 
$url = "";
$result = null;

if($_SERVER['REQUEST_METHOD'] == "POST"){
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_HEADER => "Content-Type : application/json", 
        CURLOPT_POSTFIELDS => json_encode($_POST),
        CURLOPT_RETURNTRANSFER => true 
    ]);
    $result = json_decode(curl_exec($ch), true);
    curl_close($ch);
}

$data = json_decode(file_get_contents($url));
$product  = $data['data'] ?? [];

?>
