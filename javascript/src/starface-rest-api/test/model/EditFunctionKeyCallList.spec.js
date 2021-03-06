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
    instance = new StarfaceRestApi.EditFunctionKeyCallList();
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

  describe('EditFunctionKeyCallList', function() {
    it('should create an instance of EditFunctionKeyCallList', function() {
      // uncomment below and update the code to test EditFunctionKeyCallList
      //var instance = new StarfaceRestApi.EditFunctionKeyCallList();
      //expect(instance).to.be.a(StarfaceRestApi.EditFunctionKeyCallList);
    });

    it('should have the property callListRequest (base name: "callListRequest")', function() {
      // uncomment below and update the code to test the property callListRequest
      //var instance = new StarfaceRestApi.EditFunctionKeyCallList();
      //expect(instance).to.be();
    });

    it('should have the property callListRequests (base name: "callListRequests")', function() {
      // uncomment below and update the code to test the property callListRequests
      //var instance = new StarfaceRestApi.EditFunctionKeyCallList();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new StarfaceRestApi.EditFunctionKeyCallList();
      //expect(instance).to.be();
    });

  });

}));
