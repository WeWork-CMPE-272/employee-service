'use strict';

const sequelize = require('../../lib/sequelize');
const models = require('../../models');

const deptManager = {}

deptManager.findDeptManager = async function(dept_no) {
    const res = await models.DepartmentManager.findOne({ 
        where: { dept_no },
        order: [['to_date', 'DESC']]
    });
    return res;
}

deptManager.findAllDeptManagers = async function() {
    const res = await models.DepartmentManager.findAll({
        limit:9,
        order: [['to_date', 'DESC']]
    });
    return res;
}

deptManager.findDeptManagerAllRecords = async function() {
    const res = await models.DepartmentManager.findAll({
        order: [['to_date', 'DESC']]
    });
    return res;
}

module.exports = deptManager;