const { hashPass, authenticate, sendLocal } = require('../../../');
let testHash = '';
const getUser = (req, res, next) => {
    if(req.body.username === 'test'){
        res.locals.results = testHash;
        return next()
    }
    const INVALID_PASS = new Error('Invalid Password');
    INVALID_PASS.status = 401;
    next(INVALID_PASS);
}


module.exports = (app) => {
    app.post('/auth', 
        getUser,
        authenticate('isValid'),
        sendLocal(['isValid']));
    app.post('/hash',
        hashPass('StoredHash'),
        (req,res,next) => {
            testHash = res.locals.StoredHash;
            next();
        },
        sendLocal());
}