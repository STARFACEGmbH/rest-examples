<?php
/**
 * /login example:
 * short code snippet to generate a valid authToken for STARFACE PBX REST API.
 *
 * NOTES:
 *  tested with PHP 7.2.14 on STARFACE PBX 6.6.0.xx - Beta
 *  tested with PHP 7.2.14 on STARFACE PBX 6.7.0.22 - Final
 */

require __DIR__ . '/../vendor/autoload.php';

use Starface\REST\RestBasicClient;

/** Sample REST url and login data */
const PBX_API_URL = "https://mytestcloud.starface-cloud.com/rest/";
const PBX_API_USER = "0001";    // login id for admin user
const PBX_API_PASS = "foobar";  // login password

/**
 * @param string $loginId
 * @param string $password
 * @param string $nonce
 *
 * @return string
 */
function calculateLoginSecret(string $loginId, string $password, string $nonce): string
{
    $toDigest = $loginId . $nonce . hash('sha512', $password);

    return $loginId . ':' . hash('sha512', $toDigest);
}

try {
    // construct basic client to handle http requests:
    $client = new RestBasicClient(PBX_API_URL);

    // update header information:
    $httpHeader = array(
        "Content-Type: application/json; charset=utf-8",
        "X-Version: 2",
    );
    $client->setCurlOption(CURLOPT_HTTPHEADER, $httpHeader);

    // get nonce from api first:
    $login = $client->get("/login");
    if (empty($login["nonce"])) {
        throw new Exception("Retrieving nonce failed");
    }

    // add secret to response
    $login["secret"] = calculateLoginSecret(PBX_API_USER, PBX_API_PASS, $login["nonce"]);
    $result = $client->post("/login", $login);
    if ($client->getLastRequestsHttpStatus() != 200 || empty($result["token"])) {
        throw new Exception("Retrieving authToken failed");
    }

    // update http header for further requests:
    $httpHeader[] = "authToken: " . $result["token"];
    $client->setCurlOption(CURLOPT_HTTPHEADER, $httpHeader);
    echo "Login successful - AuthToken: " . $result["token"];

    // do stuff...
    // $installedUsers = $client->get("/users");
    // var_dump($installedUsers);

    // logout:
    $client->delete("/login"); // invalidates authToken
} catch (Exception $e) {
    echo "Login failed: {$e->getMessage()}  (HTTP {$client->getLastRequestsHttpStatus()})";
} finally {
    $client->closeConnection();
    unset($client);
}
