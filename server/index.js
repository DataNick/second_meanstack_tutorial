//Bootstrap file
//start up server and run application
//declare objects we need
//pulling in modules
//body-parser rest api stuff
//lodash(_) assigned to underscore name
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//creating express application - nodejs web app framework
var app = express();

//Bind application-level middleware to an instance of express using .use

//Adding Middleware necessary for RESTful API's
//Middleware injects itself into every request, provides uniqueness to a plugin
//Intercept request to inject json in its encoding
//to allow the HTTP method override
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); //for json API
app.use(methodOverride('X-HTTP-Method-Override')); //Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
// override with the X-HTTP-Method-Override header in the request

//CORS support - allows us to expose APIs to all urls that are accessing our servers
//we now have a PUBLIC API - opened up API access to any servers that want to access them
//Any server can now access your HTTP REST API
//Critical to provide authentication methods in place to protect data in REST APIs
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// app.use('/hello', function (req, res, next) {
//   res.send('Hello Seattle, I\'m listening');
//   next();
// });

//connect to MongoDB database
mongoose.connect('mongodb://localhost/meanapp'); //telling app to connect to mongodb; localhost means I'm running it on my computer (my computer is the server), meanapp is name of database
mongoose.connection.once('open', function() {

  //Load the models
  //Assigning to app.models allows for dependency injection into controllers
  //Models don't know anything about controllers
  app.models = require('./models/index');

  console.log("This is Doctor Frasier Crane. I'm listening on port 3000...");
  app.listen(3000);
});

//Use CORS (Cross Origin Resource Sharing)
//Allows restricted resources on a web page to be requested from another domain outside of the domain the resource originated






