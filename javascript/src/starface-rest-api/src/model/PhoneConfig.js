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
    root.StarfaceRestApi.PhoneConfig = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PhoneConfig model module.
   * @module model/PhoneConfig
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>PhoneConfig</code>.
   * Representation of phone config options for a User
   * @alias module:model/PhoneConfig
   * @class
   * @param callWaiting {Boolean} the flag that indicates whether a call gets rejected if the User is currently busy
   * @param displayNumberId {Number} the Id of the PhoneNumber that is displayed when the User makes a call
   * @param doNotDisturb {Boolean} the flag that indicates whether the user is DND and thus won't recieve calls
   * @param primaryPhoneId {Number} the Id of the primary Phone of the User
   */
  var exports = function(callWaiting, displayNumberId, doNotDisturb, primaryPhoneId) {
    var _this = this;

    _this['callWaiting'] = callWaiting;
    _this['displayNumberId'] = displayNumberId;
    _this['doNotDisturb'] = doNotDisturb;
    _this['primaryPhoneId'] = primaryPhoneId;
  };

  /**
   * Constructs a <code>PhoneConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneConfig} obj Optional instance to populate.
   * @return {module:model/PhoneConfig} The populated <code>PhoneConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('callWaiting')) {
        obj['callWaiting'] = ApiClient.convertToType(data['callWaiting'], 'Boolean');
      }
      if (data.hasOwnProperty('displayNumberId')) {
        obj['displayNumberId'] = ApiClient.convertToType(data['displayNumberId'], 'Number');
      }
      if (data.hasOwnProperty('doNotDisturb')) {
        obj['doNotDisturb'] = ApiClient.convertToType(data['doNotDisturb'], 'Boolean');
      }
      if (data.hasOwnProperty('primaryPhoneId')) {
        obj['primaryPhoneId'] = ApiClient.convertToType(data['primaryPhoneId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * the flag that indicates whether a call gets rejected if the User is currently busy
   * @member {Boolean} callWaiting
   */
  exports.prototype['callWaiting'] = undefined;
  /**
   * the Id of the PhoneNumber that is displayed when the User makes a call
   * @member {Number} displayNumberId
   */
  exports.prototype['displayNumberId'] = undefined;
  /**
   * the flag that indicates whether the user is DND and thus won't recieve calls
   * @member {Boolean} doNotDisturb
   */
  exports.prototype['doNotDisturb'] = undefined;
  /**
   * the Id of the primary Phone of the User
   * @member {Number} primaryPhoneId
   */
  exports.prototype['primaryPhoneId'] = undefined;



  return exports;
}));

