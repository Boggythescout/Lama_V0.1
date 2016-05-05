var express = require('express');
var router = express.Router();
var jwt= require('express-jwt');
var auth= jwt({
    secret: process.env.JWT_SECRET,
    personProperty:'payload'
});



var ctrlEnrollment = require('../controllers/enrollment');
var ctrlAuth = require('../controllers/authentication');
var ctrlPerson=require('../controllers/person');

//Registration
router.get('/enrollment', auth, ctrlEnrollment.displayAllEnrollments);

router.get('/enrollment/:enrollmentid', auth ,ctrlEnrollment.displayEnrollment);

router.post('/enrollment', auth, ctrlEnrollment.createEnrollment);

router.put('/enrollment/:enrollemntid', auth, ctrlEnrollment.updateEnrollment);

router.delete('/enrollment/:enrollmentid', auth, ctrlEnrollment.deleteEnrollment);

//Login
router.post('/register', ctrlAuth.register);

router.post('/login', ctrlAuth.login);

//Person
router.get('/person', ctrlPerson.getAllPersons);

router.post('/person', ctrlPerson.createPerson);


router.get('/person/:personid', ctrlPerson.getPersonByID);

router.put('/person/:personid', ctrlPerson.putPersonByID);

router.delete('/person/:personid', ctrlPerson.deletePersonByID);

module.exports = router;
