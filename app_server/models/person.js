/**
 * Created by lukas on 20.04.2016.
 */

var mongoose = require ('mongoose')
var ticket = require ('./ticket');

var personSchema = new mongoose.Schema ({
    name: {type: String, required: true},
    prename: {type: String, required: true},
    ticket: {ticket:ticket},
    city: String,
    plz: String,
    strasse: String
    //weitere Felder folgen
});

mongoose.model('person', personSchema);
