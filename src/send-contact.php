<?php

/* =====================================
   HEADERS
===================================== */

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

/* =====================================
   HANDLE OPTIONS REQUEST
===================================== */

if ($_SERVER["REQUEST_METHOD"] == "GET") {

    echo json_encode([
        "status" => true,
        "message" => "PHP API Working Properly"
    ]);

    exit;
}

/* =====================================
   ONLY POST ALLOWED
===================================== */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {

    echo json_encode([
        "status" => false,
        "message" => "Invalid Request Method"
    ]);

    exit;
}

/* =====================================
   GET RAW INPUT
===================================== */

$rawData = file_get_contents("php://input");

/* =====================================
   DECODE JSON
===================================== */

$data = json_decode($rawData, true);

/* =====================================
   CHECK DATA
===================================== */

if (!$data || empty($data)) {

    echo json_encode([
        "status" => false,
        "message" => "No Data Received",
        "raw" => $rawData
    ]);

    exit;
}

/* =====================================
   SANITIZE FUNCTION
===================================== */

function clean($value)
{
    return htmlspecialchars(strip_tags(trim($value)));
}

/* =====================================
   EMAIL VALIDATION
===================================== */

function validEmail($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}

/* =====================================
   MOBILE VALIDATION
===================================== */

function validMobile($mobile)
{
    return preg_match('/^[6-9]\d{9}$/', $mobile);
}

/* =====================================
   POPUP FORM
===================================== */

if (isset($data['fullName'])) {

    $name   = clean($data['fullName'] ?? '');
    $email  = clean($data['email'] ?? '');
    $mobile = clean($data['mobile'] ?? '');
    $city   = clean($data['city'] ?? '');

    /* VALIDATION */

    if (
        empty($name) ||
        empty($email) ||
        empty($mobile) ||
        empty($city)
    ) {

        echo json_encode([
            "status" => false,
            "message" => "All fields are required"
        ]);

        exit;
    }

    if (!validEmail($email)) {

        echo json_encode([
            "status" => false,
            "message" => "Invalid email address"
        ]);

        exit;
    }

    if (!validMobile($mobile)) {

        echo json_encode([
            "status" => false,
            "message" => "Invalid mobile number"
        ]);

        exit;
    }

    $subject = "New Test Drive Booking";

    $message = "
New Test Drive Booking

Full Name : $name
Email     : $email
Mobile    : $mobile
City      : $city
";

} else {

    /* =====================================
       CONTACT FORM
    ===================================== */

    $name    = clean($data['name'] ?? '');
    $email   = clean($data['email'] ?? '');
    $phone   = clean($data['phone'] ?? '');
    $subject = clean($data['subject'] ?? '');
    $msg     = clean($data['message'] ?? '');

    /* VALIDATION */

    if (
        empty($name) ||
        empty($email) ||
        empty($phone) ||
        empty($subject) ||
        empty($msg)
    ) {

        echo json_encode([
            "status" => false,
            "message" => "All fields are required"
        ]);

        exit;
    }

    if (!validEmail($email)) {

        echo json_encode([
            "status" => false,
            "message" => "Invalid email address"
        ]);

        exit;
    }

    if (!validMobile($phone)) {

        echo json_encode([
            "status" => false,
            "message" => "Invalid phone number"
        ]);

        exit;
    }

    $message = "
New Contact Inquiry

Name    : $name
Email   : $email
Phone   : $phone
Subject : $subject

Message :
$msg
";
}

/* =====================================
   EMAIL CONFIG
===================================== */

$to = "rishabdutt4@gmail.com";

/* IMPORTANT:
   CREATE THIS EMAIL INSIDE CPANEL
   Example:
   noreply@yourdomain.com
*/

$fromEmail = "eternityindia.com";

$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";
$headers .= "From: Website Inquiry <$fromEmail>\r\n";
$headers .= "Reply-To: $email\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

/* =====================================
   SEND MAIL
===================================== */

$mail = mail($to, $subject, $message, $headers);

/* =====================================
   RESPONSE
===================================== */

if ($mail) {

    echo json_encode([
        "status" => true,
        "message" => "Form submitted successfully"
    ]);

} else {

    echo json_encode([
        "status" => false,
        "message" => "Mail function failed"
    ]);
}

?>