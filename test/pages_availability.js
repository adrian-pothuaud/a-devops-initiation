//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe('Pages', () => {

/*
  * Test the /GET route
  */
  describe('/GET index', () => {
      it('it should GET status code 200', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                if (err) throw err;
                res.should.have.status(200);
              done();
            });
      });
  });
  
  describe('/GET requests', () => {
      it('it should GET status code 200', (done) => {
        chai.request(server)
            .get('/requests')
            .end((err, res) => {
                if (err) throw err;
                res.should.have.status(200);
              done();
            });
      });
  });
  
  describe('/GET pushs', () => {
      it('it should GET status code 200', (done) => {
        chai.request(server)
            .get('/pushs')
            .end((err, res) => {
                if (err) throw err;
                res.should.have.status(200);
              done();
            });
      });
  });
  
  describe('/GET deployments', () => {
      it('it should GET status code 200', (done) => {
        chai.request(server)
            .get('/deployments')
            .end((err, res) => {
                if (err) throw err;
                res.should.have.status(200);
              done();
            });
      });
  });

});