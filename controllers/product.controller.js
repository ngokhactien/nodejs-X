// const  db = require('../db');
const  Product = require('../models/product.models');

module.exports.index = async function(req , res, next){
    var page = parseInt(req.query.page) || 1 ;  // n
    var perPage = 8 ; // x
    var pages ;
    var start = (page - 1 ) *perPage ;
    var end = page * perPage  ;

    // res.render('products/index',{
    //     // products : db.get('products').value().slice(0,8)
    //     //products : db.get('products').value().slice(start,end)
    //     products : db.get('products').drop(start).take(perPage).value() ,
    //     pages : page 
        
    // });
    // Product.find().then( function(products){
    //     console.log(products);
    //     res.render('products/index',{
    //         products : products
    //     });
    // });

    pages : page
    try {
        var products = await Product.find();
        // products.food();
        res.render('products/index',{
            products : products,
            pages : page 
        });
    } catch (error) {
        //next(error); // chạy qua dòng tiếp theo báo lỗi
        // next();   // chạy qua dòng tiếp theo ko báo lỗi 
    }

};