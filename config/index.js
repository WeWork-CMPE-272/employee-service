'use strict';

const convict = require('convict');
const _ = require('lodash');

module.exports = convict(
  {
   logLevel: {
      doc: 'The log level granularity.',
      format: ['fatal', 'error', 'warn', 'info', 'debug', 'trace'],
      default: 'debug',
      env: 'LOG_LEVEL',
      arg: 'log-level',
    },
    name: {
      doc: 'MySql database name.',
      // eslint-disable-next-line sonarjs/no-duplicate-String
      format: String,
      default: 'wework',
      env: 'DB_NAME',
      arg: 'db-name',
    },
    username: {
      doc: 'Database username.',
      format: String,
      default: 'wework',
      env: 'DB_USERNAME',
      arg: 'db-username',
    },
    password: {
      doc: 'Database password.',
      format: String,
      default: 'SguBAOIG2Xr3yhzKobJnK0ENVgXj68',
      env: 'DB_PASSWORD',
      arg: 'db-password',
      encrypted: ['qa', 'production'],
    },
    host: {
      doc: 'Database host.',
      format: String,
      default: 'we-work.c8kiod7k9d6d.us-east-1.rds.amazonaws.com',
      env: 'DB_HOST',
      arg: 'db-host',
    },
    port: {
      doc: 'Database port.',
      format: 'port',
      default: 3306,
      env: 'DB_PORT',
      arg: 'db-port',
    },
    minConnections: {
      doc: 'Min connections in the connection pool.',
      format: 'nat',
      default: 0,
      env: 'DB_MIN_CONNECTIONS',
      arg: 'db-min-connections',
    },
    maxConnections: {
      doc: 'Max connections in the connection pool.',
      format: 'nat',
      default: 10,
      env: 'DB_MAX_CONNECTIONS',
      arg: 'db-max-connections',
    },
    maxIdleTime: {
      doc: 'Max connection idle time in milliseconds to the database.',
      format: 'nat',
      default: 10000,
      env: 'DB_MAX_IDLE_TIME',
      arg: 'db-max-idle-time',
    },
});