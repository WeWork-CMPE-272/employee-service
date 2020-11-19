'use strict';

const models = require('../../models');

const departments = {}

departments.findByDepNo = async function(dept_no) {
    const res = await models.Departments.findOne({ where: { dept_no } });
    return res;
}

module.exports = departments;