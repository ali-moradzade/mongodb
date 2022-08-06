const express = require('express');
const routes = require('./routes/routes');
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/muber');

const app = express();

app.use(bodyParser.json());
routes(app);

module.exports = app;
