/**
 * Created by lukas on 27.04.2016.
 */
var passport = require('passport');
var mongoose = require('mongoose');
var person = mongoose.model('person');
var helper = require('./helperfunction');

module.exports.register = function(req, res){
    if(!req.body.name || !req.body.email || !req.body.password) {
        helper.sendJsonResponse(res, 400, {"message": "All fields required"});
        return;
    }

    var person = new Person();

    person.name = req.body.name;
    person.email = req.body.email;

    person.setPassword(req.body.password);

    person.save(function(err){
        var token;
        if(err){
            helper.sendJsonResponse(res, 404, err);
        } else {
            token=person.generateJwt();
            helper.sendJsonResponse(res, 200, {"token": token});
        }
    });
};

module.exports.login = function(req, res){
    if(!req.body.email || !req.body.password){
        helper.sendJsonResponse(res, 400, {"message": "All fields required"});
        return;
    }

    passport.authenticate('local', function (err, user, info) {
        var token;

        if (err){
            helper.sendJsonResponse(res, 404, err);
            return;
        }

        if (user){
            token=user.generateJwt();
            helper.sendJsonResponse(res, 200, {"token": token});
        } else {
            helper.sendJsonResponse(res, 401, info);
        }
        
        })(req,res);
};