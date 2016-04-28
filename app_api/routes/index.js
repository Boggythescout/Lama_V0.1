var express = require('express');
var router = express.Router();
var ctrlRegistration = require('../controllers/enrollment');
var ctrlAuth = require('../controllers/authentication');


//Registration
router.get('/registration', ctrlRegistration.displayAllRegistrations);

router.get('/registration/:registrationid', ctrlRegistration.displayRegistration);

router.post('/registration', ctrlRegistration.createRegistration );

router.put('/registration/:registrationid', ctrlRegistration.updateRegistration);

router.delete('/registration/:registrationid', ctrlRegistration.deleteRegistration);

//Login
router.post('/register', ctrlAuth.register);

router.post('/login', ctrlAuth.login);

module.exports = router;
