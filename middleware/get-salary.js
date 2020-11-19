'use strict';

const query = require('../queries');
const _ = require('lodash');

const getSalary = async (req, res) => {
    const empNo = req.params.empNo || null;
    let response = {};
    if (empNo) {
        try {
            let salaries = await query.employees.getAllSalaries(empNo);
            salaries = salaries.map(salary => salary.dataValues);
            response.body = {
                salaries
            }
        }
        catch (err) {
        };
    }
    else {
        response.body = { 'message': 'empId is null' };
    }
    res.json(response.body);
};

module.exports = getSalary;