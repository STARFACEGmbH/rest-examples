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
    define(['ApiClient', 'model/EditFunctionKeyGroupLoginGroupSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditFunctionKeyGroupLoginGroupSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.EditFunctionKeyGroupLogin = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.EditFunctionKeyGroupLoginGroupSettings);
  }
}(this, function(ApiClient, EditFunctionKeyGroupLoginGroupSettings) {
  'use strict';




  /**
   * The EditFunctionKeyGroupLogin model module.
   * @module model/EditFunctionKeyGroupLogin
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>EditFunctionKeyGroupLogin</code>.
   * A representation of a EditFunctionKeyGroupLogin Form
   * @alias module:model/EditFunctionKeyGroupLogin
   * @class
   * @param editFunctionKeyGlGroupSettings {Array.<module:model/EditFunctionKeyGroupLoginGroupSettings>} the EditFunctionKeyGlGroupSettings of the FunctionKey
   * @param name {String} the name of the FunctionKey
   */
  var exports = function(editFunctionKeyGlGroupSettings, name) {
    var _this = this;

    _this['editFunctionKeyGlGroupSettings'] = editFunctionKeyGlGroupSettings;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>EditFunctionKeyGroupLogin</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditFunctionKeyGroupLogin} obj Optional instance to populate.
   * @return {module:model/EditFunctionKeyGroupLogin} The populated <code>EditFunctionKeyGroupLogin</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('editFunctionKeyGlGroupSettings')) {
        obj['editFunctionKeyGlGroupSettings'] = ApiClient.convertToType(data['editFunctionKeyGlGroupSettings'], [EditFunctionKeyGroupLoginGroupSettings]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * the EditFunctionKeyGlGroupSettings of the FunctionKey
   * @member {Array.<module:model/EditFunctionKeyGroupLoginGroupSettings>} editFunctionKeyGlGroupSettings
   */
  exports.prototype['editFunctionKeyGlGroupSettings'] = undefined;
  /**
   * the name of the FunctionKey
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


