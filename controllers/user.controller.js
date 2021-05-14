// const  db = require('../db');
const  User = require('../models/user.models');
//id
const shortid = require('shortid');
const { response } = require('express');

module.exports.index = function(req , res){
    // res.render('users/index' , {
    //     users : db.get('users').value()
    // });
    User.find().then(function(users){
        res.render('users/index' , {
            users : users
        });
    })
};

module.exports.search = function(req , res){
    var q = req.query.q;
    var match =  db.get('users').value().filter(function(user){
        return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    res.render('users/index', {
        users : match
    });
};

module.exports.create = function(req , res){
    //console.log(req.cookies)
    res.render('users/create');
} ;

module.exports.get = async function(req, res) {
    var id =req.params.id;
    // console.log( typeof id );
    // var user = db.get('users').find({id: id }).value()  ;
    // res.render('users/view', {
    //     user :user
    // });
    var users = await User.find({id: id });
    console.log(users);
    res.render('users/view', {
        user :users
    })
};

module.exports.postCreate = function(req , res){
    req.body.id = shortid.generate();
    // req.body.avatar = req.file.path    để xem đường dẫn gì     // bài 22 nodejs
    // req.body.avatar = req.file.path.split('/').slice(1).join('/') ;  gốc 
    
    req.body.avatar = req.file.path.split('\\').slice(1).join('/') ;
    
    // db.get('users').push(req.body).write();    // lấy giá trị vửa nhập đẩy vào  list users  
    // db.get('view').push(req.body).write();
    User.find().push(req.body);
    res.redirect('/users');
};