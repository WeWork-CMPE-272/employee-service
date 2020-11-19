const models = require('./models');
const sequelize = require('./lib/sequelize');
const query = require('./queries');
console.log(query);
const main = async function () {

    let res = null;
    // const dept_no = 'd009';
    // let res = await models.Departments.findOne({ where: { dept_no } });
    // console.log(res);

    // const emp_no = 10001;

    // res = await models.DepartmentEmployee.findOne({ where: { emp_no } });
    // console.log(res);

    // res = await models.DepartmentManager.findOne({ where: { dept_no } });
    // console.log(res);

    // res = await models.Employees.findOne({ where: { emp_no } });
    // console.log(res);

    // res = await models.Salaries.findOne({ where: { emp_no } });
    // console.log(res);

    // res = await models.Titles.findOne({ where: { emp_no } });
    // console.log(res);


    // const res = await sequelize.query(`SELECT * FROM wework.current_dept_emp LIMIT 2`, {type: sequelize.QueryTypes.SELECT});
    // console.log(res);

    // let res = await query.deptManager.findDeptManager('d009');
    // console.log(res);

    // res = await query.deptManager.findAllDeptManagers();
    // console.log(res);

    // res = await query.employees.getAllSalaries(10001);
    // console.log(res);

    res = await query.employees.updateTitle(10001, 'Tester', '2000-10-01');
    console.log(res);

}

main();