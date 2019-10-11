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
    define(['ApiClient', 'model/RedirectDestination', 'model/RedirectMailboxDestination', 'model/RedirectPhoneNumberDestination', 'model/RedirectTrigger'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RedirectDestination'), require('./RedirectMailboxDestination'), require('./RedirectPhoneNumberDestination'), require('./RedirectTrigger'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.Redirection = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.RedirectDestination, root.StarfaceRestApi.RedirectMailboxDestination, root.StarfaceRestApi.RedirectPhoneNumberDestination, root.StarfaceRestApi.RedirectTrigger);
  }
}(this, function(ApiClient, RedirectDestination, RedirectMailboxDestination, RedirectPhoneNumberDestination, RedirectTrigger) {
  'use strict';




  /**
   * The Redirection model module.
   * @module model/Redirection
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>Redirection</code>.
   * A representation of a Redirection
   * @alias module:model/Redirection
   * @class
   * @param enabled {Boolean} Whether this Redirection is enabled or disabled
   * @param id {String} The Id of the Redirection
   * @param redirectDestination {module:model/RedirectDestination} 
   * @param redirectTrigger {module:model/RedirectTrigger} 
   */
  var exports = function(enabled, id, redirectDestination, redirectTrigger) {
    var _this = this;

    _this['enabled'] = enabled;

    _this['id'] = id;



    _this['redirectDestination'] = redirectDestination;
    _this['redirectTrigger'] = redirectTrigger;
  };

  /**
   * Constructs a <code>Redirection</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Redirection} obj Optional instance to populate.
   * @return {module:model/Redirection} The populated <code>Redirection</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('groupNumber')) {
        obj['groupNumber'] = ApiClient.convertToType(data['groupNumber'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('lastMailboxDestination')) {
        obj['lastMailboxDestination'] = RedirectMailboxDestination.constructFromObject(data['lastMailboxDestination']);
      }
      if (data.hasOwnProperty('lastPhoneNumberDestination')) {
        obj['lastPhoneNumberDestination'] = RedirectPhoneNumberDestination.constructFromObject(data['lastPhoneNumberDestination']);
      }
      if (data.hasOwnProperty('phoneNumber')) {
        obj['phoneNumber'] = ApiClient.convertToType(data['phoneNumber'], 'String');
      }
      if (data.hasOwnProperty('redirectDestination')) {
        obj['redirectDestination'] = RedirectDestination.constructFromObject(data['redirectDestination']);
      }
      if (data.hasOwnProperty('redirectTrigger')) {
        obj['redirectTrigger'] = RedirectTrigger.constructFromObject(data['redirectTrigger']);
      }
    }
    return obj;
  }

  /**
   * Whether this Redirection is enabled or disabled
   * @member {Boolean} enabled
   */
  exports.prototype['enabled'] = undefined;
  /**
   * True if the phoneNumber of this Redirection is assigned to a group, false otherwise
   * @member {Boolean} groupNumber
   */
  exports.prototype['groupNumber'] = undefined;
  /**
   * The Id of the Redirection
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/RedirectMailboxDestination} lastMailboxDestination
   */
  exports.prototype['lastMailboxDestination'] = undefined;
  /**
   * @member {module:model/RedirectPhoneNumberDestination} lastPhoneNumberDestination
   */
  exports.prototype['lastPhoneNumberDestination'] = undefined;
  /**
   * The phoneNumber that will be handled by this Redirection
   * @member {String} phoneNumber
   */
  exports.prototype['phoneNumber'] = undefined;
  /**
   * @member {module:model/RedirectDestination} redirectDestination
   */
  exports.prototype['redirectDestination'] = undefined;
  /**
   * @member {module:model/RedirectTrigger} redirectTrigger
   */
  exports.prototype['redirectTrigger'] = undefined;



  return exports;
}));


