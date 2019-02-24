const bcrypt = require('bcrypt');

module.exports = (storeVar='results') => {
    return async (req, res, next) => {
        const hashedPass = res.locals.hashedPass || res.locals.results;
        const attemptPass = req.body.password;
        if(typeof hashedPass !== 'string'){
            return next(new TypeError(`HashedPass must be a string: got ${hashedPass}`));
        }
        if(typeof attemptPass !== 'string'){
            return next(new TypeError(`Password must be a string: got ${attemptPass}`));
        }
        try{
            const valid = await bcrypt.compare(attemptPass, hashedPass);
            res.locals[storeVar] = valid;
            next();
        }catch(e){
            next(e);
        };
    } 
}