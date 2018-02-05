var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var codePushSchema = new Schema({
    dev: String,
    date: { type: Date, default: Date.now },
    isTest: { type: Boolean, default: false }
});

module.exports = codePushSchema;