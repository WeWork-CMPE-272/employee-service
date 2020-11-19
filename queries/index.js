'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');

/**
 * Iterates through all of the files in the models and joins directories and
 * attaches the object exported by each to itself.
 *
 * The files in models are namespaced by the camelcase of the file name, whereas
 * the files in joins are just assigned to the "top level" namespace.
 */

const query = {};

/**
 * Mount models under namespace
 */
getFiles('models').forEach(function (file) {
  const name = _.camelCase(file.replace('.js', ''));
  // eslint-disable-next-line node/global-require
  query[name] = require(`./models/${file}`);
});


/**
 * Returns all of the js files in a given directory
 *
 * @private
 * @param {string} dir - the directory to scan
 * @returns {Array} of js files
 */
function getFiles(dir) {
  dir = path.join(__dirname, dir);
  // eslint-disable-next-line node/no-sync
  return fs.readdirSync(dir).filter(file => path.extname(file) === '.js');
}

module.exports = query;