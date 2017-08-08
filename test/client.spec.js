'use strict';

var chai = require('chai');
var should = chai.should;
var expect = chai.expect;
var sinon = require('sinon');
var Promise = require('bluebird');
var request = require('superagent-promise')(require('superagent'), Promise);
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

var newque = require('../lib/newque');
var helpers = require('./helpers');

var nuq = newque.create({
  baseURL: 'http://localhost:8000/',
  timeout: 1000,
  headers: {"Content-type":"application/json"}
});

/*eslint no-param-reassign:0*/
describe('#newque write tests', function newqueWriteTest() {
  /*eslint no-param-reassign:0*/
  var result;

  before(function() {
    result = nuq.post(
      '/v1/example',
      {
        "atomic":"true",
        "messages":[
          'Fred',
          'Flintstone',
          'Rocks!'
        ]
      }
    ).then(function(res) {
      return res.data;
    });
  });

  it('should return a successful promise', function() {
    return chai.assert.isFulfilled(result, "optional message");
  });

  it('expect to respond with write with 3 saved messages', function() {
    return assert(result, "saved").to.equal(3);
  });

  it('should return a 201 CREATED response', function() {
    return assert(result, "code").to.equal(201);
  });
});

describe('#newque read tests', function newqueReadTest() {
  /*eslint no-param-reassign:0*/
  var result;

  before(function() {
    result = nuq.get(
      '/v1/example', 
      {
        "headers": {
          "newque-mode":"one"
        }
    }).then(function(res) {
      return res.data;
    });
  });

  it('should return a successful promise', function() {
    return chai.assert.isFulfilled(result, "optional message");
  });

  it('should http read ONE message from newque', function() {
    return assert(result, "messages").to.contain.members(["Fred"]);
  });

  before(function() {
    result = nuq.get(
      '/v1/example', 
      {
        "headers": {
          "newque-mode":"many 3"
        }
    }).then(function(res) {
      return res.data;
    });
  });

  it('should http read THREE messages from newque', function() {
    return assert(result, "messages").to.contain.all.members(["Fred","Flintstone","Rocks!"]);
  });

  before(function() {
    result = nuq.get(
      '/v1/example', 
      {
        "headers": {
          "newque-mode":"many 3"
        }
    }).then(function(res) {
      return res.data;
    });
  });

  it('should http read after last id from newque', function() {
    return assert(result, "messages").to.contain.all.values(["Fred","Flintstone","Rocks!"]);
  });

  it('should return a 200 success response', function() {
    return assert(result, "code").to.equal(200);
  });

  it('should read nothing', function() {
    return expect(false).to.equal(true);
  });
  
  it('should read binary data correctly', function() {
    return expect(false).to.equal(true);
  });

  it('should support HTTP read streams', function() {
    return expect(false).to.equal(true);
  });
});

describe('#newque other tests', function newqueOtherTest() {
  it('should count', function() {
    return expect(false).to.equal(true);
  });
  it('should check health', function() {
    return expect(false).to.equal(true);
  });
  it('should check health globally', function() {
    return expect(false).to.equal(true);
  });
  it('should support concurrent calls', function() {
    return expect(false).to.equal(true);
  });
  it('should pass all errors', function() {
    return expect(false).to.equal(true);
  });
});
  // the function to test
function consoleOutput(param) {
  var newParam = param * param;
  console.log(newParam);
}
function assert(result, prop) {
  return expect(result).to.eventually.have.deep.property(prop);
}
