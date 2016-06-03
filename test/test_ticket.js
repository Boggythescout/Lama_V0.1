/**
 * Created by lukas on 01.06.2016.
 */
process.env.NODE_ENV='test';

var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../app');
var should = chai.should();

chai.use(chaiHttp);


describe('Api-Interface Ticket', function(){
    describe('Api-Interface Ticket GET /api/ticket Lists all Tickets', function () {

        it('returns unauthorized -401 ');

        it('returns ok - 200 ');

        it('returns an array of tickets');

        it('returns correctly formated entrys');

    });
    
    describe('Api-Interface Ticket POST /api/ticket Create new kind of ticket', function () {
       
        
        describe('Unauthorized access', function () {
            it('returns unauthorized -401');
        });
        
        describe('Authorized access with unallowed parameters', function () {
            it('returns error data missing');
        })
        
        describe('Authorized access', function(){
            it('returns ok - 200');

            it('returns an array of existing tickets');
            
            it('returns the created ticket correctly');
        });
        
        
        
        
        
        
    });
});