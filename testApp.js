process.env.PG_USER_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-user.txt';
process.env.PG_PASS_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-pass.txt';
process.env.PG_DB_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-db.txt';
process.env.PG_HOST_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-host.txt';
process.env.TWILIO_SID = '/Users/rosco/Desktop/twilio/sid.txt';
process.env.TWILIO_AUTH_TOKEN = '/Users/rosco/Desktop/twilio/auth_token.txt';
process.env.TWILIO_PHONE_NUM = '/Users/rosco/Desktop/twilio/phone_num.txt';
process.env.PG_PORT = 32768;
process.env.PORT = 9000;
const {makeApp, runApp, query, sendMessage, getTextFromFile} = require('.');
const app = makeApp('basic');
const runTestQuery = query('pg', {
  text: getTextFromFile(__dirname, 'pgTest.pgsql'),
  values: []
}, 'points');
const sendTestMessage = sendMessage('text', {
  message: `TESTING 123!`,
  recipient: '123456'
})

app.get('/test/postgres', runTestQuery, (req, res) => {
  res.send(res.locals);
});
app.get('/test/sendText', sendTestMessage, (req, res) => {
  res.send({ success: true, data: res.locals.results });
});
app.all('/sandbox', (req, res) => {
  res.send('Hello World!')
});

runApp(app);