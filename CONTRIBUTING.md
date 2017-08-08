# Contributing

We are open to, and grateful for, any contributions made by the community. By contributing to newque, you agree to abide by the [code of conduct](https://github.com/newque/newque-nodejs/blob/master/CODE_OF_CONDUCT.md).

### Code Style

Please follow the [node style guide](https://github.com/felixge/node-style-guide).

### Commit Messages

Commit messages should be verb based, using the following pattern:

- `Fixing ...`
- `Adding ...`
- `Updating ...`
- `Removing ...`

### Testing

Please update the tests to reflect your code changes. Pull requests will not be accepted if they are failing on [Travis CI](https://travis-ci.org/mzabriskie/axios).

### Documentation

Please update the docs accordingly so that there are no discrepencies between the API and the documentation.

### Developing

In order to start developing, you will need to install the zeromq library in your environment.  This can be done using homebrew on a mac.  To install homebrew follow:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)" < /dev/null 2> /dev/null
```

To install zeromq:
```
brew install zeromq

```

The test suite requires a running Newque server.  The easiest way to get started is to fire up the docker image:
```
docker run -v $(pwd)/conf:/newque/conf -p 8000:8000 -p 8001:8001 -p 8005:8005 -p 8006:8006 -p 8007:8007 -d -t newque/newque
```

- `npm run test` run the mocha and chai tests


Please don't include changes to `dist/` in your pull request. This should only be updated when releasing a new version.

### Releasing

Releasing a new version is mostly automated. For now the [CHANGELOG](https://github.com/newque/newque/blob/master/CHANGELOG.md) requires being updated manually. Once this has been done run the commands below. Versions should follow [semantic versioning](http://semver.org/).

- `npm version <newversion> -m "Releasing %s"`
- `npm publish`

### Running Examples

Examples are included in part to allow manual testing.

Running example

```bash
$ npm run examples
# Open 127.0.0.1:3000
```

Running sandbox in browser

```bash
$ npm start
# Open 127.0.0.1:3000
```

Running sandbox in terminal

```bash
$ npm start
$ node ./sandbox/client
```