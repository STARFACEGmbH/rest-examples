# StarfaceRestApi.VoicemailBoxesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVoicemailbox**](VoicemailBoxesApi.md#createVoicemailbox) | **POST** /voicemailboxes | Create a new voicemailbox
[**deleteVoicemailbox**](VoicemailBoxesApi.md#deleteVoicemailbox) | **DELETE** /voicemailboxes/{voicemailboxid} | Delete a voicemailbox with id
[**getVoicemailbox**](VoicemailBoxesApi.md#getVoicemailbox) | **GET** /voicemailboxes/{voicemailboxid} | Retrieve a voicemailbox with id
[**getVoicemailboxes**](VoicemailBoxesApi.md#getVoicemailboxes) | **GET** /voicemailboxes | Retrieve a list of voicemailboxes
[**saveVoicemailbox**](VoicemailBoxesApi.md#saveVoicemailbox) | **PUT** /voicemailboxes | Save a voicemailbox


<a name="createVoicemailbox"></a>
# **createVoicemailbox**
> createVoicemailbox(voicemailbox)

Create a new voicemailbox

Create a STARFACE voicemailbox.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.VoicemailBoxesApi();

var voicemailbox = new StarfaceRestApi.Voicemailbox(); // Voicemailbox | Voicemailbox to save.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createVoicemailbox(voicemailbox, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voicemailbox** | [**Voicemailbox**](Voicemailbox.md)| Voicemailbox to save. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteVoicemailbox"></a>
# **deleteVoicemailbox**
> deleteVoicemailbox(voicemailboxid)

Delete a voicemailbox with id

Delete a STARFACE voicemailbox.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.VoicemailBoxesApi();

var voicemailboxid = 56; // Number | Id of the voicemailbox.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteVoicemailbox(voicemailboxid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voicemailboxid** | **Number**| Id of the voicemailbox. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVoicemailbox"></a>
# **getVoicemailbox**
> Voicemailbox getVoicemailbox(voicemailboxid)

Retrieve a voicemailbox with id

Retrieve a list of STARFACE voicemailboxes the current user can access.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.VoicemailBoxesApi();

var voicemailboxid = 56; // Number | Id of the voicemailbox.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoicemailbox(voicemailboxid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voicemailboxid** | **Number**| Id of the voicemailbox. | 

### Return type

[**Voicemailbox**](Voicemailbox.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVoicemailboxes"></a>
# **getVoicemailboxes**
> [VoicemailboxListItem] getVoicemailboxes(opts)

Retrieve a list of voicemailboxes

Retrieve a list of STARFACE voicemailboxes the current user can access.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.VoicemailBoxesApi();

var opts = { 
  'searchTerm': "searchTerm_example" // String | The searchTerm to query voicemailboxes.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVoicemailboxes(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**| The searchTerm to query voicemailboxes. | [optional] 

### Return type

[**[VoicemailboxListItem]**](VoicemailboxListItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveVoicemailbox"></a>
# **saveVoicemailbox**
> saveVoicemailbox(voicemailbox)

Save a voicemailbox

Save a STARFACE voicemailbox.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.VoicemailBoxesApi();

var voicemailbox = new StarfaceRestApi.Voicemailbox(); // Voicemailbox | Voicemailbox to save.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveVoicemailbox(voicemailbox, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **voicemailbox** | [**Voicemailbox**](Voicemailbox.md)| Voicemailbox to save. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

