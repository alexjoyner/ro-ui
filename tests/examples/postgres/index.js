const path = require('path');
const { getTextFromFile, query, sendLocal } = require('../../../');
process.env.PG_USER_FILE = path.resolve(__dirname, '../../../_pgTestCreds/pg-user.txt');
process.env.PG_PASS_FILE = path.resolve(__dirname, '../../../_pgTestCreds/pg-pass.txt');
process.env.PG_DB_FILE = path.resolve(__dirname, '../../../_pgTestCreds/pg-db.txt');
process.env.PG_HOST_FILE = path.resolve(__dirname, '../../../_pgTestCreds/pg-host.txt');
process.env.PG_PORT = 32768;

module.exports = (app) => {
    const getQueryOpts = () => ({
        text: getTextFromFile(__dirname, './pgTest.pgsql'),
        values: []
    });
    app.get('/test/postgres', 
        query('pg', getQueryOpts, 'points'), 
        sendLocal('points')
    );
}