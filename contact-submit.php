<?php

declare(strict_types=1);

/*
 * Mail transport config.
 * Port 465 typically uses "ssl". Change to "tls" if you switch to port 587.
 */
$smtpHost = 'uk609.directrouter.com';
$smtpPort = 465;
$smtpUsername = 'enquiry@industrialfloorcontractors.co.uk';
$smtpPassword = 'IFC015302223564';
$smtpEncryption = 'ssl';
$mailFrom = 'enquiry@industrialfloorcontractors.co.uk';
$mailTo = 'enquiry@industrialfloorcontractors.co.uk';
$thankYouUrl = '/thank-you/';

header('Vary: Accept');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Method not allowed.', 405, $thankYouUrl);
}

$botcheck = trim((string) ($_POST['botcheck'] ?? ''));
if ($botcheck !== '') {
    respond(true, 'Submission received.', 200, $thankYouUrl);
}

$name = cleanLine((string) ($_POST['name'] ?? ''));
$email = filter_var(trim((string) ($_POST['email'] ?? '')), FILTER_VALIDATE_EMAIL);
$phone = cleanLine((string) ($_POST['phone'] ?? ''));
$company = cleanLine((string) ($_POST['company'] ?? ''));
$message = trim((string) ($_POST['message'] ?? ''));
$submissionUrl = trim((string) ($_POST['submission_url'] ?? ''));

if ($name === '' || $email === false || $company === '' || $message === '') {
    respond(false, 'Please complete all required fields.', 422, $thankYouUrl);
}

$safeSubmissionUrl = $submissionUrl !== '' ? filter_var($submissionUrl, FILTER_SANITIZE_URL) : 'Not provided';
$subject = 'Website enquiry - Industrial Floor Contractors';
$plainTextBody = buildPlainTextBody(
    $name,
    $email,
    $phone,
    $company,
    $message,
    $safeSubmissionUrl
);

$headers = [
    'Date: ' . date(DATE_RFC2822),
    'From: Industrial Floor Contractors <' . $mailFrom . '>',
    'To: <' . $mailTo . '>',
    'Reply-To: ' . $name . ' <' . $email . '>',
    'Subject: ' . encodeHeader($subject),
    'Message-ID: <' . bin2hex(random_bytes(16)) . '@' . messageIdDomain($mailFrom) . '>',
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$rawMessage = implode("\r\n", $headers) . "\r\n\r\n" . normalizeMessageBody($plainTextBody);

try {
    sendViaSmtp(
        $smtpHost,
        $smtpPort,
        $smtpUsername,
        $smtpPassword,
        $smtpEncryption,
        $mailFrom,
        $mailTo,
        $rawMessage
    );
} catch (Throwable $exception) {
    respond(false, 'Submission failed. Please try again.', 500, $thankYouUrl);
}

respond(true, 'Message sent successfully.', 200, $thankYouUrl);

function sendViaSmtp(
    string $host,
    int $port,
    string $username,
    string $password,
    string $encryption,
    string $from,
    string $to,
    string $message
): void {
    $timeout = 20;
    $transport = strtolower($encryption) === 'ssl' ? 'ssl://' . $host : $host;
    $socket = @stream_socket_client($transport . ':' . $port, $errno, $errstr, $timeout, STREAM_CLIENT_CONNECT);

    if (!is_resource($socket)) {
        throw new RuntimeException('Unable to connect to SMTP server: ' . $errstr);
    }

    stream_set_timeout($socket, $timeout);

    expectSmtpCode($socket, [220]);
    smtpCommand($socket, 'EHLO ' . gethostnameSafe(), [250]);

    if (strtolower($encryption) === 'tls') {
        smtpCommand($socket, 'STARTTLS', [220]);

        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            throw new RuntimeException('Unable to start TLS encryption.');
        }

        smtpCommand($socket, 'EHLO ' . gethostnameSafe(), [250]);
    }

    smtpCommand($socket, 'AUTH LOGIN', [334]);
    smtpCommand($socket, base64_encode($username), [334]);
    smtpCommand($socket, base64_encode($password), [235]);
    smtpCommand($socket, 'MAIL FROM:<' . $from . '>', [250]);
    smtpCommand($socket, 'RCPT TO:<' . $to . '>', [250, 251]);
    smtpCommand($socket, 'DATA', [354]);
    smtpCommand($socket, dotStuff($message) . "\r\n.", [250]);
    smtpCommand($socket, 'QUIT', [221]);

    fclose($socket);
}

function smtpCommand($socket, string $command, array $expectedCodes): string
{
    fwrite($socket, $command . "\r\n");
    return expectSmtpCode($socket, $expectedCodes);
}

function expectSmtpCode($socket, array $expectedCodes): string
{
    $response = '';

    while (($line = fgets($socket, 515)) !== false) {
        $response .= $line;

        if (strlen($line) < 4 || $line[3] !== '-') {
            break;
        }
    }

    if ($response === '') {
        throw new RuntimeException('Empty SMTP response.');
    }

    $code = (int) substr($response, 0, 3);
    if (!in_array($code, $expectedCodes, true)) {
        throw new RuntimeException('Unexpected SMTP response: ' . trim($response));
    }

    return $response;
}

function buildPlainTextBody(
    string $name,
    string $email,
    string $phone,
    string $company,
    string $message,
    string $submissionUrl
): string {
    $lines = [
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
    ];

    return implode("\n", $lines);
}

function normalizeMessageBody(string $body): string
{
    $body = str_replace(["\r\n", "\r"], "\n", $body);
    return str_replace("\n", "\r\n", $body);
}

function dotStuff(string $message): string
{
    $message = normalizeMessageBody($message);
    return preg_replace('/^\./m', '..', $message) ?? $message;
}

function cleanLine(string $value): string
{
    $value = trim($value);
    return str_replace(["\r", "\n"], ' ', $value);
}

function encodeHeader(string $value): string
{
    return '=?UTF-8?B?' . base64_encode($value) . '?=';
}

function messageIdDomain(string $email): string
{
    $parts = explode('@', $email);
    return $parts[1] ?? 'localhost';
}

function gethostnameSafe(): string
{
    $hostname = gethostname();
    return $hostname !== false && $hostname !== '' ? $hostname : 'localhost';
}

function wantsJsonResponse(): bool
{
    $accept = (string) ($_SERVER['HTTP_ACCEPT'] ?? '');
    return stripos($accept, 'application/json') !== false;
}

function respond(bool $success, string $message, int $statusCode, string $thankYouUrl): void
{
    http_response_code($statusCode);

    if (wantsJsonResponse()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode([
            'success' => $success,
            'message' => $message,
        ]);
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
