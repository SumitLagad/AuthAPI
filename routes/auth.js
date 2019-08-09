var express = require('express');
var auth = express.Router();
var jwt = require('jsonwebtoken');

process.env.SECRET_KEY = "fake-auth";

auth.post('/login', function(req,res) {

    var appData = {};
    
    var username = req.body.username;
    var password = req.body.password;

    var payload = {username : username};

    if(username === 'admin' && password === 'admin123') {
        let token = jwt.sign(payload,process.env.SECRET_KEY, {expiresIn: 1000});
        appData['error'] = 0;
        appData['responce'] = token;
        
    } else {
        appData['error'] = 1;
        appData['responce'] = 'Username and password does not match';
        
    }
    res.json(appData);
});

module.exports = auth;