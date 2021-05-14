module.exports.postCreate = ( req , res , next )=>{
    var errors = [];
    if(!req.body.name){
        errors.push('Name is repuire');
    }

    if(!req.body.phone){
        errors.push('Phone is repuire');
    }

    if(errors.length){
        res.render('users/create', {
            errors: errors,
            values: req.body
        });
        return ;
    }
    next();
};