/****** 
 * Define code pushs schema
 * ******/

/**
 * NPM Dependencies
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Schema Definition
 */
var codePushSchema = new Schema({
    dev: String,
    date: { type: Date, default: Date.now },
    isTest: { type: Boolean, default: false }
});

// exports schema
module.exports = codePushSchema;