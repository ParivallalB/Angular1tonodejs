var mongoose = require('mongoose');
var Schema=mongoose.Schema;

var schemaform= new Schema({
    Firstname:{
        type:String
    },
    Lastname:{
        type:String
    },
    Username:{
        type:String
    },
    Age:{
        type:String
    },
    phoneNumber:{
        type:String
    },
    Department:{
        type:String
    }
});
var Things =module.exports=mongoose.model('Things', schemaform);