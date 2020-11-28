'use strict';

const query = require('../queries');
const _ = require('lodash');
const P = require('blend-promise-utils');

const getTitle = async (empNo) => {
    const row = await query.employees.getTitle(empNo);
    return _.omit(row.dataValues, 'empNo');
}

const getUser = async (empNo) => {
    const row = await query.user.getUserByEmpNo(empNo);
    if(row)
        return _.omit(row.dataValues, 'empNo');
    return {}
}

const getAllEmployees = async (req, res) => {
    const offset = req.params.offset || 0;
    let response = {};
    let employees = [];
    try {
        const allEmployees = await query.employees.getAllEmployees(offset);
        console.log(allEmployees);
        employees = await P.map(allEmployees, async employee => {
            const title = await getTitle(employee.empNo);
            const user = await getUser(employee.empNo);
            return {
                ...employee.dataValues,
                ...title,
                ...user,
            }
        })
        console.log(employees);
        response.body = {
            employees
        }
    }
    catch (err) {
        console.log(err);
    };
    res.json(response.body);
};

module.exports = getAllEmployees;