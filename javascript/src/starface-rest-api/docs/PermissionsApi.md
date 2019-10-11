# StarfaceRestApi.PermissionsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPermissions**](PermissionsApi.md#getPermissions) | **GET** /permissions | Retrieve a list of permissions
[**getUserPermissions**](PermissionsApi.md#getUserPermissions) | **GET** /permissions/users/{userId} | Retrieve a list of permissions for user
[**getUsersWithPermission**](PermissionsApi.md#getUsersWithPermission) | **GET** /permissions/{permissionId}/users | Retrieve users with specified permission
[**putUserPermissions**](PermissionsApi.md#putUserPermissions) | **PUT** /permissions/users/{userId} | Update a user&#39;s permissions
[**updatePermissionForUsers**](PermissionsApi.md#updatePermissionForUsers) | **PUT** /permissions/{permissionId}/users | Update permission for users


<a name="getPermissions"></a>
# **getPermissions**
> [PermissionInfo] getPermissions()

Retrieve a list of permissions

Retrieve a list of all existing STARFACE permissions.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PermissionsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPermissions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[PermissionInfo]**](PermissionInfo.md)

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

var apiInstance = new StarfaceRestApi.PermissionsApi();

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

<a name="getUsersWithPermission"></a>
# **getUsersWithPermission**
> [User] getUsersWithPermission(permissionId)

Retrieve users with specified permission

Retrieve users which have permission with the given {permissionId}

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PermissionsApi();

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

<a name="putUserPermissions"></a>
# **putUserPermissions**
> putUserPermissions(userId, permissions)

Update a user&#39;s permissions

Set the STARFACE user&#39;s permissions with the given {userId}. Permissions user had before and not specified in this query will be removed

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PermissionsApi();

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

<a name="updatePermissionForUsers"></a>
# **updatePermissionForUsers**
> updatePermissionForUsers(usersList, permissionId, granted)

Update permission for users

Update permission with the given {permissionId} for users specified in usersList. Permission will be granted if \&quot;granted\&quot; parameter established to true and removed if false

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.PermissionsApi();

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

