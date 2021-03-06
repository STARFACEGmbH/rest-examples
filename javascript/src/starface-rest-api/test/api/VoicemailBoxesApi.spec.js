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
    instance = new StarfaceRestApi.VoicemailBoxesApi();
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

  describe('VoicemailBoxesApi', function() {
    describe('createVoicemailbox', function() {
      it('should call createVoicemailbox successfully', function(done) {
        //uncomment below and update the code to test createVoicemailbox
        //instance.createVoicemailbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteVoicemailbox', function() {
      it('should call deleteVoicemailbox successfully', function(done) {
        //uncomment below and update the code to test deleteVoicemailbox
        //instance.deleteVoicemailbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVoicemailbox', function() {
      it('should call getVoicemailbox successfully', function(done) {
        //uncomment below and update the code to test getVoicemailbox
        //instance.getVoicemailbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getVoicemailboxes', function() {
      it('should call getVoicemailboxes successfully', function(done) {
        //uncomment below and update the code to test getVoicemailboxes
        //instance.getVoicemailboxes(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('saveVoicemailbox', function() {
      it('should call saveVoicemailbox successfully', function(done) {
        //uncomment below and update the code to test saveVoicemailbox
        //instance.saveVoicemailbox(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
