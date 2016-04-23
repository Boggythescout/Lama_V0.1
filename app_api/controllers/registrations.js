/**
 * Created by lukas on 23.04.2016.
 */
var helper = require('./helperfunction');

module.exports.displayAllRegistrations = function (req, res) {
    helper.sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.displayRegistration = function (req, res) {
    helper.sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.createRegistration = function (req, res) {
    helper.sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.updateRegistration = function (req, res) {
    helper.sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.deleteRegistration = function (req, res) {
    helper.sendJsonResponse(res, 200, {"status": "success"});
};

