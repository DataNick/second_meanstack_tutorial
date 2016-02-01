//Contain all the app logic for application

//node-restful is a library for making RESTful APIs in nodejs with express
//node-restful takes a mongoose model and converts it into a REST API
//Just build the model and leave the rest to node-restful to build up CRUD functionality
//The model defines the REST API
//Register mongoose resources and default RESTful routes are automatically made

var restful = require('node-restful');

module.exports = function (app, route) {
  //set up controller for REST
  var rest = restful.model(
    'movie',
    app.models.movie //pass in model that want to connect to
  ).methods(['get', 'put', 'post', 'delete']); //add these methods to the movie model


  //register REST API endpoint with the application
  rest.register(app, route);

  //return middleware
  return function (req, res, next) {
    next();
  };
};
//Registers the following routes: GET /route, PUT /route, POST /route, DELETE /route, GET /resource/:id
//restful.model returns a mongoose model allowing for interaction similar to new Resource, Resource.findById

