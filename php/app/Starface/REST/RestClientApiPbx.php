<?php

namespace Starface\REST;

use Starface\Utils\HttpContentType;

class RestClientApiPbx extends RestBasicClient
{
    private $authToken;
    
    /**
     * RestClientApiPbx constructor.
     *
     * @param string      $apiUrl
     * @param string|null $username
     * @param string|null $password
     */
    public function __construct(string $apiUrl, string $username = null, string $password = null)
    {
        parent::__construct($apiUrl);
        $this->updateCurlHeader();
        if (!empty($username) && !empty($password)) {
            $this->login($username, $password);
        }
    }
    
    private function resetCurlHeader()
    {
        $this->updateCurlHeader();
    }
    
    /**
     * @param string $contentType
     */
    private function updateCurlHeader($contentType = null)
    {
        $httpHeader = array(
            "Content-Type: " . ($contentType ?? HttpContentType::APPLICATION_JSON . "; charset=utf-8"),
            "X-Version: 2",
        );
        if (isset($this->authToken)) {
            $httpHeader[] = "authToken: " . $this->authToken;
        }
        $this->setCurlOption(CURLOPT_HTTPHEADER, $httpHeader);
    }
    
    public function logout()
    {
        $this->delete("/login");
        if ($this->getLastRequestsHttpStatus() == 204) {
            unset($this->authToken);
            $this->updateCurlHeader();
            
            return true;
        }
        
        return false;
    }
    
    /**
     * @param string $userLoginId
     * @param string $password
     * @param string $nonce
     *
     * @return string
     */
    private function calculateLoginSecret(string $userLoginId, string $password, string $nonce)
    {
        $toDigest = $userLoginId . $nonce . hash('sha512', $password);
        
        return $userLoginId . ':' . hash('sha512', $toDigest);
    }
    
    /**
     * @param string $userLoginId
     * @param string $password
     *
     * @return bool
     */
    public function login(string $userLoginId, string $password)
    {
        $login = $this->get("/login");
        $login["secret"] = $this->calculateLoginSecret($userLoginId, $password, $login["nonce"]);
        $result = $this->post("/login", $login);
        if ($this->getLastRequestsHttpStatus() == 200 && $result["token"]) {
            $this->setAuthToken($result["token"]);
            
            return true;
        }
        
        return false;
    }
    
    /**
     * @param string $loginId
     *
     * @return bool
     */
    public function getUserByLoginId(string $loginId)
    {
        $users = $this->getUsers();
        foreach ($users as $user) {
            if ($user["login"] == $loginId) {
                return $user;
            }
        }
        
        return false;
    }
    
    public function getAccounts()
    {
        return $this->get("/accounts");
    }
    
    public function getGroups()
    {
        return $this->get("/groups");
    }
    
    /**
     * @param int $groupId
     *
     * @return array|null
     */
    public function getGroupById(int $groupId)
    {
        return $this->get("/groups/" . intval($groupId));
    }
    
    /**
     * @param string $groupName
     *
     * @return array|null
     */
    public function getGroupByName(string $groupName)
    {
        $groups = $this->getGroups();
        foreach ($groups as $group) {
            if (isset($group['id']) && isset($group['groupname']) && $group['groupname'] == $groupName) {
                return $this->getGroupById($group['id']);
            }
        }
        
        return null;
    }
    
    /**
     * @param array $groupData
     *
     * @return bool
     */
    public function updateGroup(array $groupData)
    {
        $this->put("/groups/", $groupData);
        
        return $this->getLastRequestsHttpStatus() == 204;
    }
    
    /**
     * @param int        $groupId
     * @param int        $userId
     * @param array|null $groupData
     *
     * @return bool
     */
    public function addUserToGroupById(int $groupId, int $userId, array $groupData = null)
    {
        $group = $groupData ?? $this->getGroupById($groupId);
        
        return $this->addUserToGroup($group, $userId);
    }
    
    /**
     * @param string     $groupName
     * @param int        $userId
     * @param array|null $groupData
     *
     * @return bool
     */
    public function addUserToGroupByName(string $groupName, int $userId, array $groupData = null)
    {
        
        $group = $groupData ?? $this->getGroupByName($groupName);
        
        return $this->addUserToGroup($group, $userId);
    }
    
    /**
     * @param array $group
     * @param int   $userId
     *
     * @return bool
     */
    public function addUserToGroup(array $group, int $userId)
    {
        foreach ($group['assignableUsers'] as &$user) {
            if ($user['id'] == $userId) {
                $user['assigned'] = true;
                break;
            }
        }
        
        return $this->updateGroup($group);
    }
    
    public function getRedirects()
    {
        return $this->get("/redirects");
    }
    
    public function getRedirectsById($redirectId)
    {
        return $this->get("/redirects/" . (int)$redirectId);
    }
    
    public function getMyUserInfo()
    {
        return $this->getUserInfo();
    }
    
    /**
     * @param int $userId
     *
     * @return array|null
     */
    public function getUserInfo(int $userId = null)
    {
        if (null === $userId) {
            return $this->get("/users/me");
        }
        
        return $this->get("/users/" . (int)$userId);
    }
    
    public function getUsers()
    {
        return $this->get("/users");
    }
    
    /**
     * @param bool|null $assignedNumbers null: retrieves all available numbers, false: only free phone numbers are
     *                                   returned, true: only assigned numbers are returned.
     *
     * @return array|null
     */
    public function getPhoneNumbers(bool $assignedNumbers = null)
    {
        if (is_bool($assignedNumbers)) {
            return $this->get("/phonenumbers/?assigned=" . ($assignedNumbers ? 'true' : 'false'));
        }
        
        return $this->get("/phonenumbers");
    }
    
    /**
     * @param int $phoneNumberId
     *
     * @return array|null
     */
    public function getPhoneNumbersById(int $phoneNumberId)
    {
        return $this->get("/phonenumbers/" . (int)$phoneNumberId);
    }
    
    /**
     * @param int $userId
     *
     * @return array|null
     */
    public function getUserPhoneConfig(int $userId)
    {
        return $this->get("/users/" . (int)$userId . "/phonenumberconfig/");
    }
    
    /**
     * @param $userId
     *
     * @return array|null
     */
    public function getUserPhoneNumbers(int $userId)
    {
        return $this->get("/users/" . (int)$userId . "/phonenumberconfig/phonenumbers/");
    }
    
    /**
     * @param int $userId
     * @param int $phoneNumberId
     *
     * @return bool
     */
    public function deleteUserPhoneNumbers(int $userId, int $phoneNumberId)
    {
        $this->delete("/users/" . (int)$userId . "/phonenumberconfig/phonenumbers/" . (int)$phoneNumberId);
        
        return $this->getLastRequestsHttpStatus() == 204;
    }
    
    /**
     * @param int $userId
     *
     * @return bool
     */
    public function deleteUser(int $userId)
    {
        $this->delete("/users/" . (int)$userId);
        
        return $this->getLastRequestsHttpStatus() == 204;
    }
    
    /**
     * @param int   $userId
     * @param array $phoneNumberConfig
     *
     * @return bool
     */
    public function updateUserPhoneNumberConfig(int $userId, array $phoneNumberConfig)
    {
        $this->put("/users/" . (int)$userId . "/phonenumberconfig/", $phoneNumberConfig);
        
        return $this->getLastRequestsHttpStatus() == 200;
    }
    
    /**
     * @param int   $userId
     * @param array $phoneNumberConfig
     *
     * @return bool
     */
    public function updateUserPhoneNumbers(int $userId, array $phoneNumberConfig)
    {
        $this->put("/users/" . (int)$userId . "/phonenumberconfig/phonenumbers/", $phoneNumberConfig);
        
        return $this->getLastRequestsHttpStatus() == 200;
    }
    
    /**
     * @param int $userId
     * @param int $phoneNumberId
     * @param int $serviceId
     *
     * @return bool
     */
    public function updateUserPhoneNumberServiceId(int $userId, int $phoneNumberId, int $serviceId = 1)
    {
        $phoneNumberConfig = [
            "phoneNumberId" => $phoneNumberId,
            "accountId"     => $userId,
            "serviceId"     => $serviceId
        ];
        
        return $this->updateUserPhoneNumbers($userId, array($phoneNumberConfig));
    }
    
    /**
     * @param int    $userId
     * @param string $filePath
     * @param string $contentType
     *
     * @return bool
     */
    public function setUserAvatar(int $userId, string $filePath, string $contentType = HttpContentType::IMAGE_JPEG)
    {
        $fileData = file_get_contents($filePath);
        $this->updateCurlHeader($contentType);
        $this->put("/users/" . $userId . "/avatar", $fileData, null);
        $this->resetCurlHeader();
        
        return $this->getLastRequestsHttpStatus() == 204;
    }
    
    public function setUserPrimaryPhoneNumberIdInternal($userId, $phoneNumberId)
    {
        return $this->setUserPrimaryPhoneNumberId($userId, $phoneNumberId, false);
    }
    
    public function setUserPrimaryPhoneNumberIdExternal($userId, $phoneNumberId)
    {
        return $this->setUserPrimaryPhoneNumberId($userId, $phoneNumberId, true);
    }
    
    public function setUserPrimaryPhoneNumberId($userId, $phoneNumberId, $isExternal = false, $signalingNoId = null)
    {
        $typeFieldName = $isExternal ? "primaryExternalNumberId" : "primaryInternalNumberId";
        $phoneNumberConfig = [
            $typeFieldName => $phoneNumberId
        ];
        // TODO remove after api fix -> setUserSignalingPhoneNumberId()
        if (!empty($signalingNoId)) {
            $phoneNumberConfig['signalingNumberId'] = $signalingNoId;
        }
        
        return $this->updateUserPhoneNumberConfig($userId, $phoneNumberConfig);
    }
    
    public function addUserPhoneNumber($userId, $phoneNumberId, $serviceId = 1)
    {
        $phoneNumberConfig = [];
        // add number:
        $phoneNumberConfig[] = [
            "phoneNumberId" => $phoneNumberId,
            "accountId"     => $userId,
            "serviceId"     => $serviceId
        ];
        
        return $this->addUserPhoneNumberConfig($userId, $phoneNumberConfig);
    }
    
    public function addUserPhoneNumberConfig($userId, $phoneNumberConfig)
    {
        $this->post("/users/" . (int)$userId . "/phonenumberconfig/phonenumbers", $phoneNumberConfig);
        
        return $this->getLastRequestsHttpStatus() == 200;
    }
    
    /**
     * @param array $userData
     *
     * @return bool
     */
    public function createUser(array $userData)
    {
        $this->post("/users", $userData);
        
        return $this->getLastRequestsHttpStatus() == 201;
    }
    
    /**
     * @return mixed
     */
    public function issetAuthToken()
    {
        return !empty($this->authToken);
    }
    
    /**
     * @return mixed
     */
    public function getAuthToken()
    {
        return $this->authToken;
    }
    
    /**
     * @param mixed $authToken
     */
    public function setAuthToken($authToken)
    {
        $this->authToken = $authToken;
        $this->updateCurlHeader();
    }
    
}