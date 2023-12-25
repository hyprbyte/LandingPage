<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php'; // Path to autoload.php of PHPMailer



// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // PHPMailer configuration
    $mail = new PHPMailer(true);
    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Your SMTP host
        $mail->SMTPAuth = true;
        $mail->Username = 'surya.rawcleaners@gmail.com'; // SMTP username
        $mail->Password = 'mtru meps pqjn uhhm'; // SMTP password
        // $mail->SMTPSecure = 'tls';
        $mail->Port = 587; // Port number

        // Sender and recipient settings
        $mail->setFrom($email, $name);
        $mail->addAddress('vasanth2640@gmail.com'); // Receiver email

        // Content
        $mail->isHTML(true);
        $mail->Subject = 'New Contact Form Submission';
        $mail->Body = "Name: $name<br>Email: $email<br>Message: $message";

        // Send email
        if ($mail->send()) {
            // Mail sent successfully, redirect or display a success message
            header('Location: index.html'); // Redirect to your landing page
            exit();
        } else {
            echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
        }
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
}
?>
