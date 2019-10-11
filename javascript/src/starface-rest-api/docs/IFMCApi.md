# StarfaceRestApi.IFMCApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteFmcPhone**](IFMCApi.md#deleteFmcPhone) | **DELETE** /fmcPhones/{fmcId} | Delete a FmcPhone
[**getFmcPhone**](IFMCApi.md#getFmcPhone) | **GET** /fmcPhones/{fmcId} | Fetch a FmcPhone
[**getFmcPhones**](IFMCApi.md#getFmcPhones) | **GET** /fmcPhones | Retrieve a list of FmcPhones
[**postFmcPhone**](IFMCApi.md#postFmcPhone) | **POST** /fmcPhones | Create a new FmcPhone
[**putFmcPhone**](IFMCApi.md#putFmcPhone) | **PUT** /fmcPhones/{fmcId} | Update a FmcPhone


<a name="deleteFmcPhone"></a>
# **deleteFmcPhone**
> deleteFmcPhone(fmcId, opts)

Delete a FmcPhone

Delete the FmcPhone with the given {fmcId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.IFMCApi();

var fmcId = "fmcId_example"; // String | Id of the FmcPhone that will be deleted

var opts = { 
  'userId': "userId_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFmcPhone(fmcId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fmcId** | **String**| Id of the FmcPhone that will be deleted | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFmcPhone"></a>
# **getFmcPhone**
> FmcPhone getFmcPhone(fmcId, opts)

Fetch a FmcPhone

Fetch the FmcPhone with the given {fmcId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.IFMCApi();

var fmcId = "fmcId_example"; // String | Id of the FmcPhone that will be fetched

var opts = { 
  'userId': "userId_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFmcPhone(fmcId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fmcId** | **String**| Id of the FmcPhone that will be fetched | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**FmcPhone**](FmcPhone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFmcPhones"></a>
# **getFmcPhones**
> [FmcPhone] getFmcPhones(opts)

Retrieve a list of FmcPhones

Retrieve a list of STARFACE IFMC phones for the current user.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.IFMCApi();

var opts = { 
  'userId': "userId_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFmcPhones(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**[FmcPhone]**](FmcPhone.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postFmcPhone"></a>
# **postFmcPhone**
> postFmcPhone(fmcPhone, opts)

Create a new FmcPhone

Create a new FmcPhone

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.IFMCApi();

var fmcPhone = new StarfaceRestApi.FmcPhone(); // FmcPhone | FmcPhone object to add

var opts = { 
  'userId': "userId_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.postFmcPhone(fmcPhone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fmcPhone** | [**FmcPhone**](FmcPhone.md)| FmcPhone object to add | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFmcPhone"></a>
# **putFmcPhone**
> putFmcPhone(fmcId, fmcPhone, opts)

Update a FmcPhone

Update the FmcPhone with the given {fmcId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.IFMCApi();

var fmcId = "fmcId_example"; // String | Id of the FmcPhone that will be updated

var fmcPhone = new StarfaceRestApi.FmcPhone(); // FmcPhone | FmcPhone-Object with updated values that should be applied

var opts = { 
  'userId': "userId_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putFmcPhone(fmcId, fmcPhone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fmcId** | **String**| Id of the FmcPhone that will be updated | 
 **fmcPhone** | [**FmcPhone**](FmcPhone.md)| FmcPhone-Object with updated values that should be applied | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

