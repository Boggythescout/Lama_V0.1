/**
 * Created by lukas on 04.05.2016.
 */
var mongoose = require('mongoose');

var Person = mongoose.model('Person');

var helper = require('./helperfunction');

module.exports.getAllPersons = function(req, res){
    Person.find({}, function(err, person){
        if (err){
            helper.sendJsonResponse(res, 400, err);
        }else if (!person){
            helper.sendJsonResponse(res,404, {"message": "No person found"});
        }else if (person){
            var response={  "amount of datasets": person.length,
                "persons":person
            };
            helper.sendJsonResponse(res,200, response);
        }
    })
};

module.exports.createPerson = function(req, res){};

module.exports.getPersonByID=function(req,res){};

module.exports.putPersonByID=function(req,res){};

module.exports.deletePersonByID=function(req,res){};
