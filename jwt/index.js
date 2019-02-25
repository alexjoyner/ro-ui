let jwt, path, fs, JWT_SECRET;
const { FORBIDDEN } = require('../helpers/ERRORS');

const init = () => {
    console.log('INIT JWT');
    jwt = require('jsonwebtoken');
    path = require('path');
    fs = require('fs');
    JWT_SECRET = process.env.JWT_SECRET || fs.readFileSync(process.env.JWT_SECRET_FILE, 'utf8');
};


module.exports = {
    createToken: (options={}, storeVar = 'results') => {
        init();
        return (req, res, next) => {
            const body = res.locals[options.localVar] || res.locals.results || options.data || req.body;
            jwt.sign({ ...body }, JWT_SECRET, options, (err, token) => {
                if(err){
                    return next(err);
                }
                res.locals[storeVar] = token;
                next();
            });
        }
    },
    verify: (storeVar='results') => {
        init();
        return (req, res, next) => {
            const bearerHeader = req.headers['authorization'];
            if(!bearerHeader){
                return next(FORBIDDEN)
            }
            const bearer = bearerHeader.split(' ');
            const token = bearer[1];
            jwt.verify(token, JWT_SECRET, (err, data) => {
                if(err){
                    return next(FORBIDDEN);
                };
                res.locals.tokenData = data;
                next();
            });
        }
    }
}