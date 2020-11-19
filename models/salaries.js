'use strict';

const sequelize = require('../lib/sequelize');

const { Sequelize } = sequelize;

/**
 * DepartmentEmployee Table
 *
 * @memberof Models
 * @param {char(4)} emp_no
 * @param {char(4)} dept_no
 * @param {date} from_date
 * @param {date} to_date
 */
class Salaries extends Sequelize.Model { }
Salaries.init(
  {
    empNo: {
      field: 'emp_no',
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    salary: {
        field: 'salary',
        type: Sequelize.INTEGER,
    },
    fromDate: {
      field: 'from_date',
      type: Sequelize.DATE,
      primaryKey: true,
    },
    toDate: {
      field: 'to_date',
      type: Sequelize.DATE,
    },
  },
  {
    tableName: 'salaries',
    modelName: 'Salaries',
    sequelize,
  },
);

module.exports = Salaries;