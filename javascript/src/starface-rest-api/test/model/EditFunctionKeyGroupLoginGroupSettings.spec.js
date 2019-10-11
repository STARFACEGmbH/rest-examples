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
    instance = new StarfaceRestApi.EditFunctionKeyGroupLoginGroupSettings();
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

  describe('EditFunctionKeyGroupLoginGroupSettings', function() {
    it('should create an instance of EditFunctionKeyGroupLoginGroupSettings', function() {
      // uncomment below and update the code to test EditFunctionKeyGroupLoginGroupSettings
      //var instance = new StarfaceRestApi.EditFunctionKeyGroupLoginGroupSettings();
      //expect(instance).to.be.a(StarfaceRestApi.EditFunctionKeyGroupLoginGroupSettings);
    });

    it('should have the property activated (base name: "activated")', function() {
      // uncomment below and update the code to test the property activated
      //var instance = new StarfaceRestApi.EditFunctionKeyGroupLoginGroupSettings();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instance = new StarfaceRestApi.EditFunctionKeyGroupLoginGroupSettings();
      //expect(instance).to.be();
    });

    it('should have the property groupname (base name: "groupname")', function() {
      // uncomment below and update the code to test the property groupname
      //var instance = new StarfaceRestApi.EditFunctionKeyGroupLoginGroupSettings();
      //expect(instance).to.be();
    });

  });

}));
