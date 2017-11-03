'use strict'

var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = (process.env.PORT || 8080);
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
global.isWorker = false;

app.use(session({secret: "this is an appholo secret 23198", auth: false, resave: false, saveUninitialized: false}))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json({}))
require('./shared.js')(express);
require('./routes.js')(app);
require('./base-route.js')(app, express)
require('./error-route.js')(app)
process.on('uncaughtException', __catch);


http.listen(port, function() {
  console.log('listening on *:' + port);
  return true
});


module.exports = app;
