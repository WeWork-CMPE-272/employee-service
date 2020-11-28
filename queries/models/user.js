'use strict';

const models = require('../../models');
const user = {}

user.createUser = async function(empNo, username, admin=0) {
    const user = await models.User.create({empNo, username, admin});
    return user;
}

user.getUser = async function(username) {
    const user = await models.User.findOne({ where: { username } });
    return user;
}

user.getUserByEmpNo = async function(empNo) {
    const user = await models.User.findOne({ where: { empNo } });
    return user;
}

module.exports = user;