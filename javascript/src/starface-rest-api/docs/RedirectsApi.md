# StarfaceRestApi.RedirectsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRedirects**](RedirectsApi.md#getRedirects) | **GET** /redirects | Retrieve a list of redirects
[**redirectsRedirectIdGet**](RedirectsApi.md#redirectsRedirectIdGet) | **GET** /redirects/{redirectId} | Fetch a Redirection
[**redirectsRedirectIdPut**](RedirectsApi.md#redirectsRedirectIdPut) | **PUT** /redirects/{redirectId} | Update a Redirection


<a name="getRedirects"></a>
# **getRedirects**
> [Redirection] getRedirects(opts)

Retrieve a list of redirects

Retrieve a list of redirects for the current user.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.RedirectsApi();

var opts = { 
  'actOnBehalfOf': "actOnBehalfOf_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRedirects(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**[Redirection]**](Redirection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="redirectsRedirectIdGet"></a>
# **redirectsRedirectIdGet**
> Redirection redirectsRedirectIdGet(redirectId, opts)

Fetch a Redirection

Fetch the Redirection with the given {redirectId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.RedirectsApi();

var redirectId = "redirectId_example"; // String | Id of the Redirection that will be fetched

var opts = { 
  'actOnBehalfOf': "actOnBehalfOf_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.redirectsRedirectIdGet(redirectId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| Id of the Redirection that will be fetched | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**Redirection**](Redirection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="redirectsRedirectIdPut"></a>
# **redirectsRedirectIdPut**
> Redirection redirectsRedirectIdPut(redirectId, redirection, opts)

Update a Redirection

Update the Redirection with the given {redirectId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.RedirectsApi();

var redirectId = "redirectId_example"; // String | Id of the Redirection that will be updated

var redirection = new StarfaceRestApi.Redirection(); // Redirection | Redirection-Object with updated values that should be applied

var opts = { 
  'actOnBehalfOf': "actOnBehalfOf_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.redirectsRedirectIdPut(redirectId, redirection, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **redirectId** | **String**| Id of the Redirection that will be updated | 
 **redirection** | [**Redirection**](Redirection.md)| Redirection-Object with updated values that should be applied | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**Redirection**](Redirection.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

