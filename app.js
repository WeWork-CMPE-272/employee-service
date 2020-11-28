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


app.use('/employee', router);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})