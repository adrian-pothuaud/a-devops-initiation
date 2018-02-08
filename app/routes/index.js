/**
 * NPM Dependencies
 */
var express = require('express');

// GLOBALS
var router = express.Router();

// Data Models
var models = require('../models'),
    clientRequest = models.clientRequest,
    codePush = models.codePush,
    deploy = models.deploy;
if (process.env.NODE_ENV == "DEV") { console.log("Data models loaded...") }

// Routes
router
.get('/', require('./home').get)
.get('/tests', require('./tests').get)
.get('/requests', require('./requests').get)
.get('/pushs', require('./pushs').get)
.post('/pushs', require('./pushs').post)
.get('/deployments', require('./deployments').get)
.post('/deployments', require('./deployments').post);

module.exports = router;