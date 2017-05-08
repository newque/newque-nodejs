/**
 * Created by brad on 2017-05-07.
 */
'use strict';

var utils = require('./utils');
var bind = require('./helpers/bind');
var Newque = require('./core/Newque');
var defaults = require('./defaults');

/**
 * Create an instance of Newque
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Newque} A new instance of Newque
 */
function createInstance(defaultConfig) {
  var context = new Newque(defaultConfig);
  var instance = bind(Newque.prototype.request, context);

  // Copy newque.prototype to instance
  utils.extend(instance, Newque.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var newque = createInstance(defaults);

// Expose Newque class to allow class inheritance
newque.Newque = Newque;

// Factory for creating new instances
newque.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

module.exports = newque;

// Allow use of default import syntax in TypeScript
module.exports.default = newque;
