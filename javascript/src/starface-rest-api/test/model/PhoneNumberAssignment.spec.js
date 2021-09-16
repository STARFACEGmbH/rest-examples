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
    instance = new StarfaceRestApi.PhoneNumberAssignment();
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

  describe('PhoneNumberAssignment', function() {
    it('should create an instance of PhoneNumberAssignment', function() {
      // uncomment below and update the code to test PhoneNumberAssignment
      //var instance = new StarfaceRestApi.PhoneNumberAssignment();
      //expect(instance).to.be.a(StarfaceRestApi.PhoneNumberAssignment);
    });

    it('should have the property accountId (base name: "accountId")', function() {
      // uncomment below and update the code to test the property accountId
      //var instance = new StarfaceRestApi.PhoneNumberAssignment();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumberId (base name: "phoneNumberId")', function() {
      // uncomment below and update the code to test the property phoneNumberId
      //var instance = new StarfaceRestApi.PhoneNumberAssignment();
      //expect(instance).to.be();
    });

    it('should have the property serviceId (base name: "serviceId")', function() {
      // uncomment below and update the code to test the property serviceId
      //var instance = new StarfaceRestApi.PhoneNumberAssignment();
      //expect(instance).to.be();
    });

  });

}));