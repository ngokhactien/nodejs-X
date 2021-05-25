const shortid = require('shortid');
const  User = require('../models/user.models');

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
    var {q} = req.query;
    // ko dung promise va xu dung ham callback xu ly lai nhu cai duoi 
    var match =  db.get('users').value().filter(/* chinh la no */function(user){
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

// neu params chi nhận một tham sốthifi ko cần t biến để gắn đỡ tốn bộ nhớ 
//code good là như thế
module.exports.get = async function(req, res) {
    const users = await User.find({id: req.params.id });
    res.render('users/view', {
        user :users
    })
};

// cais nay tao anh mo database xem nao
module.exports.postCreate = async function(req , res){
    const data = {
        id : shortid.generate(),
        avatar: req.file.path.split('\\').slice(1).join('/') 
    };
    const result = await User.find().push(data);
    if( !result ) throw Error;
    res.redirect('/users');
};