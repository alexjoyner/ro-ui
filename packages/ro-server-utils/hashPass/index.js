const bcrypt = require('bcrypt');
const saltRounds = 10;


module.exports = (storeVar='results') => {
    return async (req, res, next) => {
        const passToHash = req.body.password || res.locals.password || res.locals.results;
        if(typeof passToHash !== 'string'){
            next(new TypeError('password not correct type'));
        }
        try{
            const hash = await bcrypt.hash(req.body.password, saltRounds);
            res.locals[storeVar] = hash;
            next();
        }catch(e){
            next(e);
        };
    } 
}