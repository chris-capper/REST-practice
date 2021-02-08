// REST Server demonstrating a GET request

// import Express
const express = require("express");
// import body-parser to allow Express to handle data sent via POST as JSON
const bodyParser = require("body-parser");

// initialize the Express server and sets it to a variable called "app"
const app = express();

// initialize the body-parser plugin imported above
app.use(bodyParser.json());

// this function takes two parameters (req and res) and sends "Hi!" as a response.
const sayHi = (req, res) => {
    res.send("Hi!");
};

/* 
   Here's the actual GET request. It takes two parameters, the route ("/") and the 
   function to call when that path is requested by the client (sayHi). Essentially, 
   "/" is the homepage so if somebody access the page it will automatically run the 
   sayHi function.
   
   app.get also gives a request object with all the data sent by the client and a 
   response object with all the methods we can use to respond to the client. These 
   are usually named "res" and "req".
*/
app.get("/", sayHi);

// set the server to listen on port 5000 for requests
app.listen(5000, () => {
    console.log('Server is running on port 5000.');
});
