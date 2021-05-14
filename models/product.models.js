const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({    // khai báo những cái field có trong object của chúng ta , lưu gì trong database ghi vào và lấy ra cũng thế 
    name : String,
    image : String,
    description : String
});

const Product = mongoose.model('Product' , productSchema , 'products');

module.exports = Product;