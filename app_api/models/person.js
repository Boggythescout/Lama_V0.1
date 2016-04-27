/**
 * Created by lukas on 20.04.2016.
 */
var mongoose= require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var ticket = require ('./ticket');

var personSchema = new mongoose.Schema ({
    email: {
        type: String,
        unique: true
    },
    hash: String,
    salt: String,
    permissions: [String],
    name: {type: String, required: true},
    prename: {type: String, required: true},
    ticket: {ticket:ticket},
    city: String,
    plz: String,
    street: String
    //weitere Felder folgen
});


personSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};

personSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash===hash;
};

personSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate()+7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        name: this.name,
        exp: parseInt(expiry.getTime() / 1000)
    }, process.env.JWT_SECRET);
};

mongoose.model('person', personSchema);