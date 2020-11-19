'use strict';

const sequelize = require('../lib/sequelize');

const { Sequelize } = sequelize;

/**
 * Department Table
 *
 * @memberof Models
 * @param {char(4)} dept_no
 * @param {varchar(40)} dept_name
 */
class Departments extends Sequelize.Model {}
Departments.init(
  {
    deptNo: {
      field: 'dept_no',
      type: Sequelize.STRING(4),
      primaryKey: true,
    },
    deptName: {
      field: 'dept_name',
      type: Sequelize.STRING(40),
      primaryKey: true,
      },
  },
  {
    tableName: 'departments',
    modelName: 'Departments',
    sequelize,
  },
);

module.exports = Departments;