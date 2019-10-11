# StarfaceRestApi.ContactsApi

All URIs are relative to *https://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteContact**](ContactsApi.md#deleteContact) | **DELETE** /contacts/{contactId} | Delete a contact
[**deleteTag**](ContactsApi.md#deleteTag) | **DELETE** /contacts/tags/{tagId} | Delete a tag
[**getContact**](ContactsApi.md#getContact) | **GET** /contacts/{contactId} | Fetch a contact
[**getContactList**](ContactsApi.md#getContactList) | **GET** /contacts | Retrieve a list of contacts
[**getScheme**](ContactsApi.md#getScheme) | **GET** /contacts/scheme | Get the Contact-Scheme
[**getTag**](ContactsApi.md#getTag) | **GET** /contacts/tags/{tagId} | Fetch a tag
[**getTagList**](ContactsApi.md#getTagList) | **GET** /contacts/tags | Retrieve a list of tags
[**postContact**](ContactsApi.md#postContact) | **POST** /contacts | Create a new contact
[**postTag**](ContactsApi.md#postTag) | **POST** /contacts/tags | Create a new tag
[**putContact**](ContactsApi.md#putContact) | **PUT** /contacts/{contactId} | Update a contact
[**putTag**](ContactsApi.md#putTag) | **PUT** /contacts/tags/{tagId} | Update a tag


<a name="deleteContact"></a>
# **deleteContact**
> deleteContact(contactId)

Delete a contact

Delete the contact with the given {contactId} from the addressbook

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var contactId = "contactId_example"; // String | id of the contact


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteContact(contactId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| id of the contact | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTag"></a>
# **deleteTag**
> deleteTag(tagId)

Delete a tag

Delete the tag with the given {tagId} from the addressbook

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var tagId = "tagId_example"; // String | id of the Tag


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTag(tagId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| id of the Tag | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContact"></a>
# **getContact**
> Contact getContact(contactId, opts)

Fetch a contact

Fetch the contact with the given {contactId} from the addressbook

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var contactId = "contactId_example"; // String | id of the contact

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
apiInstance.getContact(contactId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| id of the contact | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContactList"></a>
# **getContactList**
> ContactList getContactList(opts)

Retrieve a list of contacts

Retrieve a list of contacts this user can access.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var opts = { 
  'userId': "userId_example", // String | Perform an operation on behalf of another user. This requires administrative privileges.
  'tags': ["tags_example"], // [String] | comma seperated list of tags to filter for
  'searchTerms': "searchTerms_example", // String | the string to search for ... to be defined
  'page': 56, // Number | The page number for this request
  'pagesize': 56, // Number | The page size to use. Default is 20
  'sort': "sort_example", // String | The fieldname to sort for
  'sortdirection': "sortdirection_example" // String | The fieldname to order for
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContactList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 
 **tags** | [**[String]**](String.md)| comma seperated list of tags to filter for | [optional] 
 **searchTerms** | **String**| the string to search for ... to be defined | [optional] 
 **page** | **Number**| The page number for this request | [optional] 
 **pagesize** | **Number**| The page size to use. Default is 20 | [optional] 
 **sort** | **String**| The fieldname to sort for | [optional] 
 **sortdirection** | **String**| The fieldname to order for | [optional] 

### Return type

[**ContactList**](ContactList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getScheme"></a>
# **getScheme**
> ContactsScheme getScheme(opts)

Get the Contact-Scheme

Get the Contact-Scheme

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var opts = { 
  'lang': "lang_example" // String | Language identifiers as specified by RFC 3066 for i18nDisplayName
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getScheme(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lang** | **String**| Language identifiers as specified by RFC 3066 for i18nDisplayName | [optional] 

### Return type

[**ContactsScheme**](ContactsScheme.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTag"></a>
# **getTag**
> Tag getTag(tagId, opts)

Fetch a tag

Fetch the tag with the given {tagId} from the addressbook

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var tagId = "tagId_example"; // String | id of the Tag

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
apiInstance.getTag(tagId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| id of the Tag | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTagList"></a>
# **getTagList**
> [Tag] getTagList(opts)

Retrieve a list of tags

Retrieve a list of tags this user can access.

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var opts = { 
  'userId': "userId_example", // String | Perform an operation on behalf of another user. This requires administrative privileges.
  'page': 56, // Number | The page number for this request
  'pagesize': 56, // Number | The page size to use. Default is 20
  'sort': "sort_example", // String | The fieldname to sort for
  'sortdirection': "sortdirection_example" // String | The fieldname to order for
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTagList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 
 **page** | **Number**| The page number for this request | [optional] 
 **pagesize** | **Number**| The page size to use. Default is 20 | [optional] 
 **sort** | **String**| The fieldname to sort for | [optional] 
 **sortdirection** | **String**| The fieldname to order for | [optional] 

### Return type

[**[Tag]**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postContact"></a>
# **postContact**
> Contact postContact(contact, opts)

Create a new contact

Create a new contact

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var contact = new StarfaceRestApi.Contact(); // Contact | user to add to the system

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
apiInstance.postContact(contact, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact** | [**Contact**](Contact.md)| user to add to the system | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="postTag"></a>
# **postTag**
> Tag postTag(tag, opts)

Create a new tag

Create a new tag

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var tag = new StarfaceRestApi.Tag(); // Tag | tag to add to the system

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
apiInstance.postTag(tag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tag** | [**Tag**](Tag.md)| tag to add to the system | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

[**Tag**](Tag.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putContact"></a>
# **putContact**
> putContact(contactId, contact, opts)

Update a contact

Updates the contact with the given {contactId} from the provided payload

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var contactId = "contactId_example"; // String | id of the contact

var contact = new StarfaceRestApi.Contact(); // Contact | updated contact

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
apiInstance.putContact(contactId, contact, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contactId** | **String**| id of the contact | 
 **contact** | [**Contact**](Contact.md)| updated contact | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="putTag"></a>
# **putTag**
> putTag(tagId, tag, opts)

Update a tag

Updates the tag with the given {tagId} from the addressbook

### Example
```javascript
var StarfaceRestApi = require('starface_rest_api');

var apiInstance = new StarfaceRestApi.ContactsApi();

var tagId = "tagId_example"; // String | id of the Tag

var tag = new StarfaceRestApi.Tag(); // Tag | updated tag

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
apiInstance.putTag(tagId, tag, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tagId** | **String**| id of the Tag | 
 **tag** | [**Tag**](Tag.md)| updated tag | 
 **userId** | **String**| Perform an operation on behalf of another user. This requires administrative privileges. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

