var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var deploySchema = new Schema({
    status: Number,
    date: { type: Date, default: Date.now },
    isTest: { type: Boolean, default: false }
});

module.exports = deploySchema;