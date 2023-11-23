<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $about = $_POST['about'];

    // Set up email parameters
    $to = 'vasanth.hyprbyte@gmail.com';  // Replace with your Gmail address
    $subject = 'New Form Submission';
    $message = "Name: $name\nEmail: $email\nAbout: $about";

    // Send email
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    mail($to, $subject, $message, $headers);

    // Optionally, you can redirect the user to a thank you page
    header('Location: thank-you.html');
    exit();
}
?>