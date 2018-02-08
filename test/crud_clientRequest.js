var mongoose = require('mongoose');
var clientRequest = require('../app/models').clientRequest;

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