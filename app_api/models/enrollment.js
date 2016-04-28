/**
 * Created by lukas on 20.04.2016.
 */
var mongoose = require ('mongoose')
, Schema=mongoose.Schema;
var person = require('./person');


//Um Gruppen wie Teams, Stufen mit Stufenleitung, AKs und ähnliche abzubilden
var groupSchema = new mongoose.Schema({
    first_leader: {type: Schema.Types.ObjectId, ref: 'person'},
    leaders: [{type: Schema.Types.ObjectId, ref: 'person'}],
    members: [{type: Schema.Types.ObjectId, ref: 'person'}]

});

//Eine Registration ist eine Anmeldung ob das ein Stamm mit 4 Stufen + freien Leitern oder eine einzelne Person ist
var enrollmentSchema = new mongoose.Schema ({
    name: String,
    first_leader: {type: Schema.Types.ObjectId, ref: 'person'},
    groups:[{type: Schema.Types.ObjectId, ref:'group'}],
    members: [{type: Schema.Types.ObjectId, ref: 'person'}]
});

mongoose.model('group', groupSchema);
mongoose.model('enrollment', enrollmentSchema);

