  
'use strict';

const fs = require('fs');
const path = require('path');

const _ = require('lodash');

const sequelize = require('../lib/sequelize');

/**
 * @module models
 */

// require all the files to in order to register the models
/* eslint-disable node/global-require */
fs.readdirSync(__dirname)
  .filter(file => path.extname(file) === '.js')
  .forEach(file => require(`./${file}`));
/* eslint-enable node/global-require */

/**
 * Create a `namespacedFields` attribute on each model.
 *
 * Namespaced Fields are helpful for raw queries which select multiple tables
 * by disambiguating which table a column is from.
 *
 * ex: "user"."id" AS "user.id", "user"."stripe_id" AS "user.stripeId", ...
 *
 * @param {external:Sequelize.Model} model
 */
function attachNamespacedFields(model) {
  const tableName = model.tableName;

  model.namespacedFields =
    _.map(model.tableAttributes, function (col, attr) {
      return `"${tableName}"."${col.field}" AS "${tableName}.${attr}"`;
    }).join(', ') + ' ';
}

_.forEach(sequelize.models, attachNamespacedFields);

module.exports = sequelize.models;