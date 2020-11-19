'use strict';

const query = require('../queries');
const _ = require('lodash');

const getDepartment = async (empNo) => {
    const row = await query.employees.findDepartment(empNo);
    const department = await query.departments.findByDepNo(row.deptNo);
    return department.deptName;
}

const getTitle = async (empNo) => {
    const row = await query.employees.getTitle(empNo);  
    return _.omit(row.dataValues,'empNo');
}

const getEmployeeInfo = async (req, res) => {
    const empNo = req.params.empNo || null;
    let response = {};
    if (empNo) {
        try {
            const employee = await query.employees.findByEmpNo(empNo);
            const department = await getDepartment(empNo);
            const title = await getTitle(empNo);
            response.body = {
                ...employee.dataValues,
                department,
                ...title,
            }
            console.log(response);
        }
        catch (err) {
        };
    }
    else {
        response.body = { 'message': 'empId is null' };
    }
    res.json(response.body);
};

module.exports = getEmployeeInfo;