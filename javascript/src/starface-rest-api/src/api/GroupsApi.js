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
    define(['ApiClient', 'model/Group', 'model/GroupListItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Group'), require('../model/GroupListItem'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.GroupsApi = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.Group, root.StarfaceRestApi.GroupListItem);
  }
}(this, function(ApiClient, Group, GroupListItem) {
  'use strict';

  /**
   * Groups service.
   * @module api/GroupsApi
   * @version 6.7.0.22
   */

  /**
   * Constructs a new GroupsApi. 
   * @alias module:api/GroupsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createGroup operation.
     * @callback module:api/GroupsApi~createGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new group
     * Create a STARFACE group.
     * @param {module:model/Group} group Group to save.
     * @param {module:api/GroupsApi~createGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createGroup = function(group, callback) {
      var postBody = group;

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling createGroup");
      }


      var pathParams = {
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
        '/groups', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/GroupsApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a group with id
     * Delete a STARFACE group.
     * @param {Number} groupid Id of the group.
     * @param {module:api/GroupsApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(groupid, callback) {
      var postBody = null;

      // verify the required parameter 'groupid' is set
      if (groupid === undefined || groupid === null) {
        throw new Error("Missing the required parameter 'groupid' when calling deleteGroup");
      }


      var pathParams = {
        'groupid': groupid
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
        '/groups/{groupid}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroup operation.
     * @callback module:api/GroupsApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Group} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a group with id
     * Retrieve a STARFACE group.
     * @param {Number} groupid Id of the group.
     * @param {module:api/GroupsApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Group}
     */
    this.getGroup = function(groupid, callback) {
      var postBody = null;

      // verify the required parameter 'groupid' is set
      if (groupid === undefined || groupid === null) {
        throw new Error("Missing the required parameter 'groupid' when calling getGroup");
      }


      var pathParams = {
        'groupid': groupid
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
      var returnType = Group;

      return this.apiClient.callApi(
        '/groups/{groupid}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroups operation.
     * @callback module:api/GroupsApi~getGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GroupListItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of groups
     * Retrieve a list of STARFACE groups.
     * @param {Object} opts Optional parameters
     * @param {String} opts.searchTerm The searchTerm to query groups.
     * @param {module:api/GroupsApi~getGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/GroupListItem>}
     */
    this.getGroups = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'searchTerm': opts['searchTerm'],
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
      var returnType = [GroupListItem];

      return this.apiClient.callApi(
        '/groups', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveGroup operation.
     * @callback module:api/GroupsApi~saveGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save a group
     * Save a STARFACE group.
     * @param {module:model/Group} group Group to save.
     * @param {module:api/GroupsApi~saveGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveGroup = function(group, callback) {
      var postBody = group;

      // verify the required parameter 'group' is set
      if (group === undefined || group === null) {
        throw new Error("Missing the required parameter 'group' when calling saveGroup");
      }


      var pathParams = {
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
        '/groups', 'PUT',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
