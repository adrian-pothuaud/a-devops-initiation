var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var clientRequestSchema = new Schema({
    page:  String,
    client: String,
    status: Number,
    date: { type: Date, default: Date.now },
    isTest: { type: Boolean, default: false }
});

module.exports = clientRequestSchema;