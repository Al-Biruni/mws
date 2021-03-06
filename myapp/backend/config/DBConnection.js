
var mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/mobily',{ useNewUrlParser: true },function(err,db){

	if(err)
		throw err;

	console.log("Conected to db");

});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
var gracefulShutdown = function(callback) {
	mongoose.connection.close(function(err) {
		callback(err);
	});
};

// For nodemon restarts
process.once("SIGUSR2", function() {
	gracefulShutdown(function(err) {
		if (err) {
			return console.error(err);
		}
		console.log("nodemon restart");
		process.kill(process.pid, "SIGUSR2");
	});
});

// For app termination
process.on("SIGINT", function() {
	gracefulShutdown(function(err) {
		if (err) {
			return console.error(err);
		}
		console.log("App termination (SIGINT)");
		process.exit(0);
	});
});
require("../models/smartPhone.model");
require("../models/userRating.model");
require("../models/comparisons.model");
