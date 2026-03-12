<?php

$smtpHost = 'uk609.directrouter.com';
$smtpPort = 587;
$smtpUsername = 'enquiry@industrialfloorcontractors.co.uk';
$smtpPassword = 'IFC015302223564';
$smtpEncryption = 'tls';
$mailFrom = 'enquiry@industrialfloorcontractors.co.uk';
$mailTo = 'enquiry@industrialfloorcontractors.co.uk';
$thankYouUrl = '/thank-you/';
$debugMode = true;

header('Vary: Accept');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed.', 405, $thankYouUrl);
}

$botcheck = isset($_POST['botcheck']) ? trim((string) $_POST['botcheck']) : '';
if ($botcheck !== '') {
    respond(true, 'Submission received.', 200, $thankYouUrl);
}

$name = cleanLine(isset($_POST['name']) ? $_POST['name'] : '');
$email = isset($_POST['email']) ? filter_var(trim($_POST['email']), FILTER_VALIDATE_EMAIL) : false;
$phone = cleanLine(isset($_POST['phone']) ? $_POST['phone'] : '');
$company = cleanLine(isset($_POST['company']) ? $_POST['company'] : '');
$message = isset($_POST['message']) ? trim($_POST['message']) : '';
$submissionUrl = isset($_POST['submission_url']) ? trim($_POST['submission_url']) : '';

if ($name === '' || $email === false || $company === '' || $message === '') {
    respond(false, 'Please complete all required fields.', 422, $thankYouUrl);
}

$safeSubmissionUrl = $submissionUrl !== '' ? filter_var($submissionUrl, FILTER_SANITIZE_URL) : 'Not provided';
$subject = 'Website enquiry - Industrial Floor Contractors';
$plainTextBody = buildPlainTextBody($name, $email, $phone, $company, $message, $safeSubmissionUrl);

$headers = array(
    'Date: ' . date(DATE_RFC2822),
    'From: Industrial Floor Contractors <' . $mailFrom . '>',
    'To: <' . $mailTo . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Subject: ' . encodeHeader($subject),
    'Message-ID: <' . buildMessageId() . '@' . messageIdDomain($mailFrom) . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
);

$rawMessage = implode("\r\n", $headers) . "\r\n\r\n" . normalizeMessageBody($plainTextBody);

try {
    sendViaSmtp(
        $smtpHost,
        (int) $smtpPort,
        $smtpUsername,
        $smtpPassword,
        $smtpEncryption,
        $mailFrom,
        $mailTo,
        $rawMessage
    );
} catch (Exception $exception) {
    error_log('Contact form SMTP failure: ' . $exception->getMessage());
    $debugMessage = $debugMode ? 'SMTP error: ' . $exception->getMessage() : 'Submission failed. Please try again.';
    respond(false, $debugMessage, 500, $thankYouUrl);
}

respond(true, 'Message sent successfully.', 200, $thankYouUrl);

function sendViaSmtp($host, $port, $username, $password, $encryption, $from, $to, $message)
{
    $timeout = 20;
    $transport = strtolower($encryption) === 'ssl' ? 'ssl://' . $host : $host;
    $context = stream_context_create(array(
        'ssl' => array(
            'verify_peer' => false,
            'verify_peer_name' => false,
            'allow_self_signed' => true,
        ),
    ));
    $socket = @stream_socket_client(
        $transport . ':' . $port,
        $errno,
        $errstr,
        $timeout,
        STREAM_CLIENT_CONNECT,
        $context
    );

    if (!is_resource($socket)) {
        throw new Exception('Unable to connect to SMTP server: ' . $errstr);
    }

    stream_set_timeout($socket, $timeout);

    expectSmtpCode($socket, array(220));
    smtpCommand($socket, 'EHLO ' . getHostnameSafe(), array(250));

    if (strtolower($encryption) === 'tls') {
        smtpCommand($socket, 'STARTTLS', array(220));

        if (!enableTls($socket)) {
            throw new Exception('Unable to start TLS encryption.');
        }

        smtpCommand($socket, 'EHLO ' . getHostnameSafe(), array(250));
    }

    smtpCommand($socket, 'AUTH LOGIN', array(334));
    smtpCommand($socket, base64_encode($username), array(334));
    smtpCommand($socket, base64_encode($password), array(235));
    smtpCommand($socket, 'MAIL FROM:<' . $from . '>', array(250));
    smtpCommand($socket, 'RCPT TO:<' . $to . '>', array(250, 251));
    smtpCommand($socket, 'DATA', array(354));
    smtpCommand($socket, dotStuff($message) . "\r\n.", array(250));
    smtpCommand($socket, 'QUIT', array(221));

    fclose($socket);
}

function enableTls($socket)
{
    if (defined('STREAM_CRYPTO_METHOD_TLS_CLIENT')) {
        return stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
    }

    if (defined('STREAM_CRYPTO_METHOD_SSLv23_CLIENT')) {
        return stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_SSLv23_CLIENT);
    }

    return false;
}

function smtpCommand($socket, $command, $expectedCodes)
{
    fwrite($socket, $command . "\r\n");
    return expectSmtpCode($socket, $expectedCodes);
}

function expectSmtpCode($socket, $expectedCodes)
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;

        if (strlen($line) < 4 || substr($line, 3, 1) !== '-') {
            break;
        }
    }

    if ($response === '') {
        throw new Exception('Empty SMTP response.');
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new Exception('Unexpected SMTP response: ' . trim($response));
    }

    return $response;
}

function buildPlainTextBody($name, $email, $phone, $company, $message, $submissionUrl)
{
    $lines = array(
        'New website enquiry',
        '',
        'Name: ' . $name,
        'Email: ' . $email,
        'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
        'Company: ' . $company,
        'Submission URL: ' . $submissionUrl,
        '',
        'Message:',
        $message,
    );

    return implode("\n", $lines);
}

function normalizeMessageBody($body)
{
    $body = str_replace(array("\r\n", "\r"), "\n", $body);
    return str_replace("\n", "\r\n", $body);
}

function dotStuff($message)
{
    $message = normalizeMessageBody($message);
    return preg_replace('/^\./m', '..', $message);
}

function cleanLine($value)
{
    $value = trim((string) $value);
    return str_replace(array("\r", "\n"), ' ', $value);
}

function encodeHeader($value)
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function buildMessageId()
{
    if (function_exists('random_bytes')) {
        return bin2hex(random_bytes(16));
    }

    if (function_exists('openssl_random_pseudo_bytes')) {
        return bin2hex(openssl_random_pseudo_bytes(16));
    }

    return md5(uniqid(mt_rand(), true));
}

function messageIdDomain($email)
{
    $parts = explode('@', $email);
    return isset($parts[1]) ? $parts[1] : 'localhost';
}

function getHostnameSafe()
{
    if (function_exists('gethostname')) {
        $hostname = gethostname();
        if ($hostname !== false && $hostname !== '') {
            return $hostname;
        }
    }

    return 'localhost';
}

function wantsJsonResponse()
{
    $accept = isset($_SERVER['HTTP_ACCEPT']) ? (string) $_SERVER['HTTP_ACCEPT'] : '';
    return stripos($accept, 'application/json') !== false;
}

function respond($success, $message, $statusCode, $thankYouUrl)
{
    http_response_code($statusCode);

    if (wantsJsonResponse()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode(array(
            'success' => (bool) $success,
            'message' => $message,
        ));
        exit;
    }

    if ($success) {
        header('Location: ' . $thankYouUrl);
        exit;
    }

    header('Content-Type: text/plain; charset=UTF-8');
    echo $message;
    exit;
}
