"use strict";

// const  db = require('../db');
var Product = require('../models/product.models'); //phan trang du dung khi tao cau query trong databse su dung query.limit 


module.exports.index = function _callee(req, res, next) {
  var page, perPage, pages, start, end, products;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          page = parseInt(req.query.page) || 1; // n

          perPage = 8; // x

          start = (page - 1) * perPage;
          end = page * perPage; // res.render('products/index',{
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

          pages: page;

          _context.prev = 5;
          _context.next = 8;
          return regeneratorRuntime.awrap(Product.find());

        case 8:
          products = _context.sent;
          // products.food();
          res.render('products/index', {
            products: products,
            pages: page
          });
          _context.next = 14;
          break;

        case 12:
          _context.prev = 12;
          _context.t0 = _context["catch"](5);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[5, 12]]);
};