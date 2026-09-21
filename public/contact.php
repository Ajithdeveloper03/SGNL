<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["error" => "Method not allowed"]);
    exit();
}

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\SMTP;

require 'phpmailer/Exception.php';
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';

// Get JSON POST body
$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput, true);

// Extract variables safely
$name = htmlspecialchars($data['name'] ?? 'Not provided');
$email = filter_var($data['email'] ?? '', FILTER_SANITIZE_EMAIL);
$phone = htmlspecialchars($data['phone'] ?? '');
$primaryMobile = htmlspecialchars($data['primaryMobile'] ?? '');
$altPhone = htmlspecialchars($data['altPhone'] ?? 'Not provided');
$service = htmlspecialchars($data['service'] ?? 'Not provided');
$district = htmlspecialchars($data['district'] ?? 'Not provided');
$message = htmlspecialchars($data['message'] ?? 'No message provided.');
$source = htmlspecialchars($data['source'] ?? 'Contact Form');

$contactNumber = !empty($primaryMobile) ? $primaryMobile : (!empty($phone) ? $phone : 'Not provided');

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    
    // IMPORTANT: SMTP Credentials
    require_once 'config.php';
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port       = 465;

    // Recipients
    $mail->setFrom('inymartlabs@gmail.com', "SGNL Website");
    if (!empty($email) && filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $mail->addReplyTo($email, $name);
    }
    $mail->addAddress('saravananbsccs2024@gmail.com');

    // Content
    $mail->isHTML(true);
    $mail->Subject = "New Lead from SGNL Website ($source)";
    
    $htmlContent = '
    <html>
    <head>
      <style>
        body { font-family: Arial, sans-serif; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 8px; }
        h2 { color: #0369a1; border-bottom: 2px solid #e0f2fe; padding-bottom: 10px; }
        table { width: 100%; border-collapse: collapse; margin-top: 20px; }
        td { padding: 10px; border-bottom: 1px solid #f1f5f9; }
        .label { font-weight: bold; color: #334155; width: 35%; }
        .msg-box { margin-top: 25px; padding: 15px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #0ea5e9; }
      </style>
    </head>
    <body>
      <div class="container">
        <h2>New Contact Request - SGNL Website</h2>
        <p>You have received a new lead from the <strong>' . $source . '</strong>.</p>
        
        <table>
          <tr><td class="label">Source Form</td><td style="color: #0284c7; font-weight: bold;">' . $source . '</td></tr>
          <tr><td class="label">Name</td><td>' . $name . '</td></tr>
          <tr><td class="label">Email</td><td><a href="mailto:' . $email . '">' . $email . '</a></td></tr>
          <tr><td class="label">Mobile Number</td><td>' . $contactNumber . '</td></tr>
          <tr><td class="label">Alternate Number</td><td>' . $altPhone . '</td></tr>
          <tr><td class="label">Service Interest</td><td>' . $service . '</td></tr>
          <tr><td class="label">District</td><td>' . $district . '</td></tr>
        </table>
        
        <div class="msg-box">
          <h4>Message:</h4>
          <p>' . nl2br($message) . '</p>
        </div>
      </div>
    </body>
    </html>
    ';
    
    $mail->Body = $htmlContent;

    $mail->send();
    http_response_code(200);
    echo json_encode(["message" => "Email sent successfully"]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["error" => "Message could not be sent. Mailer Error: {$mail->ErrorInfo}"]);
}
?>
