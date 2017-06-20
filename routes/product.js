var Products= require('../controller/product');

// routes dealing with product collection

module.exports= function (router) {
    router.post('/create',Products.create),
    router.post('/product',Products.getAll),
    router.get('/product/:id',Products.get),
    router.put('/product/:id',Products.update),
    router.delete('/product/:id',Products.remove)
}