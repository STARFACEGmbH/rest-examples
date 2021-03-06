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
    define(['ApiClient', 'model/Block', 'model/Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Block'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.Contact = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.Block, root.StarfaceRestApi.Tag);
  }
}(this, function(ApiClient, Block, Tag) {
  'use strict';




  /**
   * The Contact model module.
   * @module model/Contact
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>Contact</code>.
   * contact information
   * @alias module:model/Contact
   * @class
   * @param blocks {Array.<module:model/Block>} 
   * @param editable {Boolean} 
   * @param tags {Array.<module:model/Tag>} 
   */
  var exports = function(blocks, editable, tags) {
    var _this = this;


    _this['blocks'] = blocks;
    _this['editable'] = editable;




    _this['tags'] = tags;
  };

  /**
   * Constructs a <code>Contact</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Contact} obj Optional instance to populate.
   * @return {module:model/Contact} The populated <code>Contact</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('accountId')) {
        obj['accountId'] = ApiClient.convertToType(data['accountId'], 'Number');
      }
      if (data.hasOwnProperty('blocks')) {
        obj['blocks'] = ApiClient.convertToType(data['blocks'], [Block]);
      }
      if (data.hasOwnProperty('editable')) {
        obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('jabberId')) {
        obj['jabberId'] = ApiClient.convertToType(data['jabberId'], 'String');
      }
      if (data.hasOwnProperty('primaryExternalNumber')) {
        obj['primaryExternalNumber'] = ApiClient.convertToType(data['primaryExternalNumber'], 'String');
      }
      if (data.hasOwnProperty('primaryInternalNumber')) {
        obj['primaryInternalNumber'] = ApiClient.convertToType(data['primaryInternalNumber'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], [Tag]);
      }
    }
    return obj;
  }

  /**
   * @member {Number} accountId
   */
  exports.prototype['accountId'] = undefined;
  /**
   * @member {Array.<module:model/Block>} blocks
   */
  exports.prototype['blocks'] = undefined;
  /**
   * @member {Boolean} editable
   */
  exports.prototype['editable'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} jabberId
   */
  exports.prototype['jabberId'] = undefined;
  /**
   * @member {String} primaryExternalNumber
   */
  exports.prototype['primaryExternalNumber'] = undefined;
  /**
   * @member {String} primaryInternalNumber
   */
  exports.prototype['primaryInternalNumber'] = undefined;
  /**
   * @member {Array.<module:model/Tag>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


