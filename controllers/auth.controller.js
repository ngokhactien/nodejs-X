// const  db = require('../db');
const  User = require('../models/user.models');
const  md5 = require('md5');
module.exports.login = function(req , res){
    res.render('auth/login');
    // res.render('auth/login',{
    //     csrfToken: req.csrfToken()
    // });
}

module.exports.postLogin = function(req , res){
    var email = req.body.email ;
    var password = req.body.password ;

    var user = db.get('users').find({email: email}).value();
    //var user = User.find({email: email});
    if(!user){
        res.render('auth/login', {
            errors :[
                "User dose not exit ."
            ],
            values: req.body
        });
        return;
    }
    var md5password = md5(password);
    if(user.password !== md5password ){
        res.render('auth/login', {
            errors   :[
                "wrong password ."
            ],
            values: req.body
        });
        return;
    }
    res.cookie('userId', user.id , {
        signed : true
    })
    res.redirect('/users')
}