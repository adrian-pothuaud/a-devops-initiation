var mongoose = require('mongoose');
var deploy = require('../app/models').deploy;

describe("Deployment Objects", () => {
    
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
        
        var deployX = new deploy({
            isTest: true
        });
        
        deployX.save((err, result) => {
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