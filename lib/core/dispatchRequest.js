/**
 * Created by brad on 2017-05-07.
 * Borrowed from Axios
 * https://github.com/mzabriskie/axios/blob/master/lib/core/dispatchRequest.js
 */
'use strict';

var utils = require('./../utils');
var transformData = require('./transformData');
var defaults = require('../defaults');

/**
 * Dispatch a request to the server using the configured protocol.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.protocol || defaults.protocol;

  return adapter(config).then(function onProtocolResolution(response) {
    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onProtocolRejection(reason) {
    if (!isCancel(reason)) {
      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};
