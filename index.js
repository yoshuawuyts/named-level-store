const assert = require('assert')
const mkdirp = require('mkdirp')
const level = require('level')
const path = require('path')

module.exports = namedLevelStore

// Create a levelDB instance on your local machine
// str -> obj
function namedLevelStore (name) {
  assert.equal(typeof name, 'string', 'named-level-store: name should be a string')
  const location = path.join(process.env.HOME, '.leveldb', name)
  mkdirp.sync(location)
  const db = level(location)
  db.location = location
  return db
}
