let express = require('express');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let helmet = require('helmet');

const getBasicApp = () => {
    let app = express();
    // Basic security settings
    app.use(helmet());
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        next();
    });

    app.use(bodyParser.json());
    app.use(morgan('common'));
    app.get('/healthz', function (req, res) {
        // do app logic here to determine if app is truly healthy
        // you should return 200 if healthy, and anything else will fail
        // if you want, you should be able to restrict this to localhost (include ipv4 and ipv6)
        res.send('I am happy and healthy\n');
    });
    app.all('/bounce', function (req, res) {
        res.send(req.body || {});
    });
    return app;
}
const startegies = {
    'basic': getBasicApp()
}
module.exports = (appType) => {
    return startegies[appType]
}