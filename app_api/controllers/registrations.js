/**
 * Created by lukas on 23.04.2016.
 */
var helper =require ('./helperfunction');
var mongoose = require('mongoose');
var Loc = mongoose.model('registration');

module.exports.displayAllRegistrations = function (req, res) {
   helper.sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.displayRegistration = function (req, res) {
   sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.createRegistration = function (req, res) {
  sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.updateRegistration = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.deleteRegistration = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

