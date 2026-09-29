<?php
$api_url = "http://localhost:3000/api/students";

echo "<h2>PHP cURL Data Exchange</h2>";

// ---------------------------------------------------------
// 1. POST Request: Send Data to Node.js API
// ---------------------------------------------------------
$new_student = array(
    'name' => 'API Student',
    'email' => 'api_' . time() . '@student.com', // Unique email
    'password' => 'securepass123'
);

$ch = curl_init($api_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($new_student));

$post_response = curl_exec($ch);
curl_close($ch);

echo "<h3>POST Request Response:</h3>";
echo "<pre>" . htmlspecialchars($post_response) . "</pre>";


// ---------------------------------------------------------
// 2. GET Request: Retrieve Data from Node.js API
// ---------------------------------------------------------
$ch_get = curl_init($api_url);
curl_setopt($ch_get, CURLOPT_RETURNTRANSFER, true);

$get_response = curl_exec($ch_get);
curl_close($ch_get);

echo "<h3>GET Request Response (All Students):</h3>";

// Decode and display nicely
$students = json_decode($get_response, true);

if ($students) {
    echo "<table border='1' cellpadding='5'>";
    echo "<tr><th>ID</th><th>Name</th><th>Email</th></tr>";
    foreach ($students as $student) {
        echo "<tr>";
        echo "<td>" . $student['_id'] . "</td>";
        echo "<td>" . $student['name'] . "</td>";
        echo "<td>" . $student['email'] . "</td>";
        echo "</tr>";
    }
    echo "</table>";
} else {
    echo "No students found or failed to parse data.";
}
?>