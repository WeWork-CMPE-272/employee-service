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
class DepartmentManager extends Sequelize.Model { }
DepartmentManager.init(
  {
    empNo: {
      field: 'emp_no',
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    deptNo: {
      field: 'dept_no',
      type: Sequelize.STRING(4),
      reference: {
        model: 'departments',
        id: 'dept_no',
      },
      primaryKey: true,
    },
    fromDate: {
      field: 'from_date',
      type: Sequelize.DATE,
    },
    toDate: {
      field: 'to_date',
      type: Sequelize.DATE,
    },
  },
  {
    tableName: 'dept_manager',
    modelName: 'DepartmentManager',
    sequelize,
  },
);

module.exports = DepartmentManager;