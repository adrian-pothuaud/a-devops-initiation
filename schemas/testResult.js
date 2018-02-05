var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testResultSchema = new Schema({
    passed: Number,
    failed: Number,
    date: { type: Date, default: Date.now },
    isTest: { type: Boolean, default: false }
});

module.exports = testResultSchema;