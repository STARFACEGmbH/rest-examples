# StarfaceRestApi.ConferencesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteManagedConference**](ConferencesApi.md#deleteManagedConference) | **DELETE** /users/{userId}/managedConferences/{conferenceId} | Delete a managed conference
[**getConferenceConfiguration**](ConferencesApi.md#getConferenceConfiguration) | **GET** /conferenceConfiguration | Fetch default values for new managed conferences
[**getDefaultTexts**](ConferencesApi.md#getDefaultTexts) | **GET** /conferenceConfiguration/defaults | Fetch the texts for conference emails
[**getManagedConference**](ConferencesApi.md#getManagedConference) | **GET** /users/{userId}/managedConferences/{conferenceId} | Fetch ManagedConference
[**getManagedConferenceList**](ConferencesApi.md#getManagedConferenceList) | **GET** /users/{userId}/managedConferences | Fetch ManagedConferenceSummaryList
[**postManagedConference**](ConferencesApi.md#postManagedConference) | **POST** /users/{userId}/managedConferences | Create a new managed conference
[**putConferenceConfiguration**](ConferencesApi.md#putConferenceConfiguration) | **PUT** /conferenceConfiguration | Update the Conference Configuration
[**putManagedConference**](ConferencesApi.md#putManagedConference) | **PUT** /users/{userId}/managedConferences/{conferenceId} | Update ManagedConference
[**startManagedConference**](ConferencesApi.md#startManagedConference) | **PUT** /users/{userId}/managedConferences/{conferenceId}/start | Start ManagedConference


<a name="deleteManagedConference"></a>
# **deleteManagedConference**
> deleteManagedConference(userId, conferenceId)

Delete a managed conference

Delete the managed conference with the given {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

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

<a name="getConferenceConfiguration"></a>
# **getConferenceConfiguration**
> ConferenceConfiguration getConferenceConfiguration()

Fetch default values for new managed conferences

Fetch the ConferenceConfiguration

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getConferenceConfiguration(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ConferenceConfiguration**](ConferenceConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDefaultTexts"></a>
# **getDefaultTexts**
> ConferenceConfigurationTexts getDefaultTexts(opts)

Fetch the texts for conference emails

Fetch the texts for conference emails

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

var opts = { 
  'locale': "locale_example" // String | locale for default text
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getDefaultTexts(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale** | **String**| locale for default text | [optional] 

### Return type

[**ConferenceConfigurationTexts**](ConferenceConfigurationTexts.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManagedConference"></a>
# **getManagedConference**
> ManagedConference getManagedConference(userId, conferenceId)

Fetch ManagedConference

Fetch the ManagedConference of the User with the given {userId} and {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

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

var apiInstance = new StarfaceRestApi.ConferencesApi();

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

<a name="postManagedConference"></a>
# **postManagedConference**
> postManagedConference(userId, conference)

Create a new managed conference

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

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

<a name="putConferenceConfiguration"></a>
# **putConferenceConfiguration**
> putConferenceConfiguration(userId, conferenceConfiguration)

Update the Conference Configuration

Update the given conference configuration by the given {userId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

var userId = 56; // Number | Id of the User

var conferenceConfiguration = new StarfaceRestApi.ConferenceConfiguration(); // ConferenceConfiguration | conferenceConfiguration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putConferenceConfiguration(userId, conferenceConfiguration, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| Id of the User | 
 **conferenceConfiguration** | [**ConferenceConfiguration**](ConferenceConfiguration.md)| conferenceConfiguration | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putManagedConference"></a>
# **putManagedConference**
> putManagedConference(userId, conferenceId, conference)

Update ManagedConference

Update the ManagedConference of the User with the given {userId} and {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

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

<a name="startManagedConference"></a>
# **startManagedConference**
> startManagedConference(userId, conferenceId, opts)

Start ManagedConference

Start the ManagedConference of the User with the given {userId} and {conferenceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ConferencesApi();

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

