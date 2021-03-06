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
    define(['ApiClient', 'model/VoicemailGroup', 'model/VoicemailUser'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VoicemailGroup'), require('./VoicemailUser'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.Voicemailbox = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.VoicemailGroup, root.StarfaceRestApi.VoicemailUser);
  }
}(this, function(ApiClient, VoicemailGroup, VoicemailUser) {
  'use strict';




  /**
   * The Voicemailbox model module.
   * @module model/Voicemailbox
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>Voicemailbox</code>.
   * A representation of a STARFACE voicemailbox
   * @alias module:model/Voicemailbox
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Voicemailbox</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Voicemailbox} obj Optional instance to populate.
   * @return {module:model/Voicemailbox} The populated <code>Voicemailbox</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('maximumDuration')) {
        obj['maximumDuration'] = ApiClient.convertToType(data['maximumDuration'], 'Number');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('noRecord')) {
        obj['noRecord'] = ApiClient.convertToType(data['noRecord'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('voicemailGroups')) {
        obj['voicemailGroups'] = ApiClient.convertToType(data['voicemailGroups'], [VoicemailGroup]);
      }
      if (data.hasOwnProperty('voicemailUsers')) {
        obj['voicemailUsers'] = ApiClient.convertToType(data['voicemailUsers'], [VoicemailUser]);
      }
    }
    return obj;
  }

  /**
   * the id of the voicemailbox
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * the maximumDuration of the voicemailbox in seconds
   * @member {Number} maximumDuration
   */
  exports.prototype['maximumDuration'] = undefined;
  /**
   * the name of the voicemailbox
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * the record option of the voicemailbox
   * @member {Boolean} noRecord
   */
  exports.prototype['noRecord'] = undefined;
  /**
   * the number of the voicemailbox
   * @member {String} number
   */
  exports.prototype['number'] = undefined;
  /**
   * the password of the voicemailbox
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * the voicemailGroups of the voicemailbox
   * @member {Array.<module:model/VoicemailGroup>} voicemailGroups
   */
  exports.prototype['voicemailGroups'] = undefined;
  /**
   * the voicemailUsers of the voicemailbox
   * @member {Array.<module:model/VoicemailUser>} voicemailUsers
   */
  exports.prototype['voicemailUsers'] = undefined;



  return exports;
}));


