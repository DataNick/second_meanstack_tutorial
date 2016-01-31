var mongoose = require('mongoose'); //gives us an interface into mongodb AND provide models to mongodb and maps directly to database

//Create the MovieSchema
//Define all the properties for model object
var MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
});

//Export the model schema
//Defining schema for the database
//similar to requiring mongoose up at the top, when creating a component in NodeJS, it must be assigned to module exports b/c whoever requires it, the module/component is what we are passing back to them
//Have MovieSchema and exported it to the model
//REMEMBER - SKINNY MODELS, FAT CONTROLLERS
module.exports = MovieSchema;