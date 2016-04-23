/**
 * Created by lukas on 23.04.2016.
 */
var helper = require ('./helperfunction');
var mongoose = require('mongoose');
var Reg = mongoose.model('registration');

module.exports.displayAllRegistrations = function (req, res) {
    Reg
        .find({name:'*'})
        .exec(
            function (err, registration) {
            var response;
            response = {
                name: registration.name
            };

                helper.sendJsonResponse(res, 200, response);
            }

        )
};

module.exports.displayRegistration = function (req, res) {
   sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.createRegistration = function (req, res) {
    Reg.create(
        {name: req.body.name}
        ,
        function (err, registration){
            if (err){
                helper.sendJsonResponse(res, 400, err);
            }else{
                helper.sendJsonResponse(res, 201, registration);
            }
        }
    );
};

module.exports.updateRegistration = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.deleteRegistration = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});

};

