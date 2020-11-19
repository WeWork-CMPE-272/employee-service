'use strict';

const query = require('../queries');

const updateTitle = async (req, res) => {
    const title = req.body.title || null;
    const empNo = req.params.empNo || null;
    let response = {};
    if (empNo || title) {
        try {
            const employee = await query.employees.updateTitle(empNo, title);
            response.body = {
                ...employee.dataValues
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

module.exports = updateTitle;