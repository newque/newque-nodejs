'use strict';

var expect = require('chai').expect;
var newque = require('../index');

describe('#newque', function () {
  it('should return count 0', function () {
    var result = numFormatter(1);
    expect(result).to.equal('1');
  });
});