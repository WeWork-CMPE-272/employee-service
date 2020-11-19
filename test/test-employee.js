// Tamanna Mehta
const nock = require('nock');
const assert = require('clutch-assert');

const updateTitle = require('./../middleware/update-title');
const getEmployeeInfo = require('./../middleware/get-employee-info');
const getSalary = require('./../middleware/get-salary');
const getAllEmployees = require('./../middleware/get-employees');

// Mocking get tweet calls
nock('http://localhost:4000')
    .post('/employee/10001/title')
    .reply(200);

nock('https://api.twitter.com')
    .get('/1.1/statuses/show.json?id=124')
    .reply(400, { status: 'BAD REQUEST' });

// Mocking post tweet calls
nock('https://api.twitter.com')
    .post('/1.1/statuses/update.json?status=valid')
    .reply(200, { status: 'OK' });

nock('https://api.twitter.com')
    .post('/1.1/statuses/update.json?status=duplicate')
    .reply(400, { status: 'BAD REQUEST' });

// Mocking delete tweet calls
nock('https://api.twitter.com')
    .post('/1.1/statuses/destroy/123.json')
    .reply(200, { status: 'OK' });

nock('https://api.twitter.com')
    .post('/1.1/statuses/destroy/124.json')
    .reply(400, { status: 'BAD REQUEST' });

// Mocking get all tweet calls
nock('https://api.twitter.com')
    .get('/1.1/statuses/user_timeline.json')
    .reply(200, { status: 'OK' });

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
            params: { empNo: '10001' },
            body: { title: 'testing' },
        };

        const res = {
            json(body) {
                //1) add console.log(body);
                //2) Check what you getting from server
                assert.true('employees' in body);
            },
        };

        await getAllEmployees(req, res);
    });


    // it('test get tweet with invalid ID', async () => {
    //     const req = {
    //         params: { id: '124' },
    //     };
    //     const res = {

    //         json(body) {
    //             assert.is(body.status, 'BAD REQUEST');
    //         },
    //     };

    //     await getTweet(req, res);
    // });

    // it('test get tweet with empty ID', async () => {
    //     const req = {
    //         params: {},
    //     };
    //     const res = {

    //         json(body) {
    //             assert.is(body.message, 'tweetId is empty');
    //         },
    //     };

    //     await getTweet(req, res);
    // });

    // it('test post tweet with valid tweet', async () => {
    //     const req = {
    //         body: {
    //             tweet: 'valid',
    //         },
    //     };
    //     const res = {
    //         json(body) {
    //             assert.is(body.status, 'OK');
    //         },

    //     };
    //     await postTweet(req, res);
    // });

    // it('test post tweet with duplicate tweet', async () => {
    //     const req = {
    //         body: {
    //             tweet: 'duplicate',
    //         },
    //     };
    //     const res = {
    //         json(body) {
    //             assert.is(body.status, 'BAD REQUEST');
    //         },

    //     };
    //     await postTweet(req, res);
    // });

    // it('test post tweet with no tweet', async () => {
    //     const req = {
    //         body: {},
    //     };
    //     const res = {
    //         json(body) {
    //             assert.is(body.message, 'Response is empty');
    //         },

    //     };
    //     await postTweet(req, res);
    // });

    // it('test delete tweet with valid ID', async () => {
    //     const req = {
    //         params: { id: '123' },
    //     };
    //     const res = {
    //         json(body) {
    //             assert.is(body.status, 'OK');
    //         },
    //     };

    //     await deleteTweet(req, res);
    // });

    // it('test delete tweet with invalid ID', async () => {
    //     const req = {
    //         params: { id: '124' },
    //     };
    //     const res = {

    //         json(body) {
    //             assert.is(body.status, 'BAD REQUEST');
    //         },
    //     };

    //     await deleteTweet(req, res);
    // });

    // it('test delete tweet with empty ID', async () => {
    //     const req = {
    //         params: {},
    //     };
    //     const res = {

    //         json(body) {
    //             assert.is(body.message, 'tweetId is empty');
    //         },
    //     };

    //     await deleteTweet(req, res);
    // });

    // it('test get all tweets', async () => {
    //     const req = {
    //     };
    //     const res = {

    //         json(body) {
    //             assert.is(body.status, 'OK');
    //         },
    //     };

    //     await getAllTweets(req, res);
    // });
});

// Tamanna Mehta