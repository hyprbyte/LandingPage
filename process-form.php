


<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email parameters
    $to = 'surya.rawcleaners@gmail.com'; // Replace with your email address
    $headers = 'From: ' . $email . "\r\n" .
        'Reply-To: ' . $email . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    // Send email
    if (mail($to, 'Contact Form Submission', $message, $headers)) {
        echo 'Message has been sent successfully!';
    } else {
        echo 'Error sending the message. Please try again later.';
    }
} else {
    echo 'Invalid request method.';
}
?>
