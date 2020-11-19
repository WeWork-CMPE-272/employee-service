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
class Titles extends Sequelize.Model { }
Titles.init(
  {
    empNo: {
      field: 'emp_no',
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    title: {
        field: 'title',
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
    tableName: 'titles',
    modelName: 'Titles',
    sequelize,
  },
);

module.exports = Titles;