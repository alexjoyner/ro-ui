process.env.JWT_SECRET = 'SUPER_DUPER_SECRET_KEY';
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
        jwt.createToken({
            expiresIn: 60,
        }),
        sendLocal());
    app.all('/protected',
        jwt.verify(),
        (req, res, next) => {
            res.locals.currentTime = Math.floor(Date.now() / 1000);
            next();
        },
        sendLocal());
}