var express = require('express');
var router = express.Router();
var ctrlRegistration = require('../controllers/registrations');
var ctrlOthers = require('../controllers/others');


//Registration
router.get('/registration', ctrlRegistration.displayAllRegistrations);
router.get('/registration/:registrationid', ctrlRegistration.displayRegistration);

router.post('/registration', ctrlRegistration.createRegistration);

router.put('/registration/:registrationid', ctrlRegistration.updateRegistration);

router.delete('/registration/:registrationid', ctrlRegistration.deleteRegistration);

/* Other pages */
router.get('/about', ctrlOthers.about);

module.exports = router;
