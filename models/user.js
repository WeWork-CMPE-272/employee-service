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
class User extends Sequelize.Model { }
User.init(
  {
    userId: {
        field: 'user_id',
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
    empNo: {
      field: 'emp_no',
      type: Sequelize.INTEGER,
      primaryKey: true,
    },
    firstName: {
        field: 'username',
        type: Sequelize.STRING,
    },
},
  {
    tableName: 'user',
    modelName: 'User',
    sequelize,
  },
);

module.exports = User;