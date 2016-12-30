var request = require('supertest');
var app = require('../app.js');
 
describe('GET /', function() {
  it('respond with hello jf jenkins', function(done) {
    request(app).get('/').expect('hello jf jenkins', done);
  });
});
