# StarfaceRestApi.FunctionKey

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountId** | **String** | the accountId of the FunctionKey | 
**activateModuleIds** | **[String]** | Modules to activate | [optional] 
**addressBookFolderName** | **String** | AddressBookFolderName | [optional] 
**addressbookRequest** | **String** | Type of AddressbookRequest | [optional] 
**blfAccountId** | **Number** | AccountId of busy lamp field | [optional] 
**callListRequest** | **String** | Type of requested list | [optional] 
**directCallTargetnumber** | **String** | Number to call | [optional] 
**displayNumberId** | **Number** | Displaynumberid to signal | [optional] 
**dtmf** | **String** | Dtmf to send | [optional] 
**forwardType** | **String** | Type of forward | [optional] 
**functionKeyType** | **String** | The type of the FunctionKey determining the concrete FunctionKey implementation | 
**genericURL** | **String** | generic URL to send | [optional] 
**groupIds** | **[Number]** | Groupids to activate or deactivate | [optional] 
**id** | **String** | the Id of the FunctionKey | 
**name** | **String** | the display name of the FunctionKey | 
**poNumber** | **String** | Number of park and orbit position | [optional] 
**position** | **Number** | the position of the FunctionKey wthin its FunctionKeySet | 
**redirectNumberIds** | **[Number]** | NumberIds to redirect | [optional] 


<a name="AddressbookRequestEnum"></a>
## Enum: AddressbookRequestEnum


* `CONTACTLIST` (value: `"CONTACTLIST"`)

* `CONTACTSEARCH` (value: `"CONTACTSEARCH"`)




<a name="CallListRequestEnum"></a>
## Enum: CallListRequestEnum


* `INCOMING` (value: `"INCOMING"`)

* `OUTGOING` (value: `"OUTGOING"`)

* `MISSED` (value: `"MISSED"`)




<a name="ForwardTypeEnum"></a>
## Enum: ForwardTypeEnum


* `ALWAYS` (value: `"ALWAYS"`)

* `BUSY` (value: `"BUSY"`)

* `TIMEOUT` (value: `"TIMEOUT"`)




<a name="FunctionKeyTypeEnum"></a>
## Enum: FunctionKeyTypeEnum


* `SIGNALNUMBER` (value: `"SIGNALNUMBER"`)

* `SEPARATOR` (value: `"SEPARATOR"`)

* `QUICKDIAL` (value: `"QUICKDIAL"`)

* `PHONEGENERICURL` (value: `"PHONEGENERICURL"`)

* `PHONEDTMF` (value: `"PHONEDTMF"`)

* `ADDRESSBOOK` (value: `"ADDRESSBOOK"`)

* `PHONECALLLIST` (value: `"PHONECALLLIST"`)

* `PARKANDORBIT` (value: `"PARKANDORBIT"`)

* `MODULEACTIVATION` (value: `"MODULEACTIVATION"`)

* `GROUPLOGIN` (value: `"GROUPLOGIN"`)

* `FORWARDNUMBER` (value: `"FORWARDNUMBER"`)

* `FORWARD` (value: `"FORWARD"`)

* `DONOTDISTURB` (value: `"DONOTDISTURB"`)

* `COMPLETIONOFCALLSTOBUSYSUBSCRIBER` (value: `"COMPLETIONOFCALLSTOBUSYSUBSCRIBER"`)

* `BUSYLAMPFIELD` (value: `"BUSYLAMPFIELD"`)




