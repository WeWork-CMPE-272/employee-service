// Tamanna Mehta
const nock = require('nock');
const assert = require('clutch-assert');

const updateTitle = require('./../middleware/update-title');
const getEmployeeInfo = require('./../middleware/get-employee-info');
const getSalary = require('./../middleware/get-salary');
const getAllEmployees = require('./../middleware/get-employees');

describe('Testing Employee', () => {
    it('test updateTitle', async () => {
        const req = {
            params: { empNo: '10001' },
            body: { title: 'testing' },
        };

        const res = {
            json(body) {
                assert.is(body, undefined);
            },
        };

        await updateTitle(req, res);
    });

    it('test updateTitle error', async () => {
        const req = {
            params: {},
            body: {},
        };

        const res = {
            json(body) {
                assert.is(body.message, 'empId is null');
            },
        };

        await updateTitle(req, res);
    });

    it('test getAllEmployees', async () => {
        const req = {
            params: {},
            body: { title: 'testing' },
        };

        const res = {
            json(body) {
                assert.true('employees' in body);
            },
        };

        await getAllEmployees(req, res);
    });

    it('test getSalary', async () => {
        const req = {
            params: { empNo: '10001' },
            body: { salary: 'testing' },
        };

        const res = {
            json(body) {
                assert.true('salaries' in body);
            },
        };

        await getSalary(req, res);
    });
    it('test getSalary with no employee no.', async () => {
        const req = {
            params: { },
            body: { salary: 'testing' },
        };

        const res = {
            json(body) {
                assert.is(body.message, 'empId is null');
            },
        };

        await getSalary(req, res);
    });

    it('test get employee info', async () => {
        const req = {
            params: {empNo: '10001'},
            body: { title: 'testing' },
        };

        const res = {
            json(body) {
                assert.true('department' in body);
            },
        };

        await getEmployeeInfo(req, res);
    });
});
