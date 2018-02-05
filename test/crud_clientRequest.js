var mongoose = require('mongoose');
var clientRequestSchema = require('../schemas/clientRequest');
var clientRequest = mongoose.model('Blog', clientRequestSchema);

describe("Client Request Objects", function() {
    
    before(function(done) {
        mongoose.connect(
            "mongodb://test:test@ds123658.mlab.com:23658/projet-test"
        );
        mongoose.connection.once('open', function() {
            done();
        })
        .on('error', function(error) {
            console.warn('Error', error);
        });
    });
    
    it("can create a new object", function(done) {
        
        var clientRequestX = new clientRequest({
            isTest: true
        });
        
        clientRequestX.save(function(err, result){
            if(err) throw err;
            done();
        });
    });
})