/**
 * Created by lukas on 23.04.2016.
 */
var helper = require ('./helperfunction');
var mongoose = require('mongoose');
var enr = mongoose.model('enrollment');

module.exports.displayAllEnrollments = function (req, res) {
    enr
        .find()
        .select('name -_id')
        .exec(
            function (err, registration){
                helper.sendJsonResponse(res, 200, enr);
            }

        )
};

module.exports.displayEnrollment = function (req, res) {
   sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.createEnrollment = function (req, res) {
    enr.create(
        {name: req.body.name}
        ,
        function (err, enrollment){
            if (err){
                helper.sendJsonResponse(res, 400, err);
            }else{
                helper.sendJsonResponse(res, 201, enr);
            }
        }
    );
};

module.exports.updateEnrollment = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});
};

module.exports.deleteEnrollment = function (req, res) {
    sendJsonResponse(res, 200, {"status": "success"});

};

