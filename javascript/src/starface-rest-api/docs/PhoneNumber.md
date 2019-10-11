# StarfaceRestApi.PhoneNumber

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**assignedGroupAccountId** | **Number** | the id of the account this phone number is assigned to or null if it is not assigned to an account | [optional] 
**assignedModuleInstanceId** | **String** | the id of the module instance this phone number is assigned to or null if it is not assigned to a module | [optional] 
**assignedServiceId** | **Number** | the id of the service this phone number is assigned to or null | [optional] 
**assignedUserAccountId** | **Number** | the id of the account this phone number is assigned to or null if it is not assigned to an account | [optional] 
**exitCode** | **String** | the exit code of the phone number | [optional] 
**id** | **Number** | the Id of the phone number | 
**localPrefix** | **String** | the local prefix of the phone number | [optional] 
**nationalPrefix** | **String** | the national prefix of the phone number | [optional] 
**_number** | **String** | the number itself (extention) | 
**numberBlockId** | **Number** | the id of the corresponding NumberBlock | [optional] 
**type** | **String** | the type of the phone number | 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `INVALID` (value: `"INVALID"`)

* `INTERNAL` (value: `"INTERNAL"`)

* `EXTERNAL` (value: `"EXTERNAL"`)

* `RESERVED` (value: `"RESERVED"`)

* `NT` (value: `"NT"`)

* `DISPLAY` (value: `"DISPLAY"`)

* `FXO` (value: `"FXO"`)




