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
    instance = new StarfaceRestApi.TimeFrame();
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

  describe('TimeFrame', function() {
    it('should create an instance of TimeFrame', function() {
      // uncomment below and update the code to test TimeFrame
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be.a(StarfaceRestApi.TimeFrame);
    });

    it('should have the property friday (base name: "friday")', function() {
      // uncomment below and update the code to test the property friday
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property monday (base name: "monday")', function() {
      // uncomment below and update the code to test the property monday
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property saturday (base name: "saturday")', function() {
      // uncomment below and update the code to test the property saturday
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property sunday (base name: "sunday")', function() {
      // uncomment below and update the code to test the property sunday
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property thursday (base name: "thursday")', function() {
      // uncomment below and update the code to test the property thursday
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property timeBegin (base name: "timeBegin")', function() {
      // uncomment below and update the code to test the property timeBegin
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property timeEnd (base name: "timeEnd")', function() {
      // uncomment below and update the code to test the property timeEnd
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property tuesday (base name: "tuesday")', function() {
      // uncomment below and update the code to test the property tuesday
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

    it('should have the property wednesday (base name: "wednesday")', function() {
      // uncomment below and update the code to test the property wednesday
      //var instance = new StarfaceRestApi.TimeFrame();
      //expect(instance).to.be();
    });

  });

}));
