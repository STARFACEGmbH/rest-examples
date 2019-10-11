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
    root.StarfaceRestApi.User = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The User model module.
   * @module model/User
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>User</code>.
   * A representation of a STARFACE user
   * @alias module:model/User
   * @class
   * @param email {String} the email address of the user
   * @param familyName {String} the family name of the user
   * @param firstName {String} the name of the user
   * @param language {String} the language of a user (default, de, en, ...)
   * @param login {String} the login number for this user. The login number will be used as Jabber Id
   */
  var exports = function(email, familyName, firstName, language, login) {
    var _this = this;

    _this['email'] = email;
    _this['familyName'] = familyName;




    _this['firstName'] = firstName;

    _this['language'] = language;
    _this['login'] = login;




  };

  /**
   * Constructs a <code>User</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/User} obj Optional instance to populate.
   * @return {module:model/User} The populated <code>User</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('familyName')) {
        obj['familyName'] = ApiClient.convertToType(data['familyName'], 'String');
      }
      if (data.hasOwnProperty('faxCallerId')) {
        obj['faxCallerId'] = ApiClient.convertToType(data['faxCallerId'], 'String');
      }
      if (data.hasOwnProperty('faxCoverPage')) {
        obj['faxCoverPage'] = ApiClient.convertToType(data['faxCoverPage'], 'Boolean');
      }
      if (data.hasOwnProperty('faxEmailJournal')) {
        obj['faxEmailJournal'] = ApiClient.convertToType(data['faxEmailJournal'], 'Boolean');
      }
      if (data.hasOwnProperty('faxHeader')) {
        obj['faxHeader'] = ApiClient.convertToType(data['faxHeader'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Number');
      }
      if (data.hasOwnProperty('language')) {
        obj['language'] = ApiClient.convertToType(data['language'], 'String');
      }
      if (data.hasOwnProperty('login')) {
        obj['login'] = ApiClient.convertToType(data['login'], 'String');
      }
      if (data.hasOwnProperty('missedCallReport')) {
        obj['missedCallReport'] = ApiClient.convertToType(data['missedCallReport'], 'Boolean');
      }
      if (data.hasOwnProperty('namespace')) {
        obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('personId')) {
        obj['personId'] = ApiClient.convertToType(data['personId'], 'String');
      }
    }
    return obj;
  }

  /**
   * the email address of the user
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * the family name of the user
   * @member {String} familyName
   */
  exports.prototype['familyName'] = undefined;
  /**
   * the callerId for faxes send by this user
   * @member {String} faxCallerId
   */
  exports.prototype['faxCallerId'] = undefined;
  /**
   * whether to send a cover page for faxes send by this user
   * @member {Boolean} faxCoverPage
   */
  exports.prototype['faxCoverPage'] = undefined;
  /**
   * whether the user recieves a email journal of send faxes
   * @member {Boolean} faxEmailJournal
   */
  exports.prototype['faxEmailJournal'] = undefined;
  /**
   * the header for faxes send by this user
   * @member {String} faxHeader
   */
  exports.prototype['faxHeader'] = undefined;
  /**
   * the name of the user
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * the Id of the user
   * @member {Number} id
   */
  exports.prototype['id'] = undefined;
  /**
   * the language of a user (default, de, en, ...)
   * @member {String} language
   */
  exports.prototype['language'] = undefined;
  /**
   * the login number for this user. The login number will be used as Jabber Id
   * @member {String} login
   */
  exports.prototype['login'] = undefined;
  /**
   * whether the user recieves a report on missed calls
   * @member {Boolean} missedCallReport
   */
  exports.prototype['missedCallReport'] = undefined;
  /**
   * the namespace defining the location of an user account
   * @member {String} namespace
   */
  exports.prototype['namespace'] = undefined;
  /**
   * defines a new password when a user is created or updated. This field will be empty when a user is fetched.
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * the Id of the corresponding person contact object
   * @member {String} personId
   */
  exports.prototype['personId'] = undefined;



  return exports;
}));


