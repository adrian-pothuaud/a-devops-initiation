/****** 
 * Load client requests schema into model
 * ******/

/**
 * NPM Dependencies
 */
var mongoose = require('mongoose');

// load schema
var clientRequestSchema = require('../schemas/clientRequest.js');

// build model
var clientRequest = mongoose.model('clientrequest', clientRequestSchema);

// export model
module.exports = clientRequest;