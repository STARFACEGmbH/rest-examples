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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/NumberForPhoneAssignment', 'model/PhoneNumber', 'model/PhoneNumberAssignment', 'model/PhoneNumberConfig'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NumberForPhoneAssignment'), require('../model/PhoneNumber'), require('../model/PhoneNumberAssignment'), require('../model/PhoneNumberConfig'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.PhoneNumbersApi = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.NumberForPhoneAssignment, root.StarfaceRestApi.PhoneNumber, root.StarfaceRestApi.PhoneNumberAssignment, root.StarfaceRestApi.PhoneNumberConfig);
  }
}(this, function(ApiClient, NumberForPhoneAssignment, PhoneNumber, PhoneNumberAssignment, PhoneNumberConfig) {
  'use strict';

  /**
   * PhoneNumbers service.
   * @module api/PhoneNumbersApi
   * @version 6.7.0.22
   */

  /**
   * Constructs a new PhoneNumbersApi. 
   * @alias module:api/PhoneNumbersApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the assignPhoneNumber operation.
     * @callback module:api/PhoneNumbersApi~assignPhoneNumberCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PhoneNumberAssignment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assigns phone numbers to the User
     * Assigns phone numbers to the User with the given {userId}
     * @param {Number} userId Id of the User
     * @param {Array.<module:model/PhoneNumberAssignment>} phoneNumberAssignments A List of PhoneNumberAssignment-Objects
     * @param {module:api/PhoneNumbersApi~assignPhoneNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PhoneNumberAssignment>}
     */
    this.assignPhoneNumber = function(userId, phoneNumberAssignments, callback) {
      var postBody = phoneNumberAssignments;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling assignPhoneNumber");
      }

      // verify the required parameter 'phoneNumberAssignments' is set
      if (phoneNumberAssignments === undefined || phoneNumberAssignments === null) {
        throw new Error("Missing the required parameter 'phoneNumberAssignments' when calling assignPhoneNumber");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PhoneNumberAssignment];

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig/phonenumbers/', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePhoneNumberAssignment operation.
     * @callback module:api/PhoneNumbersApi~deletePhoneNumberAssignmentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the PhoneNumberAssignment
     * Deletes the PhoneNumberAssignment from the User with the given {userId}
     * @param {Number} userId Id of the User
     * @param {Number} phoneNumberId Id of the PhoneNumber that gets unassigned from the User with the given {userId}
     * @param {module:api/PhoneNumbersApi~deletePhoneNumberAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePhoneNumberAssignment = function(userId, phoneNumberId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deletePhoneNumberAssignment");
      }

      // verify the required parameter 'phoneNumberId' is set
      if (phoneNumberId === undefined || phoneNumberId === null) {
        throw new Error("Missing the required parameter 'phoneNumberId' when calling deletePhoneNumberAssignment");
      }


      var pathParams = {
        'userId': userId,
        'phoneNumberId': phoneNumberId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig/phonenumbers/{phoneNumberId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deletePhoneNumberAssignments operation.
     * @callback module:api/PhoneNumbersApi~deletePhoneNumberAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes the PhoneNumberAssignments
     * Deletes the PhoneNumberAssignments from the User with the given {userId}
     * @param {Number} userId Id of the User
     * @param {Array.<module:model/PhoneNumberAssignment>} phoneNumberAssignments A List of PhoneNumberAssignment-Objects
     * @param {module:api/PhoneNumbersApi~deletePhoneNumberAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deletePhoneNumberAssignments = function(userId, phoneNumberAssignments, callback) {
      var postBody = phoneNumberAssignments;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling deletePhoneNumberAssignments");
      }

      // verify the required parameter 'phoneNumberAssignments' is set
      if (phoneNumberAssignments === undefined || phoneNumberAssignments === null) {
        throw new Error("Missing the required parameter 'phoneNumberAssignments' when calling deletePhoneNumberAssignments");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig/phonenumbers/delete', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNumbersForAssignedPhone operation.
     * @callback module:api/PhoneNumbersApi~getNumbersForAssignedPhoneCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/NumberForPhoneAssignment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetches a list of NumberForPhoneAssignment
     * Fetches a list of NumberForPhoneAssignment of the User with the given {userId} and the Phone with the given {phoneId}.
     * @param {Number} userId Id of the User
     * @param {Number} phoneId Id of a phone
     * @param {module:api/PhoneNumbersApi~getNumbersForAssignedPhoneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/NumberForPhoneAssignment>}
     */
    this.getNumbersForAssignedPhone = function(userId, phoneId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getNumbersForAssignedPhone");
      }

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw new Error("Missing the required parameter 'phoneId' when calling getNumbersForAssignedPhone");
      }


      var pathParams = {
        'userId': userId,
        'phoneId': phoneId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [NumberForPhoneAssignment];

      return this.apiClient.callApi(
        '/users/{userId}/phoneconfig/phones/{phoneId}/numbers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPhoneNumber operation.
     * @callback module:api/PhoneNumbersApi~getPhoneNumberCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneNumber} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch a PhoneNumber
     * Fetch the PhoneNumber with the given {phoneNumberId}
     * @param {Number} phoneNumberId Id of the PhoneNumber that will be fetched
     * @param {module:api/PhoneNumbersApi~getPhoneNumberCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneNumber}
     */
    this.getPhoneNumber = function(phoneNumberId, callback) {
      var postBody = null;

      // verify the required parameter 'phoneNumberId' is set
      if (phoneNumberId === undefined || phoneNumberId === null) {
        throw new Error("Missing the required parameter 'phoneNumberId' when calling getPhoneNumber");
      }


      var pathParams = {
        'phoneNumberId': phoneNumberId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PhoneNumber;

      return this.apiClient.callApi(
        '/phonenumbers/{phoneNumberId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPhoneNumberAssignment operation.
     * @callback module:api/PhoneNumbersApi~getPhoneNumberAssignmentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneNumberAssignment} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetches the PhoneNumberAssignment
     * Fetches the PhoneNumberAssignment for the corresponding {phoneNumberId} of the User with the given {userId}
     * @param {Number} userId Id of the User
     * @param {Number} phoneNumberId Id of the PhoneNumber thats is assigned to the User with the given {userId}
     * @param {module:api/PhoneNumbersApi~getPhoneNumberAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneNumberAssignment}
     */
    this.getPhoneNumberAssignment = function(userId, phoneNumberId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPhoneNumberAssignment");
      }

      // verify the required parameter 'phoneNumberId' is set
      if (phoneNumberId === undefined || phoneNumberId === null) {
        throw new Error("Missing the required parameter 'phoneNumberId' when calling getPhoneNumberAssignment");
      }


      var pathParams = {
        'userId': userId,
        'phoneNumberId': phoneNumberId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PhoneNumberAssignment;

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig/phonenumbers/{phoneNumberId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPhoneNumberConfig operation.
     * @callback module:api/PhoneNumbersApi~getPhoneNumberConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneNumberConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetch the PhoneNumberConfig
     * Fetch the PhoneNumberConfig of the User with the given {userId}
     * @param {Number} userId Id of the User
     * @param {module:api/PhoneNumbersApi~getPhoneNumberConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneNumberConfig}
     */
    this.getPhoneNumberConfig = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling getPhoneNumberConfig");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PhoneNumberConfig;

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPhoneNumbers operation.
     * @callback module:api/PhoneNumbersApi~getPhoneNumbersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PhoneNumber>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrive a list of all configured PhoneNumbers
     * @param {Object} opts Optional parameters
     * @param {String} opts.type filter for the type of the PhoneNumber
     * @param {Boolean} opts.assigned filter for only assigned or unassigned PhoneNumbers
     * @param {module:api/PhoneNumbersApi~getPhoneNumbersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PhoneNumber>}
     */
    this.getPhoneNumbers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'type': opts['type'],
        'assigned': opts['assigned'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PhoneNumber];

      return this.apiClient.callApi(
        '/phonenumbers', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listPhoneNumberAssignment operation.
     * @callback module:api/PhoneNumbersApi~listPhoneNumberAssignmentCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PhoneNumberAssignment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Fetches a list of assigned phone numbers
     * Fetches a list of assigned phone numbers for the User with the given {userId}
     * @param {Number} userId Id of the User
     * @param {module:api/PhoneNumbersApi~listPhoneNumberAssignmentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PhoneNumberAssignment>}
     */
    this.listPhoneNumberAssignment = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling listPhoneNumberAssignment");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PhoneNumberAssignment];

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig/phonenumbers/', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putPhoneNumberConfig operation.
     * @callback module:api/PhoneNumbersApi~putPhoneNumberConfigCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PhoneNumberConfig} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the PhoneNumberConfig
     * Update the PhoneNumberConfig of the User with the given {userId}
     * @param {Number} userId Id of the User thats PhoneNumberConfig will be updated
     * @param {module:model/PhoneNumberConfig} phoneNumberConfig PhoneNumberConfig-Object with updated values that should be applied
     * @param {module:api/PhoneNumbersApi~putPhoneNumberConfigCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/PhoneNumberConfig}
     */
    this.putPhoneNumberConfig = function(userId, phoneNumberConfig, callback) {
      var postBody = phoneNumberConfig;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling putPhoneNumberConfig");
      }

      // verify the required parameter 'phoneNumberConfig' is set
      if (phoneNumberConfig === undefined || phoneNumberConfig === null) {
        throw new Error("Missing the required parameter 'phoneNumberConfig' when calling putPhoneNumberConfig");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PhoneNumberConfig;

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNumbersForAssignedPhones operation.
     * @callback module:api/PhoneNumbersApi~updateNumbersForAssignedPhonesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Updates the list of NumberForPhoneAssignment
     * Updates the list of NumberForPhoneAssignment of the User with the given {userId} and the Phone with the given {phoneId}. Only the active-flag can be changed. Elements in the list cannot be added or removed.
     * @param {Number} userId Id of the User
     * @param {Number} phoneId Id of a phone
     * @param {module:api/PhoneNumbersApi~updateNumbersForAssignedPhonesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateNumbersForAssignedPhones = function(userId, phoneId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updateNumbersForAssignedPhones");
      }

      // verify the required parameter 'phoneId' is set
      if (phoneId === undefined || phoneId === null) {
        throw new Error("Missing the required parameter 'phoneId' when calling updateNumbersForAssignedPhones");
      }


      var pathParams = {
        'userId': userId,
        'phoneId': phoneId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{userId}/phoneconfig/phones/{phoneId}/numbers', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updatePhoneNumberAssignments operation.
     * @callback module:api/PhoneNumbersApi~updatePhoneNumberAssignmentsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PhoneNumberAssignment>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update PhoneNumberAssignments of the User
     * Update the PhoneNumberAssignment with the given {phoneNumberId} of the User with the given {userId}
     * @param {Number} userId Id of the User
     * @param {Array.<module:model/PhoneNumberAssignment>} phoneNumberAssignments A List of PhoneNumberAssignment-Objects
     * @param {module:api/PhoneNumbersApi~updatePhoneNumberAssignmentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PhoneNumberAssignment>}
     */
    this.updatePhoneNumberAssignments = function(userId, phoneNumberAssignments, callback) {
      var postBody = phoneNumberAssignments;

      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling updatePhoneNumberAssignments");
      }

      // verify the required parameter 'phoneNumberAssignments' is set
      if (phoneNumberAssignments === undefined || phoneNumberAssignments === null) {
        throw new Error("Missing the required parameter 'phoneNumberAssignments' when calling updatePhoneNumberAssignments");
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [PhoneNumberAssignment];

      return this.apiClient.callApi(
        '/users/{userId}/phonenumberconfig/phonenumbers', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
