'use strict';

var expect = require('chai').expect;
var assert = require('chai').assert;
var sinon = require('sinon');
var newque = require('../lib/newque');

var nuq = newque.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
  headers: {"Content-type":"application/json"}
});

/*eslint no-param-reassign:0*/
describe('#newque', function newqueTest() {
  /*eslint no-param-reassign:0*/

  it('should http write to newque', function() {
    nuq.post(
      '/v1/example',
      {
        "atomic":"true",
        "messages":[
          'Fred',
          'Flintstone',
          'Rocks!'
      ]})
    .then(function success(response) {
      /*eslint no-console: "allow"*/
      console.log("SUCCESS", response);
    })
    .catch(function failure(error) {
      /*eslint no-console: "allow"*/
      console.log("FAILURE",error);
    });
  });

  it('should http read from newque', function() {
    nuq.get('/v1/example', {"headers": {"newque-mode":"one"}})
    .then(function success(response) {console.log("SUCCESS", response)})
    .catch(function failure(error) {console.log("ERROR", error)});
  });

  // it('should log the correct value to console', function() {
  //   // "spy" on `console.log()`
  //   var spy = sinon.spy(console, 'log');

  //   // call the function that needs to be tested
  //   consoleOutput(5);

  //   // assert that it was called with the correct value
  //   assert(spy.calledWith(25));

  //   // restore the original function
  //   spy.restore();
  // });
});

  // the function to test
function consoleOutput(param) {
  var newParam = param * param;
  console.log(newParam);
}
