'use strict';

var redis=require('redis');
var responseTime=require('response-time');
var Products= require('../model/products').Products;

var client=redis.createClient();
client.on('error',function (err) {
   console.log('Error '+err);
});
exports.create= function (req,res) {
    Products.create(req.body,function (err,result) {
        if(!err)
        {
            return res.json(result);
        }
        else
        {
            return res.send(err); //500 error
        }
    });
};

exports.get=function (req,res) {
    var id=req.params.id;
    client.get(id,function(error,result))
    {   if(result)
            {   return res.send(result);

            }
        else {

        Products.findOne({_id: req.params.id}, function (err, result) {
            if (!err) {
                client.setex(id,60,json(result));
                return res.json(result);
            }
            else {
                return res.send(err); //500 error
            }
        });
    }
    }
};

exports.getAll=function (req,res) {
    Products.find({},function(err,result){
        if(!err)
        {
            return res.json(result);
        }
        else
        {
            return res.send(err); //500 error
        }
    });
};

exports.update=function (req,res) {
      
    Products.updateone({_id:req.params.id},req.body,function(err,result){
        if(!err)
        {
            return res.json(result);
        }
        else
        {
            return res.send(err); //500 error
        }
    });
};

exports.remove= function (req,res) {
    Products.removeone({category:req.params.id},function (err,result) {
        if(!err)
        {
            return res.json(result);
        }
        else
        {
            return res.send(err); //500 error
        }
    });
};