"use strict";

// const  db = require('../db');
var User = require('../models/user.models');

var md5 = require('md5');

module.exports.login = function (req, res) {
  res.render('auth/login'); // res.render('auth/login',{
  //     csrfToken: req.csrfToken()
  // });
};

module.exports.postLogin = function _callee(req, res) {
  var _req$body, email, password, md5password, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          md5password = md5(password);
          _context.next = 4;
          return regeneratorRuntime.awrap(db.get('users').find({
            email: email
          }).value());

        case 4:
          user = _context.sent;

          if (user) {
            _context.next = 8;
            break;
          }

          res.render('auth/login', {
            errors: ["User dose not exit ."],
            values: req.body
          });
          return _context.abrupt("return");

        case 8:
          if (!(user.password !== md5password)) {
            _context.next = 11;
            break;
          }

          res.render('auth/login', {
            errors: ["wrong password ."],
            values: req.body
          });
          return _context.abrupt("return");

        case 11:
          res.cookie('userId', user.id, {
            signed: true
          });
          res.redirect('/users'); //<---

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
};