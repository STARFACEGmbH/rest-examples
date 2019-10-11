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
    root.StarfaceRestApi.RedirectTrigger = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RedirectTrigger model module.
   * @module model/RedirectTrigger
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>RedirectTrigger</code>.
   * Abstract base for always, busy and timeout trigger
   * @alias module:model/RedirectTrigger
   * @class
   * @param redirectTriggerType {module:model/RedirectTrigger.RedirectTriggerTypeEnum} The type of the RedirectTrigger determining the concrete RedirectTrigger implementation
   */
  var exports = function(redirectTriggerType) {
    var _this = this;

    _this['redirectTriggerType'] = redirectTriggerType;
  };

  /**
   * Constructs a <code>RedirectTrigger</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RedirectTrigger} obj Optional instance to populate.
   * @return {module:model/RedirectTrigger} The populated <code>RedirectTrigger</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('redirectTriggerType')) {
        obj['redirectTriggerType'] = ApiClient.convertToType(data['redirectTriggerType'], 'String');
      }
    }
    return obj;
  }

  /**
   * The type of the RedirectTrigger determining the concrete RedirectTrigger implementation
   * @member {module:model/RedirectTrigger.RedirectTriggerTypeEnum} redirectTriggerType
   */
  exports.prototype['redirectTriggerType'] = undefined;


  /**
   * Allowed values for the <code>redirectTriggerType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RedirectTriggerTypeEnum = {
    /**
     * value: "ALWAYS"
     * @const
     */
    "ALWAYS": "ALWAYS",
    /**
     * value: "BUSY"
     * @const
     */
    "BUSY": "BUSY",
    /**
     * value: "TIMEOUT"
     * @const
     */
    "TIMEOUT": "TIMEOUT"  };


  return exports;
}));


