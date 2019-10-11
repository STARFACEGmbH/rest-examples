# StarfaceRestApi.CallServicesApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getCallService**](CallServicesApi.md#getCallService) | **GET** /callservices/{serviceId} | Fetch a CallService
[**getCallServices**](CallServicesApi.md#getCallServices) | **GET** /callservices | Retrive a list of all available call services


<a name="getCallService"></a>
# **getCallService**
> CallService getCallService(serviceId)

Fetch a CallService

Fetch the CallService with the given {serviceId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.CallServicesApi();

var serviceId = 56; // Number | Id of the CallService that will be fetched


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallService(serviceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serviceId** | **Number**| Id of the CallService that will be fetched | 

### Return type

[**CallService**](CallService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCallServices"></a>
# **getCallServices**
> [CallService] getCallServices(opts)

Retrive a list of all available call services

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.CallServicesApi();

var opts = { 
  'type': "type_example" // String | filter for a call service type. If none or an invalid type is provided the type filter will default to FOR_USER_ACCOUNTS
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCallServices(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **type** | **String**| filter for a call service type. If none or an invalid type is provided the type filter will default to FOR_USER_ACCOUNTS | [optional] 

### Return type

[**[CallService]**](CallService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

