<?php
/**
 * /users example:
 * short code snippet to retrieve installed users' list from PBX + creating a new user.
 *
 * NOTES:
 *  tested with PHP 7.2.14 on STARFACE PBX 6.6.0.xx - Beta
 *  tested with PHP 7.2.14 on STARFACE PBX 6.7.0.22 - Final
 */

require __DIR__ . '/../vendor/autoload.php';

use Starface\REST\RestClientApiPbx;

/** Sample REST url and login data */
const PBX_API_URL = "https://mytestcloud.starface-cloud.com/rest/";
const PBX_API_USER = "0001";    // login id for admin user
const PBX_API_PASS = "foobar";  // login password

/**
 * @param array $installedUsers
 *
 * @return int
 */
function getNextFreeLoginId(array $installedUsers): int
{
    $loginId = 1000;
    foreach ($installedUsers as $user) {
        if (intval($user["login"]) > $loginId) {
            $loginId = intval($user["login"]);
        }
    }

    return ++$loginId;
}

try {
    // replaces login example:
    $client = new RestClientApiPbx(PBX_API_URL, PBX_API_USER, PBX_API_PASS);
    if (!$client->issetAuthToken()) {
        throw new Exception("Retrieving authToken on login failed");
    }

    // retrieve list of installed users:
    $installedUsers = $client->getUsers();

    // create new STARFACE user:
    $newUser = array(
        'login' => getNextFreeLoginId($installedUsers),
        'email' => "max_mustermann@nomail.de",
        'password' => "unsafePassword", // TODO: implement pwd generator
        'familyName' => "Mustermann",
        'firstName' => "Max",
        'namespace' => 'STARFACE Examples',
        'language' => "de",
        'missedCallReport' => false,
        'faxCoverPage' => false,
        'faxEmailJournal' => false,
    );
    $client->post("/users", $newUser);
    if ($client->getLastRequestsHttpStatus() != 201) {
        throw new Exception("Creating user failed");
    }
    echo "User {$newUser["familyName"]} with LoginId {$newUser["login"]} successfully created";
} catch (Exception $e) {
    echo "{$e->getMessage()}  (HTTP {$client->getLastRequestsHttpStatus()})";
} finally {
    $client->logout();
    $client->closeConnection();
    unset($client);
}
