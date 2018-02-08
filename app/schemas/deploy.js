/****** 
 * Define deployment object schema
 * ******/

/**
 * NPM Dependencies
 */
 var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Schema Definition
 */
var deploySchema = new Schema({
    status: Number,
    date: { type: Date, default: Date.now },
    isTest: { type: Boolean, default: false }
});

// export schema
module.exports = deploySchema;