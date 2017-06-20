'use strict';

var mongoose=require('mongoose'),
    Schema=mongoose.Schema;

// the product model which contains the information about the product

var ProductsSchema = new Schema({
    category: {type:String},
    extra_fields: {},
    imageid: {type:String},
    location: {
        lat: {type: Number},
        lon: {type: Number}
    },
    tags: [],
    mrp: {type: Number},
    name: {type: String},
    seller_pk: {type: String},
    seller_uid: {type: Number}
});

ProductsSchema.statics={
    // here id is the id of the document in the collection
    // here callback is the callback of this form
    get: function(query,callback){
        this.findOne(query,callback);
    },
    getAll: function(query,callback){
        this.find(query,callback);
    },
    updateone: function(id,updatedata,callback){
        this.update(id,{$set:updatedata},callback);
    },
    removeone: function(id,callback){
        this.remove(id,callback);
    },
    create: function(data,callback){
        var products=new this(data);
        products.save(callback);
    }
}

var products=mongoose.model('products',ProductsSchema);

// export the schema

module.exports={
    Products: products
};