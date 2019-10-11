# StarfaceRestApi.GroupsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](GroupsApi.md#createGroup) | **POST** /groups | Create a new group
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /groups/{groupid} | Delete a group with id
[**getGroup**](GroupsApi.md#getGroup) | **GET** /groups/{groupid} | Retrieve a group with id
[**getGroups**](GroupsApi.md#getGroups) | **GET** /groups | Retrieve a list of groups
[**saveGroup**](GroupsApi.md#saveGroup) | **PUT** /groups | Save a group


<a name="createGroup"></a>
# **createGroup**
> createGroup(group)

Create a new group

Create a STARFACE group.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.GroupsApi();

var group = new StarfaceRestApi.Group(); // Group | Group to save.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createGroup(group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)| Group to save. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupid)

Delete a group with id

Delete a STARFACE group.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.GroupsApi();

var groupid = 56; // Number | Id of the group.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteGroup(groupid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **Number**| Id of the group. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroup"></a>
# **getGroup**
> Group getGroup(groupid)

Retrieve a group with id

Retrieve a STARFACE group.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.GroupsApi();

var groupid = 56; // Number | Id of the group.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroup(groupid, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupid** | **Number**| Id of the group. | 

### Return type

[**Group**](Group.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroups"></a>
# **getGroups**
> [GroupListItem] getGroups(opts)

Retrieve a list of groups

Retrieve a list of STARFACE groups.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.GroupsApi();

var opts = { 
  'searchTerm': "searchTerm_example" // String | The searchTerm to query groups.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroups(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **searchTerm** | **String**| The searchTerm to query groups. | [optional] 

### Return type

[**[GroupListItem]**](GroupListItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveGroup"></a>
# **saveGroup**
> saveGroup(group)

Save a group

Save a STARFACE group.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.GroupsApi();

var group = new StarfaceRestApi.Group(); // Group | Group to save.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveGroup(group, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **group** | [**Group**](Group.md)| Group to save. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

