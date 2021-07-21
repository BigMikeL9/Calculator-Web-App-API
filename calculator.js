//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// "npm install boby-parser"
// allows us to pass the information that we get sent from the post request in the HTML
// "urlencoded" one we use when we are trying to pass data that come from an HTML form
//"{extended: true}" allows us to post nested objects.
// The code that we need to write everytime we use bodyparser
// By using "bodyparser", we are able to pass the http request that we get
// and by using "urlencoded", we can get access to the form data
app.use(bodyParser.urlencoded({extended: true}));



// *********
// Route to Homepage
// What should happen when the user tries to go to my homepage (the "root" route)
app.get("/", function(req, res){
  // "__dirname" (instead of the usual file location name "index.html")
  // will give you the filepath of the current file, NO MATTER WHERE
  // ITS HOSTED, on someone else's computer or in the cloud or in a remote server,
  // wherever it may be.
  // "__dirname" is simply a constant that allows us to grab hold of the current's file location. Which can be used anywhere.
  // "senFile()" is for sending files
  // "/index.html" is to append the file we are trying to send (specifying which file)
  res.sendFile(__dirname + "/index.html");
  // console.log(__dirname);
});

// Handles any post requests that come to our homepage route
app.post("/", function(req, res) {

// This is using npm parser
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("Result of calculated number is: " + result);

});



// *********
// Route to BMI Calculator
app.get("/bmiCalculator", function(req, res) {

  res.sendFile(__dirname + "/bmiCalculator.html");
  console.log(__dirname);
});


// Handles any post requests that come to the bmicalculator route
app.post("/bmiCalculator", function(req, res) {

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var result = weight / (height * height);

  res.send("Your BMI is: " + result);
});



// *********
// Setup Port
app.listen(3000, function(){
  console.log("Server is running on port 3000");
});
