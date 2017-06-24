'use strict';

var Products= require('../model/products').Products;

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
    Products.findOne({_id:req.params.id},function(err,result){
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
      
    Products.update1({_id:req.params.id},req.body,function(err,result){
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
    Products.remove1({category:req.params.id},function (err,result) {
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