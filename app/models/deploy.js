/****** 
 * Load deploy schema into model
 * ******/

/**
 * NPM Dependencies
 */
var mongoose = require('mongoose');

// load schema
var deploySchema = require('../schemas/deploy.js');

// build model
var deploy = mongoose.model('deploy', deploySchema);

// export model
module.exports = deploy;