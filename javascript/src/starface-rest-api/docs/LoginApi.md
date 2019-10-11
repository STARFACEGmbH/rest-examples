# StarfaceRestApi.LoginApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getLogin**](LoginApi.md#getLogin) | **GET** /login | Get a template Login-Object filled with loginType and nonce
[**login**](LoginApi.md#login) | **POST** /login | Login to the Rest-Service
[**logout**](LoginApi.md#logout) | **DELETE** /login | invalidate the provided authToken.


<a name="getLogin"></a>
# **getLogin**
> Login getLogin()

Get a template Login-Object filled with loginType and nonce

This endpoint returns a template of an Login-Object that proviedes the loginType required by the Server and a nonce. The template Login-Object can then be used to authorize a user by sending a POST-Request to this endpoint providing the users secret. See the description of this endpoind&#39;s POST-Request on how to derive the secret from a users loginId and password.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.LoginApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLogin(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Login**](Login.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="login"></a>
# **login**
> AuthToken login(login)

Login to the Rest-Service

This endpoint is used to login to the STARFACE Rest-Service. By providing a template Login-Object from this endpoints GET-Request with the users secret. If the loginType is INTERNAL the secret can be calculated with &lt;login&gt;:SHA512(&lt;loginId&gt;&lt;nonce&gt;SHA512(&lt;password&gt;)). For loginType ACTIVE_DIRECTORY the secret will be BASE64(loginId+nonce+password). For security reasons it&#39;s recommended to use HTTPS over HTTP for the login. The returned token must then be used in a HTTP header paramether named \&quot;authToken\&quot; in order to use this login.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.LoginApi();

var login = new StarfaceRestApi.Login(); // Login | Login-Object with the users secret.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.login(login, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **login** | [**Login**](Login.md)| Login-Object with the users secret. | 

### Return type

[**AuthToken**](AuthToken.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="logout"></a>
# **logout**
> logout(authToken)

invalidate the provided authToken.

User for the given authToken will be logged out. The authToken will be invalidated

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.LoginApi();

var authToken = "authToken_example"; // String | the authToken to check


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.logout(authToken, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authToken** | **String**| the authToken to check | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

