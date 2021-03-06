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
    root.StarfaceRestApi.TimeFrame = factory(root.StarfaceRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TimeFrame model module.
   * @module model/TimeFrame
   * @version 6.7.0.22
   */

  /**
   * Constructs a new <code>TimeFrame</code>.
   * A TimeFrame defines a TimeRange in 24 hour format between 00:00 and 24:00 for each day of week
   * @alias module:model/TimeFrame
   * @class
   * @param friday {Boolean} Enabled on fridays
   * @param monday {Boolean} Enabled on mondays
   * @param saturday {Boolean} Enabled on saturdays
   * @param sunday {Boolean} Enabled on sundays
   * @param thursday {Boolean} Eanabled on thursdays
   * @param timeBegin {String} The time defining the beginning of the TimeRange (inclusive)
   * @param timeEnd {String} The time defining the end of the TimeRange (inclusive)
   * @param tuesday {Boolean} Enabled on tuesdays
   * @param wednesday {Boolean} Enabled on wednesdays
   */
  var exports = function(friday, monday, saturday, sunday, thursday, timeBegin, timeEnd, tuesday, wednesday) {
    var _this = this;

    _this['friday'] = friday;
    _this['monday'] = monday;
    _this['saturday'] = saturday;
    _this['sunday'] = sunday;
    _this['thursday'] = thursday;
    _this['timeBegin'] = timeBegin;
    _this['timeEnd'] = timeEnd;
    _this['tuesday'] = tuesday;
    _this['wednesday'] = wednesday;
  };

  /**
   * Constructs a <code>TimeFrame</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TimeFrame} obj Optional instance to populate.
   * @return {module:model/TimeFrame} The populated <code>TimeFrame</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('friday')) {
        obj['friday'] = ApiClient.convertToType(data['friday'], 'Boolean');
      }
      if (data.hasOwnProperty('monday')) {
        obj['monday'] = ApiClient.convertToType(data['monday'], 'Boolean');
      }
      if (data.hasOwnProperty('saturday')) {
        obj['saturday'] = ApiClient.convertToType(data['saturday'], 'Boolean');
      }
      if (data.hasOwnProperty('sunday')) {
        obj['sunday'] = ApiClient.convertToType(data['sunday'], 'Boolean');
      }
      if (data.hasOwnProperty('thursday')) {
        obj['thursday'] = ApiClient.convertToType(data['thursday'], 'Boolean');
      }
      if (data.hasOwnProperty('timeBegin')) {
        obj['timeBegin'] = ApiClient.convertToType(data['timeBegin'], 'String');
      }
      if (data.hasOwnProperty('timeEnd')) {
        obj['timeEnd'] = ApiClient.convertToType(data['timeEnd'], 'String');
      }
      if (data.hasOwnProperty('tuesday')) {
        obj['tuesday'] = ApiClient.convertToType(data['tuesday'], 'Boolean');
      }
      if (data.hasOwnProperty('wednesday')) {
        obj['wednesday'] = ApiClient.convertToType(data['wednesday'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * Enabled on fridays
   * @member {Boolean} friday
   */
  exports.prototype['friday'] = undefined;
  /**
   * Enabled on mondays
   * @member {Boolean} monday
   */
  exports.prototype['monday'] = undefined;
  /**
   * Enabled on saturdays
   * @member {Boolean} saturday
   */
  exports.prototype['saturday'] = undefined;
  /**
   * Enabled on sundays
   * @member {Boolean} sunday
   */
  exports.prototype['sunday'] = undefined;
  /**
   * Eanabled on thursdays
   * @member {Boolean} thursday
   */
  exports.prototype['thursday'] = undefined;
  /**
   * The time defining the beginning of the TimeRange (inclusive)
   * @member {String} timeBegin
   */
  exports.prototype['timeBegin'] = undefined;
  /**
   * The time defining the end of the TimeRange (inclusive)
   * @member {String} timeEnd
   */
  exports.prototype['timeEnd'] = undefined;
  /**
   * Enabled on tuesdays
   * @member {Boolean} tuesday
   */
  exports.prototype['tuesday'] = undefined;
  /**
   * Enabled on wednesdays
   * @member {Boolean} wednesday
   */
  exports.prototype['wednesday'] = undefined;



  return exports;
}));


