# StarfaceRestApi.User

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **String** | the email address of the user | 
**familyName** | **String** | the family name of the user | 
**faxCallerId** | **String** | the callerId for faxes send by this user | [optional] 
**faxCoverPage** | **Boolean** | whether to send a cover page for faxes send by this user | [optional] 
**faxEmailJournal** | **Boolean** | whether the user recieves a email journal of send faxes | [optional] 
**faxHeader** | **String** | the header for faxes send by this user | [optional] 
**firstName** | **String** | the name of the user | 
**id** | **Number** | the Id of the user | [optional] 
**language** | **String** | the language of a user (default, de, en, ...) | 
**login** | **String** | the login number for this user. The login number will be used as Jabber Id | 
**missedCallReport** | **Boolean** | whether the user recieves a report on missed calls | [optional] 
**namespace** | **String** | the namespace defining the location of an user account | [optional] 
**password** | **String** | defines a new password when a user is created or updated. This field will be empty when a user is fetched. | [optional] 
**personId** | **String** | the Id of the corresponding person contact object | [optional] 


