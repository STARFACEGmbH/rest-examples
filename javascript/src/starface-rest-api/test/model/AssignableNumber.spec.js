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
    instance = new StarfaceRestApi.AssignableNumber();
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

  describe('AssignableNumber', function() {
    it('should create an instance of AssignableNumber', function() {
      // uncomment below and update the code to test AssignableNumber
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be.a(StarfaceRestApi.AssignableNumber);
    });

    it('should have the property assigned (base name: "assigned")', function() {
      // uncomment below and update the code to test the property assigned
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be();
    });

    it('should have the property countryCode (base name: "countryCode")', function() {
      // uncomment below and update the code to test the property countryCode
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be();
    });

    it('should have the property exitCode (base name: "exitCode")', function() {
      // uncomment below and update the code to test the property exitCode
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be();
    });

    it('should have the property extension (base name: "extension")', function() {
      // uncomment below and update the code to test the property extension
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be();
    });

    it('should have the property intern (base name: "intern")', function() {
      // uncomment below and update the code to test the property intern
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be();
    });

    it('should have the property localAreaCode (base name: "localAreaCode")', function() {
      // uncomment below and update the code to test the property localAreaCode
      //var instance = new StarfaceRestApi.AssignableNumber();
      //expect(instance).to.be();
    });

  });

}));
