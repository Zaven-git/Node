const express = require('express');
const app = express();
require('../db/index')();
const helmet = require('helmet');
const cors = require('cors');

app.use(express.json())
app.use(helmet())
app.use(cors())

module.exports = app;