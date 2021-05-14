const express = require('express');
var multer  = require('multer');
const controller = require('../controllers/user.controller');
const Validate = require('../validate/user.validate');

const authMiddleware = require('../middlewares/auth.middlewares');

var upload = multer({ dest: './public/uploads/' });

const router = express.Router();

router.get('/' ,authMiddleware.repuireAuth  ,  controller.index );

//cookie
router.get('/cookie', (req , res , next)=>{
    res.cookie('user-id',123412);
    res.send('hello tien');
})


router.get('/search', controller.search );
router.get('/create',  controller.create);
//bài 7
router.get('/:id', controller.get);
// post
router.post('/create',
    upload.single('avatar'),    // avatar này trùng với name của html
    Validate.postCreate ,
    controller.postCreate
);

module.exports = router;