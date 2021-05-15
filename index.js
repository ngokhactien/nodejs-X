// console.log(process.env);
require('dotenv').config();
//console.log(process.env.KHACTIEN);

const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// var csrf = require('csurf');

const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connect(process.env.MONGO_URL);
// console.log (process.env.MONGO_URL);

const userRoute = require('./router/users.route');
const authRoute = require('./router/auth.route');
const productRoute = require('./router/product.route');
const cartRoute = require('./router/cart.route');

const apiProductRoute = require('./api/routers/product.router');

const transferRoute = require('./router/transfer.route');

const authMiddleware = require('./middlewares/auth.middlewares');
const sessionMiddleware = require('./middlewares/session.middleware');

const port = process.env.PORT || 3000 ;

const app = express();



app.set('view engine', 'pug');
app.set('views', './views'); // tên của thư mục cùng với file index.js

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) ;// for parsing application/x-www-form-urlencoded

app.use('/api/products', apiProductRoute);

app.use(cookieParser(process.env.KHACTIEN)) ; // có tham số là dùng signedcookie , ko có ko dùng chỉ dùng cookie
app.use(sessionMiddleware) ;

// app.use(csrf({ cookie: true }));

//static file 
app.use(express.static('public'));    //http://localhost:3000/styles/custom.css dùng đường dẫn 

app.get('/',authMiddleware.repuireAuth ,  function(req , res){
    res.render('index' , {
        name : 'Tiến' 
    });
});

app.use('/users' ,authMiddleware.repuireAuth, userRoute);   // này dùng để bắt đầu chạy users và / gì gì đó thì nói sẽ chạy userRoute
app.use('/auth' , authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer',authMiddleware.repuireAuth, transferRoute);

app.use('/api/products', apiProductRoute);

app.listen(port, function(){
    console.log('server  listening on port ' + port);
});
















