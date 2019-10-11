# StarfaceRestApi.UsersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignPhone**](UsersApi.md#assignPhone) | **POST** /users/{userId}/phoneconfig/phones | Assignes a phone to the User
[**assignPhoneNumber**](UsersApi.md#assignPhoneNumber) | **POST** /users/{userId}/phonenumberconfig/phonenumbers/ | Assigns phone numbers to the User
[**deleteAvatar**](UsersApi.md#deleteAvatar) | **DELETE** /users/{userId}/avatar | Delete the Avatar
[**deleteManagedConference**](UsersApi.md#deleteManagedConference) | **DELETE** /users/{userId}/managedConferences/{conferenceId} | Delete a managed conference
[**deletePhoneAssignment**](UsersApi.md#deletePhoneAssignment) | **DELETE** /users/{userId}/phoneconfig/phones/{phoneId} | Deletes the PhoneAssignment
[**deletePhoneNumberAssignment**](UsersApi.md#deletePhoneNumberAssignment) | **DELETE** /users/{userId}/phonenumberconfig/phonenumbers/{phoneNumberId} | Deletes the PhoneNumberAssignment
[**deletePhoneNumberAssignments**](UsersApi.md#deletePhoneNumberAssignments) | **POST** /users/{userId}/phonenumberconfig/phonenumbers/delete | Deletes the PhoneNumberAssignments
[**deleteUser**](UsersApi.md#deleteUser) | **DELETE** /users/{userId} | Delete a user
[**getAccountsList**](UsersApi.md#getAccountsList) | **GET** /accounts | Retrieve a list of accounts
[**getAvatar**](UsersApi.md#getAvatar) | **GET** /users/{userId}/avatar | Fetch the Avatar
[**getManagedConference**](UsersApi.md#getManagedConference) | **GET** /users/{userId}/managedConferences/{conferenceId} | Fetch ManagedConference
[**getManagedConferenceList**](UsersApi.md#getManagedConferenceList) | **GET** /users/{userId}/managedConferences | Fetch ManagedConferenceSummaryList
[**getNumbersForAssignedPhone**](UsersApi.md#getNumbersForAssignedPhone) | **GET** /users/{userId}/phoneconfig/phones/{phoneId}/numbers | Fetches a list of NumberForPhoneAssignment
[**getPhoneAssignment**](UsersApi.md#getPhoneAssignment) | **GET** /users/{userId}/phoneconfig/phones/{phoneId} | Fetches the PhoneAssignment
[**getPhoneConfig**](UsersApi.md#getPhoneConfig) | **GET** /users/{userId}/phoneconfig | Fetch the PhoneConfig
[**getPhoneNumberAssignment**](UsersApi.md#getPhoneNumberAssignment) | **GET** /users/{userId}/phonenumberconfig/phonenumbers/{phoneNumberId} | Fetches the PhoneNumberAssignment
[**getPhoneNumberConfig**](UsersApi.md#getPhoneNumberConfig) | **GET** /users/{userId}/phonenumberconfig | Fetch the PhoneNumberConfig
[**getUser**](UsersApi.md#getUser) | **GET** /users/{userId} | Fetch a user
[**getUserPermissions**](UsersApi.md#getUserPermissions) | **GET** /permissions/users/{userId} | Retrieve a list of permissions for user
[**getUsers**](UsersApi.md#getUsers) | **GET** /users | Retrieve a list of users
[**getUsersWithPermission**](UsersApi.md#getUsersWithPermission) | **GET** /permissions/{permissionId}/users | Retrieve users with specified permission
[**listAssignedPhones**](UsersApi.md#listAssignedPhones) | **GET** /users/{userId}/phoneconfig/phones | Fetches a list of assigned phones
[**listPhoneNumberAssignment**](UsersApi.md#listPhoneNumberAssignment) | **GET** /users/{userId}/phonenumberconfig/phonenumbers/ | Fetches a list of assigned phone numbers
[**postManagedConference**](UsersApi.md#postManagedConference) | **POST** /users/{userId}/managedConferences | Create a new managed conference
[**postUser**](UsersApi.md#postUser) | **POST** /users | Create a new user
[**putAvatar**](UsersApi.md#putAvatar) | **PUT** /users/{userId}/avatar | Set the Avatar
[**putManagedConference**](UsersApi.md#putManagedConference) | **PUT** /users/{userId}/managedConferences/{conferenceId} | Update ManagedConference
[**putPhoneConfig**](UsersApi.md#putPhoneConfig) | **PUT** /users/{userId}/phoneconfig | Update the PhoneConfig
[**putPhoneNumberConfig**](UsersApi.md#putPhoneNumberConfig) | **PUT** /users/{userId}/phonenumberconfig | Update the PhoneNumberConfig
[**putUser**](UsersApi.md#putUser) | **PUT** /users/{userId} | Update a user
[**putUserPermissions**](UsersApi.md#putUserPermissions) | **PUT** /permissions/users/{userId} | Update a user&#39;s permissions
[**startManagedConference**](UsersApi.md#startManagedConference) | **PUT** /users/{userId}/managedConferences/{conferenceId}/start | Start ManagedConference
[**updateNumbersForAssignedPhones**](UsersApi.md#updateNumbersForAssignedPhones) | **PUT** /users/{userId}/phoneconfig/phones/{phoneId}/numbers | Updates the list of NumberForPhoneAssignment
[**updatePermissionForUsers**](UsersApi.md#updatePermissionForUsers) | **PUT** /permissions/{permissionId}/users | Update permission for users
[**updatePhoneNumberAssignments**](UsersApi.md#updatePhoneNumberAssignments) | **PUT** /users/{userId}/phonenumberconfig/phonenumbers | Update PhoneNumberAssignments of the User
[**usersMeGet**](UsersApi.md#usersMeGet) | **GET** /users/me | Get own user


<a name="assignPhone"></a>
# **assignPhone**
> assignPhone(userId, phoneAssignment)

Assignes a phone to the User

Assigns a phone to the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneAssignment = new StarfaceRestApi.PhoneAssignment(); // PhoneAssignment | phoneAssignment


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.assignPhone(userId, phoneAssignment, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneAssignment** | [**PhoneAssignment**](PhoneAssignment.md)| phoneAssignment | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="assignPhoneNumber"></a>
# **assignPhoneNumber**
> [PhoneNumberAssignment] assignPhoneNumber(userId, phoneNumberAssignments)

Assigns phone numbers to the User

Assigns phone numbers to the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneNumberAssignments = [new StarfaceRestApi.PhoneNumberAssignment()]; // [PhoneNumberAssignment] | A List of PhoneNumberAssignment-Objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.assignPhoneNumber(userId, phoneNumberAssignments, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneNumberAssignments** | [**[PhoneNumberAssignment]**](PhoneNumberAssignment.md)| A List of PhoneNumberAssignment-Objects | 

### Return type

[**[PhoneNumberAssignment]**](PhoneNumberAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAvatar"></a>
# **deleteAvatar**
> deleteAvatar(userId)

Delete the Avatar

Delete the Avatar of the user with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User thats avatar will be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAvatar(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User thats avatar will be updated | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteManagedConference"></a>
# **deleteManagedConference**
> deleteManagedConference(userId, conferenceId)

Delete a managed conference

Delete the managed conference with the given {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the user

var conferenceId = 56; // Number | Id of the conference


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteManagedConference(userId, conferenceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **conferenceId** | **Number**| Id of the conference | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePhoneAssignment"></a>
# **deletePhoneAssignment**
> deletePhoneAssignment(userId, phoneId)

Deletes the PhoneAssignment

Deletes the PhoneAssignment from the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneId = 56; // Number | Id of a phone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePhoneAssignment(userId, phoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneId** | **Number**| Id of a phone | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePhoneNumberAssignment"></a>
# **deletePhoneNumberAssignment**
> deletePhoneNumberAssignment(userId, phoneNumberId)

Deletes the PhoneNumberAssignment

Deletes the PhoneNumberAssignment from the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneNumberId = 56; // Number | Id of the PhoneNumber that gets unassigned from the User with the given {userId}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePhoneNumberAssignment(userId, phoneNumberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneNumberId** | **Number**| Id of the PhoneNumber that gets unassigned from the User with the given {userId} | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePhoneNumberAssignments"></a>
# **deletePhoneNumberAssignments**
> deletePhoneNumberAssignments(userId, phoneNumberAssignments)

Deletes the PhoneNumberAssignments

Deletes the PhoneNumberAssignments from the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneNumberAssignments = [new StarfaceRestApi.PhoneNumberAssignment()]; // [PhoneNumberAssignment] | A List of PhoneNumberAssignment-Objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deletePhoneNumberAssignments(userId, phoneNumberAssignments, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneNumberAssignments** | [**[PhoneNumberAssignment]**](PhoneNumberAssignment.md)| A List of PhoneNumberAssignment-Objects | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUser"></a>
# **deleteUser**
> deleteUser(userId)

Delete a user

Delete the STARFACE user with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User that will be deleted


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User that will be deleted | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAccountsList"></a>
# **getAccountsList**
> [Account] getAccountsList()

Retrieve a list of accounts

Retrieve a list of accounts.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAccountsList(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Account]**](Account.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAvatar"></a>
# **getAvatar**
> &#39;Blob&#39; getAvatar(userId)

Fetch the Avatar

Fetch the Avatar of the user with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User thats avatar will be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAvatar(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User thats avatar will be fetched | 

### Return type

**&#39;Blob&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: image/png, image/jpeg, image/gif

<a name="getManagedConference"></a>
# **getManagedConference**
> ManagedConference getManagedConference(userId, conferenceId)

Fetch ManagedConference

Fetch the ManagedConference of the User with the given {userId} and {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the user

var conferenceId = 56; // Number | Id of the conference


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getManagedConference(userId, conferenceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **conferenceId** | **Number**| Id of the conference | 

### Return type

[**ManagedConference**](ManagedConference.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManagedConferenceList"></a>
# **getManagedConferenceList**
> [ManagedConferenceSummary] getManagedConferenceList(userId, opts)

Fetch ManagedConferenceSummaryList

Fetch the ManagedConferenceSummaryList of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the user

var opts = { 
  'page': 56, // Number | The page number for this request. This parameter is 0-indexed. Value 0 returns the first page
  'pagesize': 56, // Number | The page size to use. Default is 20.
  'sort': "sort_example", // String | The fieldname to sort for.
  'sortdirection': "sortdirection_example" // String | The sort direction. 'ASC' for ascending, 'DESC' for descending
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getManagedConferenceList(userId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **page** | **Number**| The page number for this request. This parameter is 0-indexed. Value 0 returns the first page | [optional] 
 **pagesize** | **Number**| The page size to use. Default is 20. | [optional] 
 **sort** | **String**| The fieldname to sort for. | [optional] 
 **sortdirection** | **String**| The sort direction. &#39;ASC&#39; for ascending, &#39;DESC&#39; for descending | [optional] 

### Return type

[**[ManagedConferenceSummary]**](ManagedConferenceSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNumbersForAssignedPhone"></a>
# **getNumbersForAssignedPhone**
> [NumberForPhoneAssignment] getNumbersForAssignedPhone(userId, phoneId)

Fetches a list of NumberForPhoneAssignment

Fetches a list of NumberForPhoneAssignment of the User with the given {userId} and the Phone with the given {phoneId}.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneId = 56; // Number | Id of a phone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getNumbersForAssignedPhone(userId, phoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneId** | **Number**| Id of a phone | 

### Return type

[**[NumberForPhoneAssignment]**](NumberForPhoneAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhoneAssignment"></a>
# **getPhoneAssignment**
> getPhoneAssignment(userId, phoneId)

Fetches the PhoneAssignment

Fetches the PhoneAssignment for the corresponding {phoneId} of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneId = 56; // Number | Id of a phone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getPhoneAssignment(userId, phoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneId** | **Number**| Id of a phone | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhoneConfig"></a>
# **getPhoneConfig**
> PhoneConfig getPhoneConfig(userId)

Fetch the PhoneConfig

Fetch the PhoneConfig of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneConfig(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 

### Return type

[**PhoneConfig**](PhoneConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhoneNumberAssignment"></a>
# **getPhoneNumberAssignment**
> PhoneNumberAssignment getPhoneNumberAssignment(userId, phoneNumberId)

Fetches the PhoneNumberAssignment

Fetches the PhoneNumberAssignment for the corresponding {phoneNumberId} of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneNumberId = 56; // Number | Id of the PhoneNumber thats is assigned to the User with the given {userId}


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneNumberAssignment(userId, phoneNumberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneNumberId** | **Number**| Id of the PhoneNumber thats is assigned to the User with the given {userId} | 

### Return type

[**PhoneNumberAssignment**](PhoneNumberAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhoneNumberConfig"></a>
# **getPhoneNumberConfig**
> PhoneNumberConfig getPhoneNumberConfig(userId)

Fetch the PhoneNumberConfig

Fetch the PhoneNumberConfig of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneNumberConfig(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 

### Return type

[**PhoneNumberConfig**](PhoneNumberConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUser"></a>
# **getUser**
> User getUser(userId)

Fetch a user

Fetch the STARFACE user with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User that will be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUser(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User that will be fetched | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserPermissions"></a>
# **getUserPermissions**
> [PermissionInfo] getUserPermissions(userId)

Retrieve a list of permissions for user

Retrieve a list of STARFACE permissions for user with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User which persissions will be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserPermissions(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User which persissions will be fetched | 

### Return type

[**[PermissionInfo]**](PermissionInfo.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsers"></a>
# **getUsers**
> [User] getUsers(opts)

Retrieve a list of users

Retrieve a list of STARFACE users the current user can access.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var opts = { 
  'searchTerm': "searchTerm_example" // String | The searchTerm to query users.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**| The searchTerm to query users. | [optional] 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersWithPermission"></a>
# **getUsersWithPermission**
> [User] getUsersWithPermission(permissionId)

Retrieve users with specified permission

Retrieve users which have permission with the given {permissionId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var permissionId = 56; // Number | Id of the Permission to search


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersWithPermission(permissionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **permissionId** | **Number**| Id of the Permission to search | 

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listAssignedPhones"></a>
# **listAssignedPhones**
> [PhoneAssignment] listAssignedPhones(userId)

Fetches a list of assigned phones

Fetches a list of assigned phones for the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listAssignedPhones(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 

### Return type

[**[PhoneAssignment]**](PhoneAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listPhoneNumberAssignment"></a>
# **listPhoneNumberAssignment**
> [PhoneNumberAssignment] listPhoneNumberAssignment(userId)

Fetches a list of assigned phone numbers

Fetches a list of assigned phone numbers for the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listPhoneNumberAssignment(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 

### Return type

[**[PhoneNumberAssignment]**](PhoneNumberAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postManagedConference"></a>
# **postManagedConference**
> postManagedConference(userId, conference)

Create a new managed conference

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the user

var conference = new StarfaceRestApi.ManagedConference(); // ManagedConference | Managed conference object to be created


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postManagedConference(userId, conference, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **conference** | [**ManagedConference**](ManagedConference.md)| Managed conference object to be created | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postUser"></a>
# **postUser**
> postUser(user)

Create a new user

Create a new STARFACE user

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var user = new StarfaceRestApi.User(); // User | User object to add


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postUser(user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user** | [**User**](User.md)| User object to add | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putAvatar"></a>
# **putAvatar**
> putAvatar(image, userId)

Set the Avatar

Set the Avatar of the user with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var image = B; // Blob | Image png

var userId = 56; // Number | Id of the User thats avatar will be updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putAvatar(image, userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **Blob**| Image png | 
 **userId** | **Number**| Id of the User thats avatar will be updated | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: image/png, image/jpeg, image/gif
 - **Accept**: application/json

<a name="putManagedConference"></a>
# **putManagedConference**
> putManagedConference(userId, conferenceId, conference)

Update ManagedConference

Update the ManagedConference of the User with the given {userId} and {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the user

var conferenceId = 56; // Number | Id of the conference

var conference = new StarfaceRestApi.ManagedConference(); // ManagedConference | ManagedConference-Object with updated values that should be applied


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putManagedConference(userId, conferenceId, conference, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **conferenceId** | **Number**| Id of the conference | 
 **conference** | [**ManagedConference**](ManagedConference.md)| ManagedConference-Object with updated values that should be applied | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPhoneConfig"></a>
# **putPhoneConfig**
> putPhoneConfig(userId, phoneConfig)

Update the PhoneConfig

Update the PhoneConfig of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneConfig = new StarfaceRestApi.PhoneConfig(); // PhoneConfig | phoneConfig to update


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putPhoneConfig(userId, phoneConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneConfig** | [**PhoneConfig**](PhoneConfig.md)| phoneConfig to update | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putPhoneNumberConfig"></a>
# **putPhoneNumberConfig**
> PhoneNumberConfig putPhoneNumberConfig(userId, phoneNumberConfig)

Update the PhoneNumberConfig

Update the PhoneNumberConfig of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User thats PhoneNumberConfig will be updated

var phoneNumberConfig = new StarfaceRestApi.PhoneNumberConfig(); // PhoneNumberConfig | PhoneNumberConfig-Object with updated values that should be applied


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.putPhoneNumberConfig(userId, phoneNumberConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User thats PhoneNumberConfig will be updated | 
 **phoneNumberConfig** | [**PhoneNumberConfig**](PhoneNumberConfig.md)| PhoneNumberConfig-Object with updated values that should be applied | 

### Return type

[**PhoneNumberConfig**](PhoneNumberConfig.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUser"></a>
# **putUser**
> putUser(userId, user)

Update a user

Update the STARFACE user with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User that will be updated

var user = new StarfaceRestApi.User(); // User | User-Object with updated values that should be applied


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putUser(userId, user, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User that will be updated | 
 **user** | [**User**](User.md)| User-Object with updated values that should be applied | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putUserPermissions"></a>
# **putUserPermissions**
> putUserPermissions(userId, permissions)

Update a user&#39;s permissions

Set the STARFACE user&#39;s permissions with the given {userId}. Permissions user had before and not specified in this query will be removed

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User that will be updated

var permissions = [new StarfaceRestApi.[Number]()]; // [Number] | Array of permission Ids that should be granted to user


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putUserPermissions(userId, permissions, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User that will be updated | 
 **permissions** | **[Number]**| Array of permission Ids that should be granted to user | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startManagedConference"></a>
# **startManagedConference**
> startManagedConference(userId, conferenceId, opts)

Start ManagedConference

Start the ManagedConference of the User with the given {userId} and {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the user

var conferenceId = 56; // Number | Id of the conference

var opts = { 
  'phoneName': "phoneName_example" // String | The name of the phone to enter the conference. If empty the given phonenumber is used
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.startManagedConference(userId, conferenceId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the user | 
 **conferenceId** | **Number**| Id of the conference | 
 **phoneName** | **String**| The name of the phone to enter the conference. If empty the given phonenumber is used | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNumbersForAssignedPhones"></a>
# **updateNumbersForAssignedPhones**
> updateNumbersForAssignedPhones(userId, phoneId)

Updates the list of NumberForPhoneAssignment

Updates the list of NumberForPhoneAssignment of the User with the given {userId} and the Phone with the given {phoneId}. Only the active-flag can be changed. Elements in the list cannot be added or removed.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneId = 56; // Number | Id of a phone


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateNumbersForAssignedPhones(userId, phoneId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneId** | **Number**| Id of a phone | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePermissionForUsers"></a>
# **updatePermissionForUsers**
> updatePermissionForUsers(usersList, permissionId, granted)

Update permission for users

Update permission with the given {permissionId} for users specified in usersList. Permission will be granted if \&quot;granted\&quot; parameter established to true and removed if false

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var usersList = [new StarfaceRestApi.[Number]()]; // [Number] | List of user ids for updating permission with given {permissionId}

var permissionId = 56; // Number | Id of the Permission

var granted = true; // Boolean | Boolean parameter that define will be permission granted or removed


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updatePermissionForUsers(usersList, permissionId, granted, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **usersList** | **[Number]**| List of user ids for updating permission with given {permissionId} | 
 **permissionId** | **Number**| Id of the Permission | 
 **granted** | **Boolean**| Boolean parameter that define will be permission granted or removed | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updatePhoneNumberAssignments"></a>
# **updatePhoneNumberAssignments**
> [PhoneNumberAssignment] updatePhoneNumberAssignments(userId, phoneNumberAssignments)

Update PhoneNumberAssignments of the User

Update the PhoneNumberAssignment with the given {phoneNumberId} of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var userId = 56; // Number | Id of the User

var phoneNumberAssignments = [new StarfaceRestApi.PhoneNumberAssignment()]; // [PhoneNumberAssignment] | A List of PhoneNumberAssignment-Objects


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updatePhoneNumberAssignments(userId, phoneNumberAssignments, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **phoneNumberAssignments** | [**[PhoneNumberAssignment]**](PhoneNumberAssignment.md)| A List of PhoneNumberAssignment-Objects | 

### Return type

[**[PhoneNumberAssignment]**](PhoneNumberAssignment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="usersMeGet"></a>
# **usersMeGet**
> User usersMeGet()

Get own user

endpoint alias for /users/{userId} of the user that is corrently logged in

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.UsersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.usersMeGet(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

