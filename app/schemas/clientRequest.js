/****** 
 * Define client requests schema
 * ******/

/**
 * NPM Dependencies
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

/**
 * Schema Definition
 */
var clientRequestSchema = new Schema({
    page:  String,
    client: String,
    status: Number,
    date: { type: Date, default: Date.now },
    isTest: { type: Boolean, default: false },
    nodeenv: { type: String, default: process.env.NODE_ENV }
});

// export schema
module.exports = clientRequestSchema;