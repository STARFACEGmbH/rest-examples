# StarfaceRestApi.FunctionKeysApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createFunctionKey**](FunctionKeysApi.md#createFunctionKey) | **POST** /functionkeysets/{fkSetId}/ | 
[**deleteFunctionKey**](FunctionKeysApi.md#deleteFunctionKey) | **DELETE** /functionkeysets/{fkSetId}/{keyId} | 
[**getEditFunctionKey**](FunctionKeysApi.md#getEditFunctionKey) | **GET** /functionkeysets/{fkSetId}/edit/{keyId} | 
[**getEditFunctionKeyDefaults**](FunctionKeysApi.md#getEditFunctionKeyDefaults) | **GET** /functionkeysets/edit/defaults | 
[**getFunctionKey**](FunctionKeysApi.md#getFunctionKey) | **GET** /functionkeysets/{fkSetId}/{keyId} | 
[**getFunctionKeySets**](FunctionKeysApi.md#getFunctionKeySets) | **GET** /functionkeysets | Retrieve a list of FunctionKeySets
[**getFunctionKeys**](FunctionKeysApi.md#getFunctionKeys) | **GET** /functionkeysets/{fkSetId}/ | 
[**getPhonesForFunctionKeySet**](FunctionKeysApi.md#getPhonesForFunctionKeySet) | **GET** /functionkeysets/{fkSetId}/phones | 
[**putFunctionKeySetOnPhone**](FunctionKeysApi.md#putFunctionKeySetOnPhone) | **PUT** /functionkeysets/{fkSetId}/phone | 
[**updateFunctionKey**](FunctionKeysApi.md#updateFunctionKey) | **PUT** /functionkeysets/{fkSetId}/{keyId} | 
[**updateFunctionKeySet**](FunctionKeysApi.md#updateFunctionKeySet) | **PUT** /functionkeysets/{fkSetId}/ | 


<a name="createFunctionKey"></a>
# **createFunctionKey**
> FunctionKey createFunctionKey(fkSetId, functionKey, opts)



Creates a new FunctionKey and appends it to the end of the FunctionKeySet if no position is provided. Otherwise the Functionkey will shift other keys aside.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

var functionKey = new StarfaceRestApi.FunctionKey(); // FunctionKey | The new functionKey to create

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
apiInstance.createFunctionKey(fkSetId, functionKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **functionKey** | [**FunctionKey**](FunctionKey.md)| The new functionKey to create | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**FunctionKey**](FunctionKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteFunctionKey"></a>
# **deleteFunctionKey**
> deleteFunctionKey(fkSetId, keyId, opts)



Delete the FunctionKey with the given {keyId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

var keyId = "keyId_example"; // String | The Id of the FunctionKey

var opts = { 
  'actOnBehalfOf': "actOnBehalfOf_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteFunctionKey(fkSetId, keyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **keyId** | **String**| The Id of the FunctionKey | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEditFunctionKey"></a>
# **getEditFunctionKey**
> EditFunctionKey getEditFunctionKey(fkSetId, keyId, opts)



Returns edit informations for the given key {keyId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

var keyId = "keyId_example"; // String | The Id of the FunctionKey

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
apiInstance.getEditFunctionKey(fkSetId, keyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **keyId** | **String**| The Id of the FunctionKey | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**EditFunctionKey**](EditFunctionKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEditFunctionKeyDefaults"></a>
# **getEditFunctionKeyDefaults**
> EditFunctionKey getEditFunctionKeyDefaults()



Returns edit possible edit informations

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEditFunctionKeyDefaults(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**EditFunctionKey**](EditFunctionKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFunctionKey"></a>
# **getFunctionKey**
> FunctionKey getFunctionKey(fkSetId, keyId, opts)



Fetch the FunctionKey with the given {keyId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

var keyId = "keyId_example"; // String | The Id of the FunctionKey

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
apiInstance.getFunctionKey(fkSetId, keyId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **keyId** | **String**| The Id of the FunctionKey | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**FunctionKey**](FunctionKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFunctionKeySets"></a>
# **getFunctionKeySets**
> [FunctionKeySet] getFunctionKeySets(opts)

Retrieve a list of FunctionKeySets

Retrieve a list of FunctionKeySets for the current user.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

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
apiInstance.getFunctionKeySets(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**[FunctionKeySet]**](FunctionKeySet.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFunctionKeys"></a>
# **getFunctionKeys**
> [FunctionKey] getFunctionKeys(fkSetId, opts)



Retrieve the list of FunctionKeys contained in the given FunctionKeySet.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

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
apiInstance.getFunctionKeys(fkSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**[FunctionKey]**](FunctionKey.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPhonesForFunctionKeySet"></a>
# **getPhonesForFunctionKeySet**
> [&#39;String&#39;] getPhonesForFunctionKeySet(fkSetId, opts)



Fetch the phones for functionkeyset with the given {fkSetId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

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
apiInstance.getPhonesForFunctionKeySet(fkSetId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

**[&#39;String&#39;]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putFunctionKeySetOnPhone"></a>
# **putFunctionKeySetOnPhone**
> putFunctionKeySetOnPhone(fkSetId, phone, opts)



Provisions a phone with the given function key set

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

var phone = "phone_example"; // String | The phone

var opts = { 
  'actOnBehalfOf': "actOnBehalfOf_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putFunctionKeySetOnPhone(fkSetId, phone, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **phone** | **String**| The phone | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFunctionKey"></a>
# **updateFunctionKey**
> updateFunctionKey(fkSetId, keyId, functionKey, opts)



Update the FunctionKey with the given {keyId}. NOTE keys on phones must be refreshed (GET /{fkSetId}/phones and PUT /{fkSetId}/phone).

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

var keyId = "keyId_example"; // String | The Id of the FunctionKey

var functionKey = new StarfaceRestApi.FunctionKey(); // FunctionKey | The new functionKey to create

var opts = { 
  'actOnBehalfOf': "actOnBehalfOf_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFunctionKey(fkSetId, keyId, functionKey, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **keyId** | **String**| The Id of the FunctionKey | 
 **functionKey** | [**FunctionKey**](FunctionKey.md)| The new functionKey to create | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateFunctionKeySet"></a>
# **updateFunctionKeySet**
> updateFunctionKeySet(fkSetId, functionKeys, opts)



Update the FunctionKeySet with the given {fkSetId}. This operation can be used to reorder the FunctionKeys contained in this set. NOTE keys on phones must be refreshed (GET /{fkSetId}/phones and PUT /{fkSetId}/phone).

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.FunctionKeysApi();

var fkSetId = "fkSetId_example"; // String | The Id of the FunctionKeySet

var functionKeys = [new StarfaceRestApi.FunctionKey()]; // [FunctionKey] | The updated FunctionKeySet to reorder FunctionKeys

var opts = { 
  'actOnBehalfOf': "actOnBehalfOf_example" // String | Perform an operation on behalf of another user. This requires administrative privileges.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateFunctionKeySet(fkSetId, functionKeys, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fkSetId** | **String**| The Id of the FunctionKeySet | 
 **functionKeys** | [**[FunctionKey]**](FunctionKey.md)| The updated FunctionKeySet to reorder FunctionKeys | 
 **actOnBehalfOf** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

