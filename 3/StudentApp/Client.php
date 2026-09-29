<?php
$url = "http://localhost:3000/api/product";
$result = null;

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_POSTFIELDS => json_encode($_POST),
        CURLOPT_RETURNTRANSFER => true
    ]);

    $result = json_decode(curl_exec($ch), true);
    curl_close($ch);
}

$data = json_decode(file_get_contents($url), true);
$products = $data['data'] ?? [];
?>

<h2>Add Product</h2>

<form method="POST">
    <input name="product" placeholder="Product" required>
    <input type="number" name="price" placeholder="Price" required>
    <button type="submit">Add Product</button>
</form>

<p><?= htmlspecialchars($result['message'] ?? '') ?></p>

<h2>Product List</h2>

<table border="1" cellpadding="8">
    <tr><th>#</th><th>Product</th><th>Price</th></tr>

    <?php foreach ($products as $i => $p): ?>
    <tr>
        <td><?= $i + 1 ?></td>
        <td><?= htmlspecialchars($p['product'] ?? '') ?></td>
        <td><?= htmlspecialchars((string)($p['price'] ?? '')) ?></td>
    </tr>
    <?php endforeach; ?>
</table>