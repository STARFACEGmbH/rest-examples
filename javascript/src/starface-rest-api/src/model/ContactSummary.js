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
    root.StarfaceRestApi.ContactSummary = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ContactSummary model module.
   * @module model/ContactSummary
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>ContactSummary</code>.
   * Compact summary of a contact without schema information
   * @alias module:model/ContactSummary
   * @class
   * @param additionalValues {Object.<String, String>} Additional values for the ContactSummary, for example INTERNALPHONE, EXTERNALPHONE, AVATAR
   * @param id {String} 
   * @param phoneNumberValues {Array.<String>} 
   * @param summaryValues {Array.<String>} 
   */
  var exports = function(additionalValues, id, phoneNumberValues, summaryValues) {
    var _this = this;

    _this['additionalValues'] = additionalValues;
    _this['id'] = id;
    _this['phoneNumberValues'] = phoneNumberValues;
    _this['summaryValues'] = summaryValues;
  };

  /**
   * Constructs a <code>ContactSummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContactSummary} obj Optional instance to populate.
   * @return {module:model/ContactSummary} The populated <code>ContactSummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('additionalValues')) {
        obj['additionalValues'] = ApiClient.convertToType(data['additionalValues'], {'String': 'String'});
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('phoneNumberValues')) {
        obj['phoneNumberValues'] = ApiClient.convertToType(data['phoneNumberValues'], ['String']);
      }
      if (data.hasOwnProperty('summaryValues')) {
        obj['summaryValues'] = ApiClient.convertToType(data['summaryValues'], ['String']);
      }
    }
    return obj;
  }

  /**
   * Additional values for the ContactSummary, for example INTERNALPHONE, EXTERNALPHONE, AVATAR
   * @member {Object.<String, String>} additionalValues
   */
  exports.prototype['additionalValues'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<String>} phoneNumberValues
   */
  exports.prototype['phoneNumberValues'] = undefined;
  /**
   * @member {Array.<String>} summaryValues
   */
  exports.prototype['summaryValues'] = undefined;



  return exports;
}));


