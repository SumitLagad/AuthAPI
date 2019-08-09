const express = require('express');
var bodyParser = require("body-parser");
var cors = require('cors');


var app = express();
const port = process.env.PORT || 3002;

app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));

var Auth = require('./routes/auth');
app.use('/auth',Auth)


app.listen(port, function() {
    console.log("Server is running on port: " + port);
});
