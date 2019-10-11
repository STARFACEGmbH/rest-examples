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
    root.StarfaceRestApi.EditFunctionKeySeperator = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EditFunctionKeySeperator model module.
   * @module model/EditFunctionKeySeperator
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>EditFunctionKeySeperator</code>.
   * A representation of a EditFunctionKeySeperator Form
   * @alias module:model/EditFunctionKeySeperator
   * @class
   * @param name {String} the name of the FunctionKey
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;
  };

  /**
   * Constructs a <code>EditFunctionKeySeperator</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditFunctionKeySeperator} obj Optional instance to populate.
   * @return {module:model/EditFunctionKeySeperator} The populated <code>EditFunctionKeySeperator</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * the name of the FunctionKey
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


