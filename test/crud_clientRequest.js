var mongoose = require('mongoose');
var clientRequestSchema = require('../schemas/clientRequest');
var clientRequest = mongoose.model('clientRequest', clientRequestSchema);

describe("Client Request Objects", () => {
    
    before((done) => {
        mongoose.connect(
            "mongodb://test:test@ds123658.mlab.com:23658/projet-test"
        );
        mongoose.connection.once('open', () => {
            done();
        })
        .on('error', (error) => {
            console.warn('Error', error);
        });
    });
    
    it("can create a new object", (done) => {
        
        var clientRequestX = new clientRequest({
            isTest: true
        });
        
        clientRequestX.save((err, result) => {
            if(err) throw err;
            done();
        });
    });
    
    it("can list existing objects", (done) => {
        
        done();
    });
    
    it("can update an object", (done) => {
        
        done();
    });
    
    it("can delete objects", (done) => {
        
        done();
    });
})