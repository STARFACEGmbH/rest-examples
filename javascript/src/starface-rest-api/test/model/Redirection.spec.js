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
    instance = new StarfaceRestApi.Redirection();
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

  describe('Redirection', function() {
    it('should create an instance of Redirection', function() {
      // uncomment below and update the code to test Redirection
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be.a(StarfaceRestApi.Redirection);
    });

    it('should have the property enabled (base name: "enabled")', function() {
      // uncomment below and update the code to test the property enabled
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

    it('should have the property groupNumber (base name: "groupNumber")', function() {
      // uncomment below and update the code to test the property groupNumber
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

    it('should have the property lastMailboxDestination (base name: "lastMailboxDestination")', function() {
      // uncomment below and update the code to test the property lastMailboxDestination
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

    it('should have the property lastPhoneNumberDestination (base name: "lastPhoneNumberDestination")', function() {
      // uncomment below and update the code to test the property lastPhoneNumberDestination
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

    it('should have the property phoneNumber (base name: "phoneNumber")', function() {
      // uncomment below and update the code to test the property phoneNumber
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

    it('should have the property redirectDestination (base name: "redirectDestination")', function() {
      // uncomment below and update the code to test the property redirectDestination
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

    it('should have the property redirectTrigger (base name: "redirectTrigger")', function() {
      // uncomment below and update the code to test the property redirectTrigger
      //var instance = new StarfaceRestApi.Redirection();
      //expect(instance).to.be();
    });

  });

}));
