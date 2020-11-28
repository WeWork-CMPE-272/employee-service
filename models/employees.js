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
class Employees extends Sequelize.Model { }
Employees.init(
  {
    empNo: {
      field: 'emp_no',
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    fromDate: {
        field: 'birth_date',
        type: Sequelize.DATE,
    },
    firstName: {
        field: 'first_name',
        type: Sequelize.STRING,
    },
    lastName: {
        field: 'last_name',
        type: Sequelize.STRING,
    },
    gender: {
        field: 'gender',
        type: Sequelize.ENUM('M','F'),
    },
    hireDate: {
      field: 'hire_date',
      type: Sequelize.DATE,
    },
    birthday: {
      field: 'birth_date',
      type: Sequelize.DATE,
    }
  },
  {
    tableName: 'employees',
    modelName: 'Employees',
    sequelize,
  },
);

module.exports = Employees;