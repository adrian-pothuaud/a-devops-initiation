/****** 
 * Load code push schema into model
 * ******/

/**
 * NPM Dependencies
 */
var mongoose = require('mongoose');

// load schema
var codePushSchema = require('../schemas/codePush.js');

// build model
var codePush = mongoose.model('codepush', codePushSchema);

// export model
module.exports = codePush;