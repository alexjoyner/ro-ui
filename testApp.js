const utils = require('.');
const app = utils.getExpressApp('basic');

app.get('/test', (req, res) => {
    res.send('ok');
});


utils.runExpressApp(app);