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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.StarfaceRestApi);
  }
}(this, function(expect, StarfaceRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new StarfaceRestApi.PhoneConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PhoneConfig', function() {
    it('should create an instance of PhoneConfig', function() {
      // uncomment below and update the code to test PhoneConfig
      //var instance = new StarfaceRestApi.PhoneConfig();
      //expect(instance).to.be.a(StarfaceRestApi.PhoneConfig);
    });

    it('should have the property callWaiting (base name: "callWaiting")', function() {
      // uncomment below and update the code to test the property callWaiting
      //var instance = new StarfaceRestApi.PhoneConfig();
      //expect(instance).to.be();
    });

    it('should have the property displayNumberId (base name: "displayNumberId")', function() {
      // uncomment below and update the code to test the property displayNumberId
      //var instance = new StarfaceRestApi.PhoneConfig();
      //expect(instance).to.be();
    });

    it('should have the property doNotDisturb (base name: "doNotDisturb")', function() {
      // uncomment below and update the code to test the property doNotDisturb
      //var instance = new StarfaceRestApi.PhoneConfig();
      //expect(instance).to.be();
    });

    it('should have the property primaryPhoneId (base name: "primaryPhoneId")', function() {
      // uncomment below and update the code to test the property primaryPhoneId
      //var instance = new StarfaceRestApi.PhoneConfig();
      //expect(instance).to.be();
    });

  });

}));