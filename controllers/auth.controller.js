// const  db = require('../db');
const  User = require('../models/user.models');
const  md5 = require('md5');
module.exports.login = function(req , res){
    res.render('auth/login');
    // res.render('auth/login',{
    //     csrfToken: req.csrfToken()
    // });
}

module.exports.postLogin = async (req , res) => {
    const { email, password } = req.body ;
    const md5password = md5(password);
    const user = await db.get('users').find({email}).value();
    // qua dai dong -->
    if(!user){
        res.render('auth/login', {
            errors :[
                "User dose not exit ."
            ],
            values: req.body
        });
        return;
    };
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
    //<---
}