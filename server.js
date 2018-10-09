var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path=require("path");
// var cors = require('cors');
var Routes=require("./Router/routerpath");
var mongoose = require('mongoose');

const mongodburl="mongodb://localhost:27017/storeangtonode";

mongoose.connect(mongodburl, { useNewUrlParser: true });

mongoose.connection.on("connected",()=>{
    console.log("mongodb connected "+mongodburl);
});

mongoose.connection.on("error",(error)=>{
    console.log(" Sorry "+ console.error);
});

var Port=8000;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());
 

// app.use(cors());

app.use('/api',Routes);

app.use(express.static(path.join(__dirname, 'public')));
 
app.listen(Port,()=>{
    console.log("http://localhost:"+Port);
});