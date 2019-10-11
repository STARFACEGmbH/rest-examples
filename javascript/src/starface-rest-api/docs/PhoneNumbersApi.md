# StarfaceRestApi.PhoneNumbersApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignPhoneNumber**](PhoneNumbersApi.md#assignPhoneNumber) | **POST** /users/{userId}/phonenumberconfig/phonenumbers/ | Assigns phone numbers to the User
[**deletePhoneNumberAssignment**](PhoneNumbersApi.md#deletePhoneNumberAssignment) | **DELETE** /users/{userId}/phonenumberconfig/phonenumbers/{phoneNumberId} | Deletes the PhoneNumberAssignment
[**deletePhoneNumberAssignments**](PhoneNumbersApi.md#deletePhoneNumberAssignments) | **POST** /users/{userId}/phonenumberconfig/phonenumbers/delete | Deletes the PhoneNumberAssignments
[**getNumbersForAssignedPhone**](PhoneNumbersApi.md#getNumbersForAssignedPhone) | **GET** /users/{userId}/phoneconfig/phones/{phoneId}/numbers | Fetches a list of NumberForPhoneAssignment
[**getPhoneNumber**](PhoneNumbersApi.md#getPhoneNumber) | **GET** /phonenumbers/{phoneNumberId} | Fetch a PhoneNumber
[**getPhoneNumberAssignment**](PhoneNumbersApi.md#getPhoneNumberAssignment) | **GET** /users/{userId}/phonenumberconfig/phonenumbers/{phoneNumberId} | Fetches the PhoneNumberAssignment
[**getPhoneNumberConfig**](PhoneNumbersApi.md#getPhoneNumberConfig) | **GET** /users/{userId}/phonenumberconfig | Fetch the PhoneNumberConfig
[**getPhoneNumbers**](PhoneNumbersApi.md#getPhoneNumbers) | **GET** /phonenumbers | Retrive a list of all configured PhoneNumbers
[**listPhoneNumberAssignment**](PhoneNumbersApi.md#listPhoneNumberAssignment) | **GET** /users/{userId}/phonenumberconfig/phonenumbers/ | Fetches a list of assigned phone numbers
[**putPhoneNumberConfig**](PhoneNumbersApi.md#putPhoneNumberConfig) | **PUT** /users/{userId}/phonenumberconfig | Update the PhoneNumberConfig
[**updateNumbersForAssignedPhones**](PhoneNumbersApi.md#updateNumbersForAssignedPhones) | **PUT** /users/{userId}/phoneconfig/phones/{phoneId}/numbers | Updates the list of NumberForPhoneAssignment
[**updatePhoneNumberAssignments**](PhoneNumbersApi.md#updatePhoneNumberAssignments) | **PUT** /users/{userId}/phonenumberconfig/phonenumbers | Update PhoneNumberAssignments of the User


<a name="assignPhoneNumber"></a>
# **assignPhoneNumber**
> [PhoneNumberAssignment] assignPhoneNumber(userId, phoneNumberAssignments)

Assigns phone numbers to the User

Assigns phone numbers to the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

<a name="deletePhoneNumberAssignment"></a>
# **deletePhoneNumberAssignment**
> deletePhoneNumberAssignment(userId, phoneNumberId)

Deletes the PhoneNumberAssignment

Deletes the PhoneNumberAssignment from the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

<a name="getNumbersForAssignedPhone"></a>
# **getNumbersForAssignedPhone**
> [NumberForPhoneAssignment] getNumbersForAssignedPhone(userId, phoneId)

Fetches a list of NumberForPhoneAssignment

Fetches a list of NumberForPhoneAssignment of the User with the given {userId} and the Phone with the given {phoneId}.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

<a name="getPhoneNumber"></a>
# **getPhoneNumber**
> PhoneNumber getPhoneNumber(phoneNumberId)

Fetch a PhoneNumber

Fetch the PhoneNumber with the given {phoneNumberId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

var phoneNumberId = 56; // Number | Id of the PhoneNumber that will be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneNumber(phoneNumberId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **phoneNumberId** | **Number**| Id of the PhoneNumber that will be fetched | 

### Return type

[**PhoneNumber**](PhoneNumber.md)

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

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

<a name="getPhoneNumbers"></a>
# **getPhoneNumbers**
> [PhoneNumber] getPhoneNumbers(opts)

Retrive a list of all configured PhoneNumbers

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

var opts = { 
  'type': "type_example", // String | filter for the type of the PhoneNumber
  'assigned': true // Boolean | filter for only assigned or unassigned PhoneNumbers
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPhoneNumbers(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| filter for the type of the PhoneNumber | [optional] 
 **assigned** | **Boolean**| filter for only assigned or unassigned PhoneNumbers | [optional] 

### Return type

[**[PhoneNumber]**](PhoneNumber.md)

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

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

<a name="putPhoneNumberConfig"></a>
# **putPhoneNumberConfig**
> PhoneNumberConfig putPhoneNumberConfig(userId, phoneNumberConfig)

Update the PhoneNumberConfig

Update the PhoneNumberConfig of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

<a name="updateNumbersForAssignedPhones"></a>
# **updateNumbersForAssignedPhones**
> updateNumbersForAssignedPhones(userId, phoneId)

Updates the list of NumberForPhoneAssignment

Updates the list of NumberForPhoneAssignment of the User with the given {userId} and the Phone with the given {phoneId}. Only the active-flag can be changed. Elements in the list cannot be added or removed.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

<a name="updatePhoneNumberAssignments"></a>
# **updatePhoneNumberAssignments**
> [PhoneNumberAssignment] updatePhoneNumberAssignments(userId, phoneNumberAssignments)

Update PhoneNumberAssignments of the User

Update the PhoneNumberAssignment with the given {phoneNumberId} of the User with the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PhoneNumbersApi();

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

