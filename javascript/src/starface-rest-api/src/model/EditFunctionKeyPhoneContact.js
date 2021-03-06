/**
 * STARFACE Rest Api
 * A Rest API for STARFACE
 *
 * OpenAPI spec version: 6.7.0.22
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.EditFunctionKeyPhoneContact = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EditFunctionKeyPhoneContact model module.
   * @module model/EditFunctionKeyPhoneContact
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>EditFunctionKeyPhoneContact</code>.
   * A representation of a EditFunctionKeyPhoneContact Form
   * @alias module:model/EditFunctionKeyPhoneContact
   * @class
   * @param addressbookRequest {module:model/EditFunctionKeyPhoneContact.AddressbookRequestEnum} the addressbookRequest of the FunctionKey
   * @param addressbookRequests {Array.<String>} the possible request types of the adressbook
   * @param folders {Array.<String>} the folders of the FunctionKey
   * @param name {String} the name of the FunctionKey
   * @param selectedFolder {String} the selectedFolder of the FunctionKey
   */
  var exports = function(addressbookRequest, addressbookRequests, folders, name, selectedFolder) {
    var _this = this;

    _this['addressbookRequest'] = addressbookRequest;
    _this['addressbookRequests'] = addressbookRequests;
    _this['folders'] = folders;
    _this['name'] = name;
    _this['selectedFolder'] = selectedFolder;
  };

  /**
   * Constructs a <code>EditFunctionKeyPhoneContact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditFunctionKeyPhoneContact} obj Optional instance to populate.
   * @return {module:model/EditFunctionKeyPhoneContact} The populated <code>EditFunctionKeyPhoneContact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('addressbookRequest')) {
        obj['addressbookRequest'] = ApiClient.convertToType(data['addressbookRequest'], 'String');
      }
      if (data.hasOwnProperty('addressbookRequests')) {
        obj['addressbookRequests'] = ApiClient.convertToType(data['addressbookRequests'], ['String']);
      }
      if (data.hasOwnProperty('folders')) {
        obj['folders'] = ApiClient.convertToType(data['folders'], ['String']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('selectedFolder')) {
        obj['selectedFolder'] = ApiClient.convertToType(data['selectedFolder'], 'String');
      }
    }
    return obj;
  }

  /**
   * the addressbookRequest of the FunctionKey
   * @member {module:model/EditFunctionKeyPhoneContact.AddressbookRequestEnum} addressbookRequest
   */
  exports.prototype['addressbookRequest'] = undefined;
  /**
   * the possible request types of the adressbook
   * @member {Array.<String>} addressbookRequests
   */
  exports.prototype['addressbookRequests'] = undefined;
  /**
   * the folders of the FunctionKey
   * @member {Array.<String>} folders
   */
  exports.prototype['folders'] = undefined;
  /**
   * the name of the FunctionKey
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * the selectedFolder of the FunctionKey
   * @member {String} selectedFolder
   */
  exports.prototype['selectedFolder'] = undefined;


  /**
   * Allowed values for the <code>addressbookRequest</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AddressbookRequestEnum = {
    /**
     * value: "CONTACTLIST"
     * @const
     */
    "CONTACTLIST": "CONTACTLIST",
    /**
     * value: "CONTACTSEARCH"
     * @const
     */
    "CONTACTSEARCH": "CONTACTSEARCH"  };


  return exports;
}));


