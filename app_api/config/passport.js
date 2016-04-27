/**
 * Created by lukas on 27.04.2016.
 */
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var person = mongoose.model('person');

passport.use(new localStrategy({
    usernameField: 'email'
    },
    function(username, password, done) {
        Person.findOne({ email: username }, function (err, person) {
            if (err) {return done(err);}
            if(!person){
                return done(null, false, {message: 'Incorrect Username.'});
            }
            if (!person.validPassword(password)){
                return done(null, false, {message: 'Incorrect password.'});
            }
            return done (null, user);
        });
    }
));;
