var mongoose = require('mongoose');
var readline = require("readline");

/*if (process.env.NODE_ENV === 'production') {
	dbURI= process.env.MONGOLAB_URI;
}

var config={};
config.mongoURI={
	development: dbURI,
	test: ,
	production:
};
 */

var dbURI="";
if (process.env.NODE_ENV === 'production') {
	dbURI= process.env.MONGOLAB_URI;
}else if (process.env.NODE_ENV === 'development'){
	dbURI='mongodb://localhost/lama';
}else{
	dbURI='mongodb://localhost/test';
}

mongoose.connect(dbURI);



mongoose.connection.on('connected', function(){
	console.log('Mongoose connected to '+ dbURI);
});

mongoose.connection.on('error', function(err){
	console.log('Mongoose connection error '+ dbURI + err);
});

mongoose.connection.on('disconnected', function(){
	console.log('Mongoose disconnected');
});


if (process.platform === "win32"){
	var rl=readline.createInterface({
		input: process.stdin,
		output: process.stdout
	});
	rl.on ("SIGINT", function(){
		process.emit ("SIGINT");
	});
}


var gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function () {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

process.once('SIGUSR2', function(){
	gracefulShutdown('nodemon restart', function(){
		process.kill(process.pid, 'SIGUSR2');
	});
});

process.on('SIGINT', function(){
	gracefulShutdown('app termination', function(){
		process.exit(0);
	});
});

process.on('SIGTERM', function(){
	gracefulShutdown('Heroku app shutdown', function(){
		process.exit(0);
	});
});

require('./enrollment');
require('./person');
require('./ticket');
require('./schemas');
	