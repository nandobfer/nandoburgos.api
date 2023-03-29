var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

// CORS
const cors = require('cors');
app.use(cors());

// ROUTES
const cheatsheet = require('./routes/cheatsheet');
app.use('/api/v1/cheatsheet', cheatsheet);

const homecoffee = require('./routes/homecoffee');
app.use('/api/v1/homecoffee', homecoffee);

const movielist = require('./routes/movielist');
app.use('/api/v1/movielist', movielist);

module.exports = app;
