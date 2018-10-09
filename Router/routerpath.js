var express = require('express');
var Routerpath=express.Router();
var schemafile=require("../Schema/modelschema");

Routerpath.post("/getpage",(req,res,next)=>{
    var listschema=schemafile({
        Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Username:req.body.Username,
        Age:req.body.Age,
        phoneNumber:req.body.phoneNumber,
        Department:req.body.Department
    });
    listschema.save((success,error)=>{
        if(success){
            res.json(success);
        }
        else{
            res.json(error);
        }
    });
    
});

Routerpath.get("/getpage",(req,res,next)=>{
  schemafile.find((success,error)=>{
      if(success){
          res.json(success);
      }
      else{
          res.json(error);
      }
  });
});

Routerpath.delete("/getpage/:id",(req,res,next)=>{
    let id=req.params.id;
    console.log(id);
    schemafile.remove({_id:id},(success,error)=>{
        if(success){
            res.json(success);
        }
        else{
            res.json(error);
        }
    });
});



module.exports=Routerpath;