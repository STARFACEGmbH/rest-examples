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
    define(['ApiClient', 'model/EditFunctionKeyBusyLampField', 'model/EditFunctionKeyCallList', 'model/EditFunctionKeyCcbs', 'model/EditFunctionKeyDnd', 'model/EditFunctionKeyDtmf', 'model/EditFunctionKeyForwardCall', 'model/EditFunctionKeyForwardNumberUnconditional', 'model/EditFunctionKeyGenericUrl', 'model/EditFunctionKeyGroupLogin', 'model/EditFunctionKeyModuleActivation', 'model/EditFunctionKeyParkAndOrbit', 'model/EditFunctionKeyPhoneContact', 'model/EditFunctionKeyQuickDial', 'model/EditFunctionKeySeperator', 'model/EditFunctionKeySignalNumber'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./EditFunctionKeyBusyLampField'), require('./EditFunctionKeyCallList'), require('./EditFunctionKeyCcbs'), require('./EditFunctionKeyDnd'), require('./EditFunctionKeyDtmf'), require('./EditFunctionKeyForwardCall'), require('./EditFunctionKeyForwardNumberUnconditional'), require('./EditFunctionKeyGenericUrl'), require('./EditFunctionKeyGroupLogin'), require('./EditFunctionKeyModuleActivation'), require('./EditFunctionKeyParkAndOrbit'), require('./EditFunctionKeyPhoneContact'), require('./EditFunctionKeyQuickDial'), require('./EditFunctionKeySeperator'), require('./EditFunctionKeySignalNumber'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.EditFunctionKey = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.EditFunctionKeyBusyLampField, root.StarfaceRestApi.EditFunctionKeyCallList, root.StarfaceRestApi.EditFunctionKeyCcbs, root.StarfaceRestApi.EditFunctionKeyDnd, root.StarfaceRestApi.EditFunctionKeyDtmf, root.StarfaceRestApi.EditFunctionKeyForwardCall, root.StarfaceRestApi.EditFunctionKeyForwardNumberUnconditional, root.StarfaceRestApi.EditFunctionKeyGenericUrl, root.StarfaceRestApi.EditFunctionKeyGroupLogin, root.StarfaceRestApi.EditFunctionKeyModuleActivation, root.StarfaceRestApi.EditFunctionKeyParkAndOrbit, root.StarfaceRestApi.EditFunctionKeyPhoneContact, root.StarfaceRestApi.EditFunctionKeyQuickDial, root.StarfaceRestApi.EditFunctionKeySeperator, root.StarfaceRestApi.EditFunctionKeySignalNumber);
  }
}(this, function(ApiClient, EditFunctionKeyBusyLampField, EditFunctionKeyCallList, EditFunctionKeyCcbs, EditFunctionKeyDnd, EditFunctionKeyDtmf, EditFunctionKeyForwardCall, EditFunctionKeyForwardNumberUnconditional, EditFunctionKeyGenericUrl, EditFunctionKeyGroupLogin, EditFunctionKeyModuleActivation, EditFunctionKeyParkAndOrbit, EditFunctionKeyPhoneContact, EditFunctionKeyQuickDial, EditFunctionKeySeperator, EditFunctionKeySignalNumber) {
  'use strict';




  /**
   * The EditFunctionKey model module.
   * @module model/EditFunctionKey
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>EditFunctionKey</code>.
   * A representation of a EditFunctionKey Form
   * @alias module:model/EditFunctionKey
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>EditFunctionKey</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EditFunctionKey} obj Optional instance to populate.
   * @return {module:model/EditFunctionKey} The populated <code>EditFunctionKey</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('editFunctionKeyBusyLampField')) {
        obj['editFunctionKeyBusyLampField'] = EditFunctionKeyBusyLampField.constructFromObject(data['editFunctionKeyBusyLampField']);
      }
      if (data.hasOwnProperty('editFunctionKeyCallList')) {
        obj['editFunctionKeyCallList'] = EditFunctionKeyCallList.constructFromObject(data['editFunctionKeyCallList']);
      }
      if (data.hasOwnProperty('editFunctionKeyCcbs')) {
        obj['editFunctionKeyCcbs'] = EditFunctionKeyCcbs.constructFromObject(data['editFunctionKeyCcbs']);
      }
      if (data.hasOwnProperty('editFunctionKeyDnd')) {
        obj['editFunctionKeyDnd'] = EditFunctionKeyDnd.constructFromObject(data['editFunctionKeyDnd']);
      }
      if (data.hasOwnProperty('editFunctionKeyDtmf')) {
        obj['editFunctionKeyDtmf'] = EditFunctionKeyDtmf.constructFromObject(data['editFunctionKeyDtmf']);
      }
      if (data.hasOwnProperty('editFunctionKeyForwardCall')) {
        obj['editFunctionKeyForwardCall'] = EditFunctionKeyForwardCall.constructFromObject(data['editFunctionKeyForwardCall']);
      }
      if (data.hasOwnProperty('editFunctionKeyForwardNumberUnconditional')) {
        obj['editFunctionKeyForwardNumberUnconditional'] = EditFunctionKeyForwardNumberUnconditional.constructFromObject(data['editFunctionKeyForwardNumberUnconditional']);
      }
      if (data.hasOwnProperty('editFunctionKeyGenericUrl')) {
        obj['editFunctionKeyGenericUrl'] = EditFunctionKeyGenericUrl.constructFromObject(data['editFunctionKeyGenericUrl']);
      }
      if (data.hasOwnProperty('editFunctionKeyGroupLogin')) {
        obj['editFunctionKeyGroupLogin'] = EditFunctionKeyGroupLogin.constructFromObject(data['editFunctionKeyGroupLogin']);
      }
      if (data.hasOwnProperty('editFunctionKeyModuleActivation')) {
        obj['editFunctionKeyModuleActivation'] = EditFunctionKeyModuleActivation.constructFromObject(data['editFunctionKeyModuleActivation']);
      }
      if (data.hasOwnProperty('editFunctionKeyParkAndOrbit')) {
        obj['editFunctionKeyParkAndOrbit'] = EditFunctionKeyParkAndOrbit.constructFromObject(data['editFunctionKeyParkAndOrbit']);
      }
      if (data.hasOwnProperty('editFunctionKeyPhoneContact')) {
        obj['editFunctionKeyPhoneContact'] = EditFunctionKeyPhoneContact.constructFromObject(data['editFunctionKeyPhoneContact']);
      }
      if (data.hasOwnProperty('editFunctionKeyQuickDial')) {
        obj['editFunctionKeyQuickDial'] = EditFunctionKeyQuickDial.constructFromObject(data['editFunctionKeyQuickDial']);
      }
      if (data.hasOwnProperty('editFunctionKeySeperator')) {
        obj['editFunctionKeySeperator'] = EditFunctionKeySeperator.constructFromObject(data['editFunctionKeySeperator']);
      }
      if (data.hasOwnProperty('editFunctionKeySignalNumber')) {
        obj['editFunctionKeySignalNumber'] = EditFunctionKeySignalNumber.constructFromObject(data['editFunctionKeySignalNumber']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/EditFunctionKeyBusyLampField} editFunctionKeyBusyLampField
   */
  exports.prototype['editFunctionKeyBusyLampField'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyCallList} editFunctionKeyCallList
   */
  exports.prototype['editFunctionKeyCallList'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyCcbs} editFunctionKeyCcbs
   */
  exports.prototype['editFunctionKeyCcbs'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyDnd} editFunctionKeyDnd
   */
  exports.prototype['editFunctionKeyDnd'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyDtmf} editFunctionKeyDtmf
   */
  exports.prototype['editFunctionKeyDtmf'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyForwardCall} editFunctionKeyForwardCall
   */
  exports.prototype['editFunctionKeyForwardCall'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyForwardNumberUnconditional} editFunctionKeyForwardNumberUnconditional
   */
  exports.prototype['editFunctionKeyForwardNumberUnconditional'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyGenericUrl} editFunctionKeyGenericUrl
   */
  exports.prototype['editFunctionKeyGenericUrl'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyGroupLogin} editFunctionKeyGroupLogin
   */
  exports.prototype['editFunctionKeyGroupLogin'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyModuleActivation} editFunctionKeyModuleActivation
   */
  exports.prototype['editFunctionKeyModuleActivation'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyParkAndOrbit} editFunctionKeyParkAndOrbit
   */
  exports.prototype['editFunctionKeyParkAndOrbit'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyPhoneContact} editFunctionKeyPhoneContact
   */
  exports.prototype['editFunctionKeyPhoneContact'] = undefined;
  /**
   * @member {module:model/EditFunctionKeyQuickDial} editFunctionKeyQuickDial
   */
  exports.prototype['editFunctionKeyQuickDial'] = undefined;
  /**
   * @member {module:model/EditFunctionKeySeperator} editFunctionKeySeperator
   */
  exports.prototype['editFunctionKeySeperator'] = undefined;
  /**
   * @member {module:model/EditFunctionKeySignalNumber} editFunctionKeySignalNumber
   */
  exports.prototype['editFunctionKeySignalNumber'] = undefined;



  return exports;
}));


