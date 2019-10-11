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
    root.StarfaceRestApi.NumberForPhoneAssignment = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NumberForPhoneAssignment model module.
   * @module model/NumberForPhoneAssignment
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>NumberForPhoneAssignment</code>.
   * Representation of an assignment of a PhoneNumber to a Phone.
   * @alias module:model/NumberForPhoneAssignment
   * @class
   * @param active {Boolean} the flag that indicates whether the PhoneNumber is active for this assignment.
   * @param phoneNumber {String} The number of the PhoneNumber
   * @param phoneNumberId {Number} the Id of the PhoneNumber that is assigned
   */
  var exports = function(active, phoneNumber, phoneNumberId) {
    var _this = this;

    _this['active'] = active;
    _this['phoneNumber'] = phoneNumber;
    _this['phoneNumberId'] = phoneNumberId;
  };

  /**
   * Constructs a <code>NumberForPhoneAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NumberForPhoneAssignment} obj Optional instance to populate.
   * @return {module:model/NumberForPhoneAssignment} The populated <code>NumberForPhoneAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('phoneNumberId')) {
        obj['phoneNumberId'] = ApiClient.convertToType(data['phoneNumberId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * the flag that indicates whether the PhoneNumber is active for this assignment.
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * The number of the PhoneNumber
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * the Id of the PhoneNumber that is assigned
   * @member {Number} phoneNumberId
   */
  exports.prototype['phoneNumberId'] = undefined;



  return exports;
}));


