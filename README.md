# named-level-store [![stability][0]][1]
[![npm version][2]][3] [![build status][4]][5] [![test coverage][6]][7]
[![downloads][8]][9] [![js-standard-style][10]][11]

Create a levelDB instance on your local machine.  Will return the same database
given the same name, each time

## Usage
```js
const level = require('named-level-store')
const db = level('my-cool-database-name')
console.log(db.location)
// => /Users/anon/.leveldb/my-cool-database-name
```

## API
### db = level(name)
Create a database under `~/.leveldb`. Useful to create a database and not have
to worry where it's stored. Sets the `db.location` property to reflect where
the database was stored

## Installation
```sh
$ npm install named-level-store
```

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/named-level-store.svg?style=flat-square
[3]: https://npmjs.org/package/named-level-store
[4]: https://img.shields.io/travis/yoshuawuyts/named-level-store/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/named-level-store
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/named-level-store/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/named-level-store
[8]: http://img.shields.io/npm/dm/named-level-store.svg?style=flat-square
[9]: https://npmjs.org/package/named-level-store
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard
