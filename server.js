// REST client example

// import path package which is included with Node. Allows us to manipulate the path cross-platform.
const path = require("path");
// import Express
const express = require("express");
// import body-parser to allow Express to handle data sent via POST as JSON
const bodyParser = require("body-parser");

// initialize the Express server and sets it to a variable called "app"
const app = express();

// initialize the body-parser plugin imported above
app.use(bodyParser.json());

// use sendFile to send files as a response to a request. This example will send you to index.html.
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// returns the sum of a and b as JSON and converts them both to integers.
app.post("/add", (req, res) => {
    const { a, b } = req.body;
    res.send({
        result: parseInt(a) + parseInt(b)
    });
});

app.listen(5000, () => {
    console.log('Server is running on port 5000.');
});
