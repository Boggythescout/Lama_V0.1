/**
 * Created by lukas on 20.04.2016.
 */

var mongoose = require('mongoose');

var ticketSchema = new mongoose.Schema({
   ticket_name: String,
   ticket_price: Number
});

mongoose.model('ticket', ticketSchema);