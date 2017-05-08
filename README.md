Newque Node.js Driver
=========

[![npm version](https://badge.fury.io/js/newque-nodejs.svg)](https://badge.fury.io/js/newque-nodejs)
[![Build Status](https://travis-ci.org/newque/newque-nodejs.svg?branch=master)](https://travis-ci.org/newque/newque-nodejs)
[![Coverage Status](https://coveralls.io/repos/github/newque/newque-nodejs/badge.svg?branch=master)](https://coveralls.io/github/newque/newque-nodejs?branch=master)

The Newque Node.js driver the design of which is inspired heavily by Newque.
## Installation

  `npm install @bradstimpson\newque-nodejs`

## Usage
This assumes that the channel has been configured as `httpFormat=json`:

```javascript
  // Send an HTTP POST request to write
  newque({
    protocol: 'http',
    method: 'write',
    url: 'localhost:8000/v1',
    channel: 'example',
    messages: {
      'Fred',
      'Flintstone',
      'Rocks!'
    }
  })  
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

```javascript
  // Send an HTTP GET request to count
  newque({
    protocol: 'http',
    method: 'count',
    url: 'localhost:8000/v1',
    channel: 'example'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

```javascript
  // Send an HTTP GET request to read 
  newque({
    protocol: 'http',
    method: 'read',
    url: 'localhost:8000/v1',
    channel: 'example',
    mode: 'one'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

The data types that can be sent with Newque are:
```text
// messages can be sent as a request body
// only applicable request methods 'POST', 'PUT', and 'PATCH' (all resolve to 'POST'
// - string, plain object
// - stream, Buffer
```

## Tests

  `npm test`

## Lint

  `npm run lint`
  
## Code Coverage

  `npm run cover`

## Contributing

In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.

[![NPM](https://nodei.co/npm/newque-nodejs.png)](https://nodei.co/npm/newque-nodejs/)
