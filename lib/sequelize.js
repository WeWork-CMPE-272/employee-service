'use strict';

const Sequelize = require('sequelize');
const bunyan = require('bunyan');
const moment = require('moment');

const config = require('../config');

const log = bunyan.createLogger({
  name: 'db',
  level: config.get('logLevel'),
});

const sequelize = new Sequelize({
  database: config.get('name'),
  username: config.get('username'),
  password: config.get('password'),
  host: config.get('host'),
  port: config.get('port'),
  dialect: 'mysql',
  logging: function (message) {
    log.trace(message);
  },
  define: {
      timestamps: false,
  },
  pool: {
    idle: config.get('maxIdleTime'),
    min: config.get('minConnections'),
    max: config.get('maxConnections'),
  },
});

module.exports = sequelize;