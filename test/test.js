'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
var newque = require('../lib/newque');

/*eslint no-param-reassign:0*/
describe('#newque', function newqueTest() {
  /*eslint no-param-reassign:0*/
  it('should return count 0', function counter() {
    var result = numFormatter(1);
    expect(result).to.equal('1');
  });

  it('should http write to newque', function startup() {
    newque({
      protocol: 'http',
      method: 'write',
      url: 'localhost:8000/v1',
      channel: 'example',
      messages: [
        'Fred',
        'Flintstone',
        'Rocks!'
      ]
    })
    .then(function success(response) {
      /*eslint no-console: "allow"*/
      console.log("SUCCESS", response);
    })
    .catch(function failure(error) {
      /*eslint no-console: "allow"*/
      console.log("FAILURE",error);
    });
  });

  it('should log the correct value to console', () => {
    // "spy" on `console.log()`
    let spy = sinon.spy(console, 'log');

    // call the function that needs to be tested
    consoleOutput(5);

    // assert that it was called with the correct value
    assert(spy.calledWith(25));

    // restore the original function
    spy.restore();
  });
});

  // the function to test
function consoleOutput(param) {
  var newParam = param * param;
  console.log(newParam);
}
