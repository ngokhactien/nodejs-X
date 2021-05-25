"use strict";

var shortid = require('shortid');

var User = require('../models/user.models');

module.exports.index = function (req, res) {
  // res.render('users/index' , {
  //     users : db.get('users').value()
  // });
  User.find().then(function (users) {
    res.render('users/index', {
      users: users
    });
  });
};

module.exports.search = function (req, res) {
  var q = req.query.q; // ko dung promise va xu dung ham callback xu ly lai nhu cai duoi tao off ok

  var match = db.get('users').value().filter(
  /* chinh la no */
  function (user) {
    return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('users/index', {
    users: match
  });
};

module.exports.create = function (req, res) {
  //console.log(req.cookies)
  res.render('users/create');
}; // neu params chi nhận một tham sốthifi ko cần t biến để gắn đỡ tốn bộ nhớ 
//code good là như thế


module.exports.get = function _callee(req, res) {
  var users;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(User.find({
            id: req.params.id
          }));

        case 2:
          users = _context.sent;
          res.render('users/view', {
            user: users
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  });
}; // cais nay tao anh mo database xem nao


module.exports.postCreate = function _callee2(req, res) {
  var data, result;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          data = {
            id: shortid.generate(),
            avatar: req.file.path.split('\\').slice(1).join('/')
          };
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.find().push(data));

        case 3:
          result = _context2.sent;

          if (result) {
            _context2.next = 6;
            break;
          }

          throw Error;

        case 6:
          res.redirect('/users');

        case 7:
        case "end":
          return _context2.stop();
      }
    }
  });
};