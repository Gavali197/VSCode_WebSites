<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form method="post">

        name
        <input type="text" name="name">
        email
        <input type="text" name="email">
        password
        <input type="text" name="password">
        <button type="submit">add user</button>
    </form>
</body>

</html>

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = [
        'name' =>  $_POST['name'],
        'email' => $_POST['email'],
        'password' => $_POST['password']
    ];

    $ch = curl_init('http://localhost:3030/api/register');

    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data));
    curl_setopt($ch, CURLOPT_HTTPHEADER, ['Content-Type: application/json']);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

    $res = curl_exec($ch);
    curl_close($ch);

    echo $res;
}
?>