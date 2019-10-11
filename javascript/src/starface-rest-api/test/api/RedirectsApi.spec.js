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
    instance = new StarfaceRestApi.RedirectsApi();
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

  describe('RedirectsApi', function() {
    describe('getRedirects', function() {
      it('should call getRedirects successfully', function(done) {
        //uncomment below and update the code to test getRedirects
        //instance.getRedirects(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redirectsRedirectIdGet', function() {
      it('should call redirectsRedirectIdGet successfully', function(done) {
        //uncomment below and update the code to test redirectsRedirectIdGet
        //instance.redirectsRedirectIdGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('redirectsRedirectIdPut', function() {
      it('should call redirectsRedirectIdPut successfully', function(done) {
        //uncomment below and update the code to test redirectsRedirectIdPut
        //instance.redirectsRedirectIdPut(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
