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
    root.StarfaceRestApi.PhoneAssignment = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PhoneAssignment model module.
   * @module model/PhoneAssignment
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>PhoneAssignment</code>.
   * Representation of an assignment from a Phone to a User
   * @alias module:model/PhoneAssignment
   * @class
   * @param active {Boolean} the flag that indicates whether the Phone is active for the User. Inactive Phones won't ring on incoming calls.
   * @param isIFMC {Boolean} the flag that indicates whether the assigned Phone is a STARFACE iFMC Phone
   * @param phoneId {Number} the Id of the Phone that is assigned to the User
   * @param phoneName {String} The name of the Phone that is assigned to the User.
   * @param userId {Number} the Id of the User
   */
  var exports = function(active, isIFMC, phoneId, phoneName, userId) {
    var _this = this;

    _this['active'] = active;
    _this['isIFMC'] = isIFMC;
    _this['phoneId'] = phoneId;
    _this['phoneName'] = phoneName;
    _this['userId'] = userId;
  };

  /**
   * Constructs a <code>PhoneAssignment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PhoneAssignment} obj Optional instance to populate.
   * @return {module:model/PhoneAssignment} The populated <code>PhoneAssignment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('isIFMC')) {
        obj['isIFMC'] = ApiClient.convertToType(data['isIFMC'], 'Boolean');
      }
      if (data.hasOwnProperty('phoneId')) {
        obj['phoneId'] = ApiClient.convertToType(data['phoneId'], 'Number');
      }
      if (data.hasOwnProperty('phoneName')) {
        obj['phoneName'] = ApiClient.convertToType(data['phoneName'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * the flag that indicates whether the Phone is active for the User. Inactive Phones won't ring on incoming calls.
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * the flag that indicates whether the assigned Phone is a STARFACE iFMC Phone
   * @member {Boolean} isIFMC
   */
  exports.prototype['isIFMC'] = undefined;
  /**
   * the Id of the Phone that is assigned to the User
   * @member {Number} phoneId
   */
  exports.prototype['phoneId'] = undefined;
  /**
   * The name of the Phone that is assigned to the User.
   * @member {String} phoneName
   */
  exports.prototype['phoneName'] = undefined;
  /**
   * the Id of the User
   * @member {Number} userId
   */
  exports.prototype['userId'] = undefined;



  return exports;
}));


