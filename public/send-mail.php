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

// $config = require __DIR__ . '/config.php';

$config = require __DIR__ . '/../config.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $parentName = trim($_POST["parentName"] ?? "");
    $email      = trim($_POST["email"] ?? "");
    $phone      = trim($_POST["phone"] ?? "");
    $childName  = trim($_POST["childName"] ?? "");
    $childAge   = trim($_POST["childAge"] ?? "");
    $program    = trim($_POST["program"] ?? "");
    $message    = trim($_POST["message"] ?? "");

    if ($parentName === "" || $email === "" || $phone === "" || $program === "") {
        echo "error";
        exit;
    }

    $mail = new PHPMailer(true);

    try {

        $mail->isSMTP();

        $mail->Host = $config['smtp_host'];
        $mail->SMTPAuth = true;
        $mail->Username = $config['smtp_user'];
        $mail->Password = $config['smtp_pass'];
        $mail->SMTPSecure = $config['smtp_secure'];
        $mail->Port = $config['smtp_port'];

        // $mail->setFrom(
        //     'info@hlskids.co.in',
        //     'School Admission Enquiry'
        // );

        // $mail->addAddress('info@hlskids.co.in');
        
        $mail->setFrom(
        $config['smtp_user'],
        'School Admission Enquiry'
    );

    // Receiver
    $mail->addAddress($config['smtp_user']);

        $mail->addReplyTo($email, $parentName);

        $mail->isHTML(true);

        $mail->Subject = "New Admission Enquiry - " . $parentName;

        $mail->Body = "
            <h2>New Admission Enquiry</h2>

            <p>
                <strong>Parent's Name:</strong>
                " . htmlspecialchars($parentName) . "
            </p>

            <p>
                <strong>Email:</strong>
                " . htmlspecialchars($email) . "
            </p>

            <p>
                <strong>Phone:</strong>
                " . htmlspecialchars($phone) . "
            </p>

            <p>
                <strong>Child's Name:</strong>
                " . htmlspecialchars($childName) . "
            </p>

            <p>
                <strong>Child's Age:</strong>
                " . htmlspecialchars($childAge) . "
            </p>

            <p>
                <strong>Interested Program:</strong>
                " . htmlspecialchars($program) . "
            </p>

            <p>
                <strong>Message:</strong><br>
                " . nl2br(htmlspecialchars($message)) . "
            </p>
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
}

echo "error";
