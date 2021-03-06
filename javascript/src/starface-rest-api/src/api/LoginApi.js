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
    define(['ApiClient', 'model/AuthToken', 'model/Login'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthToken'), require('../model/Login'));
  } else {
    // Browser globals (root is window)
    if (!root.StarfaceRestApi) {
      root.StarfaceRestApi = {};
    }
    root.StarfaceRestApi.LoginApi = factory(root.StarfaceRestApi.ApiClient, root.StarfaceRestApi.AuthToken, root.StarfaceRestApi.Login);
  }
}(this, function(ApiClient, AuthToken, Login) {
  'use strict';

  /**
   * Login service.
   * @module api/LoginApi
   * @version 6.7.0.22
   */

  /**
   * Constructs a new LoginApi. 
   * @alias module:api/LoginApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getLogin operation.
     * @callback module:api/LoginApi~getLoginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Login} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a template Login-Object filled with loginType and nonce
     * This endpoint returns a template of an Login-Object that proviedes the loginType required by the Server and a nonce. The template Login-Object can then be used to authorize a user by sending a POST-Request to this endpoint providing the users secret. See the description of this endpoind&#39;s POST-Request on how to derive the secret from a users loginId and password.
     * @param {module:api/LoginApi~getLoginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Login}
     */
    this.getLogin = function(callback) {
      var postBody = null;


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
      var returnType = Login;

      return this.apiClient.callApi(
        '/login', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the login operation.
     * @callback module:api/LoginApi~loginCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AuthToken} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Login to the Rest-Service
     * This endpoint is used to login to the STARFACE Rest-Service. By providing a template Login-Object from this endpoints GET-Request with the users secret. If the loginType is INTERNAL the secret can be calculated with &lt;login&gt;:SHA512(&lt;loginId&gt;&lt;nonce&gt;SHA512(&lt;password&gt;)). For loginType ACTIVE_DIRECTORY the secret will be BASE64(loginId+nonce+password). For security reasons it&#39;s recommended to use HTTPS over HTTP for the login. The returned token must then be used in a HTTP header paramether named \&quot;authToken\&quot; in order to use this login.
     * @param {module:model/Login} login Login-Object with the users secret.
     * @param {module:api/LoginApi~loginCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/AuthToken}
     */
    this.login = function(login, callback) {
      var postBody = login;

      // verify the required parameter 'login' is set
      if (login === undefined || login === null) {
        throw new Error("Missing the required parameter 'login' when calling login");
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
      var returnType = AuthToken;

      return this.apiClient.callApi(
        '/login', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the logout operation.
     * @callback module:api/LoginApi~logoutCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * invalidate the provided authToken.
     * User for the given authToken will be logged out. The authToken will be invalidated
     * @param {String} authToken the authToken to check
     * @param {module:api/LoginApi~logoutCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.logout = function(authToken, callback) {
      var postBody = null;

      // verify the required parameter 'authToken' is set
      if (authToken === undefined || authToken === null) {
        throw new Error("Missing the required parameter 'authToken' when calling logout");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'authToken': authToken
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/login', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
