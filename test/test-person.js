/**
 * Created by lukas on 04.05.2016.
 */

process.env.NODE_ENV='test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);


describe('Api-Interface Person', function(){

    describe('Api-Interface Person GET /api/person Lists all persons', function () {

        describe('Unauthorized access', function(){
            it('returns unauthorized -401 ', function (done) {
                chai.request(server)
                    .get('/api/person')
                    .end(function(err, res){
                        res.should.have.status(401);
                        done();
                    });
            });
        });

        describe('Authorized access', function () {
            it('returns ok - 200 ');

            it('returns an array of persons');

            it('returns correctly formated entrys');
        });
    });
    

    describe('Api-Interface Person Post /api/person creates new Person', function () {

       describe('Unauthorized access', function(){
            it('returns unauthorized -401 ');
       });

       describe('Authorized access with false parameters', function () {
           it('returns error - , wrong data');
       });

       describe('Authorized access', function () {
           it('returns ok - 200 ');

           it('returns the created person');

           it('returns Conflict - 409 if element is already used (f.e. e-mail already used');
       });
    });


    describe('Api_interface Person GEt /api/person/:personid', function () {

        describe('Unauthorized access', function(){
            it('returns unauthorized -401 ');
        });

        describe('Authorized access with false parameters', function () {
            it('returns error - , wrong data');
        });

        describe('Authorized access', function () {
            it('returns ok - 200');

            it('returns the created person');

            it('retunrs conflict - 409 if P')
        });
    });

    describe('Api-Interface Person update /api/person/:personid', function(){

        describe('Unauthorized access', function(){
            it('returns unauthorized -401 ');
        });

        describe('Authorized access with false parameters', function () {
            it('returns error - , wrong data');
        });

        describe('Authorized access', function () {
            it('returns ok - 200');

            it('returns the updated person');

            it('returns not found if id is not used');
        });
    });

    describe('Api-Interface Person delete /api/person/:personid', function() {

        describe('Unauthorized access', function(){
            it('returns unauthorized -401 ');
        });

        describe('Authorized access with false parameters', function () {
            it('returns error - , wrong data');
        });

        describe('Authorized access', function () {

            it('returns ok - 200');

            it('does not find deleted person');
        });
    });
});