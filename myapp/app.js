require("./backend/config/DBConnection");
var express = require('express')
MongoClient = require("mongodb").MongoClient,
    logger = require("morgan"),
    cors = require("cors"),
    helmet = require("helmet"),
    compression = require("compression"),
    bodyParser = require("body-parser"),

    multer = require("multer"),
    router = express.Router();
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./backend/routes/index');


var app = express();

// Middleware to log all of the requests that comes to the server
app.use(logger(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// Middleware to allow requests from any frontend that is not hosted on the same machine as the server's
app.use(
    cors({
        origin: true,
        credentials: true,
        methods: ["GET", "POST", "PATCH", "DELETE"]
    })
);

// Middleware to protect the server against common known security vulnerabilities
app.use(helmet());

// Middleware to compress the server json responses to be smaller in size
app.use(compression());

app.use(express.static(path.join(__dirname, "dist")));
/*
  Middleware to parse the request body that is in format "application/json" or
  "application/x-www-form-urlencoded" as json and make it available as a key on the req
  object as req.body
*/
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);

/*
  Middleware to match the request with one of our defined routes to do a certain function,
  All requests should have /api before writing the route as a convention for api servers
*/
app.use("/", routes);

// Middleware to handle any (500 Internal server error) that may occur while doing database related functions
app.use(function(err, req, res, next) {
    if (err.statusCode === 404) return next();
    res.status(500).json({
        // Never leak the stack trace of the err if running in production mode
        err: process.env.NODE_ENV === "production" ? null : err,
        msg: "500 Internal Server Error",
        data: null
    });
});


/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
