'use strict';

const models = require('../../models');
const moment = require('moment');
const employees = {}

employees.getAllEmployees = async function (offset) {
    const res = await models.Employees.findAll({ offset: parseInt(offset), limit: 10 });
    return res;
}

employees.findByEmpNo = async function (emp_no) {
    const res = await models.Employees.findOne({ where: { emp_no } });
    return res;
}

employees.findDepartment = async function (emp_no) {
    const res = await models.DepartmentEmployee.findOne({ where: { emp_no } });
    return res;
}

employees.getAllSalaries = async function (emp_no) {
    const res = await models.Salaries.findAll({ where: { emp_no }, order: [['to_date', 'DESC']] });
    return res;
}

employees.getTitle = async function (emp_no) {
    const res = await models.Titles.findOne({ where: { emp_no }, order: [['to_date', 'DESC']] });
    return res;
}

employees.getAllTitle = async function (emp_no) {
    const res = await models.Titles.findAll({ where: { emp_no } });
    return res;
}

employees.updateTitle = async function (emp_no, title) {
    const employee = await employees.getTitle(emp_no);
    const today = moment().format('YYYY-MM-DD');
    console.log(today);
    const toDate = employee.toDate;
    console.log(toDate);
    employee.toDate = today;
    const update = await employee.save()
    const newTitle = await models.Titles.create({ empNo: emp_no, title, fromDate: today, toDate })
    return newTitle;

}


module.exports = employees;