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
    instance = new StarfaceRestApi.Group();
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

  describe('Group', function() {
    it('should create an instance of Group', function() {
      // uncomment below and update the code to test Group
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be.a(StarfaceRestApi.Group);
    });

    it('should have the property assignableNumbers (base name: "assignableNumbers")', function() {
      // uncomment below and update the code to test the property assignableNumbers
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be();
    });

    it('should have the property assignableUsers (base name: "assignableUsers")', function() {
      // uncomment below and update the code to test the property assignableUsers
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be();
    });

    it('should have the property chatGroup (base name: "chatGroup")', function() {
      // uncomment below and update the code to test the property chatGroup
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be();
    });

    it('should have the property groupId (base name: "groupId")', function() {
      // uncomment below and update the code to test the property groupId
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be();
    });

    it('should have the property voicemail (base name: "voicemail")', function() {
      // uncomment below and update the code to test the property voicemail
      //var instance = new StarfaceRestApi.Group();
      //expect(instance).to.be();
    });

  });

}));
