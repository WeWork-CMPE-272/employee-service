'use strict';

const models = require('../../models');
const moment = require('moment');
const employees = {}

employees.findByEmpNo = async function(emp_no) {
    const res = await models.Employees.findOne({ where: { emp_no } });
    return res;
}

employees.findDepartment = async function(emp_no) {
    const res = await models.DepartmentEmployee.findOne({ where: { emp_no } });
    return res;
}

employees.getAllSalaries = async function(emp_no) {
    const res = await models.Salaries.findAll({ where: { emp_no }, order: [['to_date','DESC']] });
    return res;
}

employees.getTitle = async function(emp_no) {
    const res = await models.Titles.findOne({ where: { emp_no } });
    return res;
}

employees.updateTitle = async function(emp_no, title) {
    const employee = await employees.getTitle(emp_no);
    employee.title = title;
    //employee.fromDate = moment();
    const update = await employee.save()
    return update;

}


module.exports = employees;