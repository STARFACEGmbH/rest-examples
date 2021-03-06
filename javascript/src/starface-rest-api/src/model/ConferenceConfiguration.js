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
    define(['ApiClient', 'model/ConferenceConfigurationMailBodyVariable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ConferenceConfigurationMailBodyVariable'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.ConferenceConfiguration = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.ConferenceConfigurationMailBodyVariable);
  }
}(this, function(ApiClient, ConferenceConfigurationMailBodyVariable) {
  'use strict';




  /**
   * The ConferenceConfiguration model module.
   * @module model/ConferenceConfiguration
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>ConferenceConfiguration</code>.
   * A representation of STARFACE conference configuration
   * @alias module:model/ConferenceConfiguration
   * @class
   * @param eMailBody {String} 
   * @param eMailSubject {String} 
   * @param language {module:model/ConferenceConfiguration.LanguageEnum} 
   * @param variables {Array.<module:model/ConferenceConfigurationMailBodyVariable>} 
   */
  var exports = function(eMailBody, eMailSubject, language, variables) {
    var _this = this;

    _this['eMailBody'] = eMailBody;
    _this['eMailSubject'] = eMailSubject;


    _this['language'] = language;

    _this['variables'] = variables;
  };

  /**
   * Constructs a <code>ConferenceConfiguration</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConferenceConfiguration} obj Optional instance to populate.
   * @return {module:model/ConferenceConfiguration} The populated <code>ConferenceConfiguration</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('eMailBody')) {
        obj['eMailBody'] = ApiClient.convertToType(data['eMailBody'], 'String');
      }
      if (data.hasOwnProperty('eMailSubject')) {
        obj['eMailSubject'] = ApiClient.convertToType(data['eMailSubject'], 'String');
      }
      if (data.hasOwnProperty('externalNumberId')) {
        obj['externalNumberId'] = ApiClient.convertToType(data['externalNumberId'], 'Number');
      }
      if (data.hasOwnProperty('internalNumberId')) {
        obj['internalNumberId'] = ApiClient.convertToType(data['internalNumberId'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('serverAddress')) {
        obj['serverAddress'] = ApiClient.convertToType(data['serverAddress'], 'String');
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ApiClient.convertToType(data['variables'], [ConferenceConfigurationMailBodyVariable]);
      }
    }
    return obj;
  }

  /**
   * @member {String} eMailBody
   */
  exports.prototype['eMailBody'] = undefined;
  /**
   * @member {String} eMailSubject
   */
  exports.prototype['eMailSubject'] = undefined;
  /**
   * @member {Number} externalNumberId
   */
  exports.prototype['externalNumberId'] = undefined;
  /**
   * @member {Number} internalNumberId
   */
  exports.prototype['internalNumberId'] = undefined;
  /**
   * @member {module:model/ConferenceConfiguration.LanguageEnum} language
   */
  exports.prototype['language'] = undefined;
  /**
   * @member {String} serverAddress
   */
  exports.prototype['serverAddress'] = undefined;
  /**
   * @member {Array.<module:model/ConferenceConfigurationMailBodyVariable>} variables
   */
  exports.prototype['variables'] = undefined;


  /**
   * Allowed values for the <code>language</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LanguageEnum = {
    /**
     * value: "en"
     * @const
     */
    "en": "en",
    /**
     * value: "de"
     * @const
     */
    "de": "de",
    /**
     * value: "es"
     * @const
     */
    "es": "es",
    /**
     * value: "fr"
     * @const
     */
    "fr": "fr",
    /**
     * value: "nl"
     * @const
     */
    "nl": "nl",
    /**
     * value: "pl"
     * @const
     */
    "pl": "pl",
    /**
     * value: "sk"
     * @const
     */
    "sk": "sk"  };


  return exports;
}));


