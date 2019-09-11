var mongoose = require('mongoose');

mongoose.connect('YOUR-CONNECTION-STRING',function(err) {
    if(err) {
        console.log(err);    
    } else {
        console.log('connected to DB');
    }

})