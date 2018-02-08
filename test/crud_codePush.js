var mongoose = require('mongoose');
var codePushSchema = require('../schemas/codePush');
var codePush = mongoose.model('codePush', codePushSchema);

describe("Code Push Objects", () => {
    
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
        
        var codePushX = new codePush({
            isTest: true
        });
        
        codePushX.save((err, result) => {
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