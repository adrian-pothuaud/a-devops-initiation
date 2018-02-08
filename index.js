/****** 
 * Main server file
 * ******/

 /**
 * NPM Dependencies
 */
const express = require('express');
const path = require('path');
var mongoose = require('mongoose');
const requestIp = require('request-ip');
require('dotenv').load();
if (process.env.NODE_ENV == "DEV") { console.log("NPM Dependencies loaded...") }
// ---

/**
 * GLOBALS
 */
const PORT = process.env.PORT 
    || 5000;
const dbConnString = process.env.DBCOSTR;
if (process.env.NODE_ENV == "DEV") { 
    console.log("Globales defined PORT:" + PORT + " dbConnString:" + dbConnString) 
}
// ---

/**
 * Application modules
 */
// router(s)
var router = require('./app/routes');
// ---

/**
 * Application Configuration
 */
var app = express()

app
    .use(express.static(path.join(__dirname, 'public')))
    .use(requestIp.mw())
    .set('views', path.join(__dirname, 'views'))
    .set('view engine', 'ejs')
    .use('/', router);

if (process.env.NODE_ENV == "DEV") { console.log("App configured...") }
// ---

/**
 * DATABASE Connection
 */
mongoose.connect(dbConnString);
mongoose.connection
    .once('open', function() {
        if (process.env.NODE_ENV == "DEV") { console.log("Connected to DB...") }
        app.listen(PORT, () => {
            if (process.env.NODE_ENV == "DEV") { console.log(`App is listening on ${ PORT }`) }
        });
    })
    .on('error', function(error) {
        console.warn('Error on DB connection', error);
    });
// ---

// export app for tests
module.exports = app;