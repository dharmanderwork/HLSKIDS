<?php
ob_start();

header('Content-Type: text/plain; charset=utf-8');

error_reporting(0);
ini_set('display_errors', 0);

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$config = require __DIR__ . '/../config.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo "error";
    exit;
}

$fullName    = trim($_POST["fullName"] ?? "");
$email       = trim($_POST["email"] ?? "");
$phone       = trim($_POST["phone"] ?? "");
$city        = trim($_POST["city"] ?? "");
$state       = trim($_POST["state"] ?? "");
$investment  = trim($_POST["investment"] ?? "");
$property    = trim($_POST["property"] ?? "");
$experience  = trim($_POST["experience"] ?? "");
$message     = trim($_POST["message"] ?? "");

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host       = $config['smtp_host'];
    $mail->SMTPAuth   = true;
    $mail->Username   = $config['smtp_user'];
    $mail->Password   = $config['smtp_pass'];
    $mail->SMTPSecure = $config['smtp_secure'];
    $mail->Port       = $config['smtp_port'];

    $mail->setFrom(
        $config['smtp_user'],
        'Franchise Enquiry'
    );

    $mail->addAddress($config['smtp_user']);

    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $fullName);
    }

    $mail->isHTML(true);

    $mail->Subject = "New Franchise Enquiry - " . $fullName;

    $mail->Body = "
        <h2>New Franchise Enquiry</h2>

        <p><strong>Full Name:</strong> " . htmlspecialchars($fullName) . "</p>
        <p><strong>Email:</strong> " . htmlspecialchars($email) . "</p>
        <p><strong>Phone:</strong> " . htmlspecialchars($phone) . "</p>
        <p><strong>City:</strong> " . htmlspecialchars($city) . "</p>
        <p><strong>State:</strong> " . htmlspecialchars($state) . "</p>
        <p><strong>Investment Capacity:</strong> " . htmlspecialchars($investment) . "</p>
        <p><strong>Property Status:</strong> " . htmlspecialchars($property) . "</p>
        <p><strong>Business Experience:</strong> " . htmlspecialchars($experience) . "</p>

        <h3>Message</h3>
        <p>" . nl2br(htmlspecialchars($message)) . "</p>
    ";

    $mail->send();

    ob_end_clean();
    echo "success";
    exit;

} catch (Exception $e) {

    ob_end_clean();
    echo "error";
    exit;
}