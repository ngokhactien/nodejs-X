const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({    // khai báo những cái field có trong object của chúng ta , lưu gì trong database ghi vào và lấy ra cũng thế 
    email : String,
    pasword : String,
    name : String,
    avatar : String,
    phone : String
});

const User = mongoose.model('User', userSchema , 'users');

module.exports = User ;