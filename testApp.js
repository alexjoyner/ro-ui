process.env.PG_USER_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-user.txt';
process.env.PG_PASS_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-pass.txt';
process.env.PG_DB_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-db.txt';
process.env.PG_HOST_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-host.txt';
process.env.PG_PORT = 32768;
const utils = require('.');
const app = utils.getExpressApp('basic');
const getTestQuery = (req, res) => {
    return {
        text: 'SELECT * FROM point;',
        values: []
    };
}
app.get('/test', utils.runQuery('pg', getTestQuery));

app.get('/healthz', (req, res) => {
    res.send('ok');
});

utils.runExpressApp(app);