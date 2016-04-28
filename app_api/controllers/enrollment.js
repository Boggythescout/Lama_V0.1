/**
 * Created by lukas on 23.04.2016.
 */
var helper = require ('./helperfunction');
var mongoose = require('mongoose');
var enr = mongoose.model('enrollment');

module.exports.displayAllRegistrations = function (req, res) {
    enr
        .find()
        .select('name -_id')
        .exec(
            function (err, registration){
                helper.sendJsonResponse(res, 200, registration);
            }

        )
};

module.exports.displayRegistration = function (req, res) {
   sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.createRegistration = function (req, res) {
    enr.create(
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

