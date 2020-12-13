'use strict';

const query = require('../queries');
const _ = require('lodash');

const getDepartment = async (empNo) => {
    const row = await query.employees.findDepartment(empNo);
    const department = await query.departments.findByDepNo(row.deptNo);
    const deptManager = await query.deptManager.findDeptManager(row.deptNo);
    const manager = await query.employees.findByEmpNo(deptManager.empNo);
    return { name: department.deptName, deptManager: manager.dataValues };
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
        }
        catch (err) {
            console.log(err);
        };
    }
    else {
        response.body = { 'message': 'empId is null' };
    }
    res.json(response.body);
};

module.exports = getEmployeeInfo;