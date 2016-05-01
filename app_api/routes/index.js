var express = require('express');
var router = express.Router();
var jwt= require('express-jwt');
var auth= jwt({
    secret: process.env.JWT_Secret,
    userProperty:'payload'
});



var ctrlEnrollment = require('../controllers/enrollment');
var ctrlAuth = require('../controllers/authentication');


//Registration
router.get('/enrollment', auth, ctrlEnrollment.displayAllEnrollments);

router.get('/enrollment/:enrollmentid', auth ,ctrlEnrollment.displayEnrollment);

router.post('/enrollment', auth, ctrlEnrollment.createEnrollment);

router.put('/enrollment/:enrollemntid', auth, ctrlEnrollment.updateEnrollment);

router.delete('/enrollment/:enrollmentid', auth, ctrlEnrollment.deleteEnrollment);

//Login
router.post('/register', ctrlAuth.register);

router.post('/login', ctrlAuth.login);

module.exports = router;
