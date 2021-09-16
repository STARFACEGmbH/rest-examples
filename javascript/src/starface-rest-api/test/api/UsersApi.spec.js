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
    instance = new StarfaceRestApi.UsersApi();
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

  describe('UsersApi', function() {
    describe('assignPhone', function() {
      it('should call assignPhone successfully', function(done) {
        //uncomment below and update the code to test assignPhone
        //instance.assignPhone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('assignPhoneNumber', function() {
      it('should call assignPhoneNumber successfully', function(done) {
        //uncomment below and update the code to test assignPhoneNumber
        //instance.assignPhoneNumber(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAvatar', function() {
      it('should call deleteAvatar successfully', function(done) {
        //uncomment below and update the code to test deleteAvatar
        //instance.deleteAvatar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteManagedConference', function() {
      it('should call deleteManagedConference successfully', function(done) {
        //uncomment below and update the code to test deleteManagedConference
        //instance.deleteManagedConference(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePhoneAssignment', function() {
      it('should call deletePhoneAssignment successfully', function(done) {
        //uncomment below and update the code to test deletePhoneAssignment
        //instance.deletePhoneAssignment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePhoneNumberAssignment', function() {
      it('should call deletePhoneNumberAssignment successfully', function(done) {
        //uncomment below and update the code to test deletePhoneNumberAssignment
        //instance.deletePhoneNumberAssignment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deletePhoneNumberAssignments', function() {
      it('should call deletePhoneNumberAssignments successfully', function(done) {
        //uncomment below and update the code to test deletePhoneNumberAssignments
        //instance.deletePhoneNumberAssignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteUser', function() {
      it('should call deleteUser successfully', function(done) {
        //uncomment below and update the code to test deleteUser
        //instance.deleteUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAccountsList', function() {
      it('should call getAccountsList successfully', function(done) {
        //uncomment below and update the code to test getAccountsList
        //instance.getAccountsList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAvatar', function() {
      it('should call getAvatar successfully', function(done) {
        //uncomment below and update the code to test getAvatar
        //instance.getAvatar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManagedConference', function() {
      it('should call getManagedConference successfully', function(done) {
        //uncomment below and update the code to test getManagedConference
        //instance.getManagedConference(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getManagedConferenceList', function() {
      it('should call getManagedConferenceList successfully', function(done) {
        //uncomment below and update the code to test getManagedConferenceList
        //instance.getManagedConferenceList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getNumbersForAssignedPhone', function() {
      it('should call getNumbersForAssignedPhone successfully', function(done) {
        //uncomment below and update the code to test getNumbersForAssignedPhone
        //instance.getNumbersForAssignedPhone(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPhoneAssignment', function() {
      it('should call getPhoneAssignment successfully', function(done) {
        //uncomment below and update the code to test getPhoneAssignment
        //instance.getPhoneAssignment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPhoneConfig', function() {
      it('should call getPhoneConfig successfully', function(done) {
        //uncomment below and update the code to test getPhoneConfig
        //instance.getPhoneConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPhoneNumberAssignment', function() {
      it('should call getPhoneNumberAssignment successfully', function(done) {
        //uncomment below and update the code to test getPhoneNumberAssignment
        //instance.getPhoneNumberAssignment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getPhoneNumberConfig', function() {
      it('should call getPhoneNumberConfig successfully', function(done) {
        //uncomment below and update the code to test getPhoneNumberConfig
        //instance.getPhoneNumberConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUser', function() {
      it('should call getUser successfully', function(done) {
        //uncomment below and update the code to test getUser
        //instance.getUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUserPermissions', function() {
      it('should call getUserPermissions successfully', function(done) {
        //uncomment below and update the code to test getUserPermissions
        //instance.getUserPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsers', function() {
      it('should call getUsers successfully', function(done) {
        //uncomment below and update the code to test getUsers
        //instance.getUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getUsersWithPermission', function() {
      it('should call getUsersWithPermission successfully', function(done) {
        //uncomment below and update the code to test getUsersWithPermission
        //instance.getUsersWithPermission(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listAssignedPhones', function() {
      it('should call listAssignedPhones successfully', function(done) {
        //uncomment below and update the code to test listAssignedPhones
        //instance.listAssignedPhones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('listPhoneNumberAssignment', function() {
      it('should call listPhoneNumberAssignment successfully', function(done) {
        //uncomment below and update the code to test listPhoneNumberAssignment
        //instance.listPhoneNumberAssignment(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postManagedConference', function() {
      it('should call postManagedConference successfully', function(done) {
        //uncomment below and update the code to test postManagedConference
        //instance.postManagedConference(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postUser', function() {
      it('should call postUser successfully', function(done) {
        //uncomment below and update the code to test postUser
        //instance.postUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putAvatar', function() {
      it('should call putAvatar successfully', function(done) {
        //uncomment below and update the code to test putAvatar
        //instance.putAvatar(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putManagedConference', function() {
      it('should call putManagedConference successfully', function(done) {
        //uncomment below and update the code to test putManagedConference
        //instance.putManagedConference(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putPhoneConfig', function() {
      it('should call putPhoneConfig successfully', function(done) {
        //uncomment below and update the code to test putPhoneConfig
        //instance.putPhoneConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putPhoneNumberConfig', function() {
      it('should call putPhoneNumberConfig successfully', function(done) {
        //uncomment below and update the code to test putPhoneNumberConfig
        //instance.putPhoneNumberConfig(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putUser', function() {
      it('should call putUser successfully', function(done) {
        //uncomment below and update the code to test putUser
        //instance.putUser(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putUserPermissions', function() {
      it('should call putUserPermissions successfully', function(done) {
        //uncomment below and update the code to test putUserPermissions
        //instance.putUserPermissions(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('startManagedConference', function() {
      it('should call startManagedConference successfully', function(done) {
        //uncomment below and update the code to test startManagedConference
        //instance.startManagedConference(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updateNumbersForAssignedPhones', function() {
      it('should call updateNumbersForAssignedPhones successfully', function(done) {
        //uncomment below and update the code to test updateNumbersForAssignedPhones
        //instance.updateNumbersForAssignedPhones(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePermissionForUsers', function() {
      it('should call updatePermissionForUsers successfully', function(done) {
        //uncomment below and update the code to test updatePermissionForUsers
        //instance.updatePermissionForUsers(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('updatePhoneNumberAssignments', function() {
      it('should call updatePhoneNumberAssignments successfully', function(done) {
        //uncomment below and update the code to test updatePhoneNumberAssignments
        //instance.updatePhoneNumberAssignments(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('usersMeGet', function() {
      it('should call usersMeGet successfully', function(done) {
        //uncomment below and update the code to test usersMeGet
        //instance.usersMeGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));