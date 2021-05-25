const db = require('../db')

// viet ham xu ly promise cho moi controller  = async await , khong xu dung "var" ton  bo nho khi run on server
module.exports.addToCart = function(req , res  ){
    var productId = req.params.productId;
    var sessionId = req.signedCookies.sessionId ;
    
    if(!sessionId){
        res.redirect('/products');
        return;
    }
    var count = db
    .get('sessions')
    .find({ id: sessionId })
    .get('cart.' + productId, 0)
    .value();

    // ?? cai
    db.get('sessions')
    .find({id : sessionId })
    .set('cart.'+ productId , count + 1)
    .write();
    
    res.redirect('/products');
};