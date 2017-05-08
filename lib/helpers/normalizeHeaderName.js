/**
 * Created by brad on 2017-05-07.
 * Borrowed from Axios library
 * https://github.com/mzabriskie/axios/blob/master/lib/helpers/normalizeHeaderName.js
 */
'use strict';

var utils = require('../utils');

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};
