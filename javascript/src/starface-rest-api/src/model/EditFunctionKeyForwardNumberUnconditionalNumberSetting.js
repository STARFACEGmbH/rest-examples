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
    root.StarfaceRestApi.EditFunctionKeyForwardNumberUnconditionalNumberSetting = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EditFunctionKeyForwardNumberUnconditionalNumberSetting model module.
   * @module model/EditFunctionKeyForwardNumberUnconditionalNumberSetting
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>EditFunctionKeyForwardNumberUnconditionalNumberSetting</code>.
   * A representation of a EditFunctionKeyForwardNumberUnconditionalNumberSetting Form
   * @alias module:model/EditFunctionKeyForwardNumberUnconditionalNumberSetting
   * @class
   * @param activated {Boolean} is number setting activated
   * @param group {Boolean} is number setting a group
   * @param _number {String} the number of the setting
   * @param numberId {Number} the numberId of the setting
   */
  var exports = function(activated, group, _number, numberId) {
    var _this = this;

    _this['activated'] = activated;
    _this['group'] = group;
    _this['number'] = _number;
    _this['numberId'] = numberId;
  };

  /**
   * Constructs a <code>EditFunctionKeyForwardNumberUnconditionalNumberSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditFunctionKeyForwardNumberUnconditionalNumberSetting} obj Optional instance to populate.
   * @return {module:model/EditFunctionKeyForwardNumberUnconditionalNumberSetting} The populated <code>EditFunctionKeyForwardNumberUnconditionalNumberSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('activated')) {
        obj['activated'] = ApiClient.convertToType(data['activated'], 'Boolean');
      }
      if (data.hasOwnProperty('group')) {
        obj['group'] = ApiClient.convertToType(data['group'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('numberId')) {
        obj['numberId'] = ApiClient.convertToType(data['numberId'], 'Number');
      }
    }
    return obj;
  }

  /**
   * is number setting activated
   * @member {Boolean} activated
   */
  exports.prototype['activated'] = undefined;
  /**
   * is number setting a group
   * @member {Boolean} group
   */
  exports.prototype['group'] = undefined;
  /**
   * the number of the setting
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * the numberId of the setting
   * @member {Number} numberId
   */
  exports.prototype['numberId'] = undefined;



  return exports;
}));

