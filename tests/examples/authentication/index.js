process.env.JWT_SECRET = 'SUPERDUPERSTRONGJSON0n!WEBtoken!4daWIN!!!!';
const { jwt, hashPass, authenticate, sendLocal, ERRORS } = require('../../../');
let testHash = '';
const getUser = (req, res, next) => {
    if(req.body.username === 'test'){
        res.locals.results = testHash;
        return next()
    }
    next(ERRORS.USER_NOT_FOUND);
}


module.exports = (app) => {
    app.post('/auth', 
        getUser,
        authenticate('isValid'),
        sendLocal());
    app.post('/hash',
        hashPass('StoredHash'),
        (req,res,next) => {
            testHash = res.locals.StoredHash;
            next();
        },
        sendLocal());
    app.post('/token',
        (req, res, next) => {
            res.locals.results = req.body;
            next();
        },
        jwt.createToken({}),
        sendLocal());
    app.all('/protected',
        jwt.verify(),
        (req, res, next) => {
            res.locals.currentTime = Math.floor(Date.now() / 1000);
            next();
        },
        sendLocal());
}