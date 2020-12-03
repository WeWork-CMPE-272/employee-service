'use strict';

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const router = require('./routes/external/employee');

const cors = require('cors')

app.use(cors());

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

const port = 4000

// Health endpoint for AWS ELB
app.get('/health', function (req, res) {
    console.log('Health Endpoint Hit');
    res.status(200).end();
});


app.use('/employee', router);

app.listen(port, () => {
    console.log(`Employee service listening at http://localhost:${port}`)
})