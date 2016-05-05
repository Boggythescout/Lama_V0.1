/**
 * Created by lukas on 04.05.2016.
 */



var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);


describe('Api-Interface Person', function(){
   describe('Api-Interface Person GET /api/person', function () {

       it('returns status 200', function (done) {
           chai.request(server)
               .get('/api/person')
               .end(function(err, res){
                   res.should.have.status(200);
                   done();
               });
       });

       it('returns an array of persons');

       it('returns correctly formated entrys');


   });
});