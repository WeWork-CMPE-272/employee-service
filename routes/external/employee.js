'use strict';

const express = require('express');

const updateTitle = require('../../middleware/update-title');
const getEmployeeInfo = require('../../middleware/get-employee-info');
const getSalary = require('../../middleware/get-salary');


const employee = express.Router();

employee.get('/:empNo', getEmployeeInfo);

employee.get('/:empNo/salary', getSalary);

employee.post('/:empNo/title', updateTitle);

module.exports = employee;