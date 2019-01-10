process.env.PG_USER_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-user.txt';
process.env.PG_PASS_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-pass.txt';
process.env.PG_DB_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-db.txt';
process.env.PG_HOST_FILE = '/Users/rosco/Documents/GitHub/shared/ro-server-utils/_pgTestCreds/pg-host.txt';
process.env.TWILIO_SID = '/Users/rosco/Desktop/twilio/sid.txt';
process.env.TWILIO_AUTH_TOKEN = '/Users/rosco/Desktop/twilio/auth_token.txt';
process.env.TWILIO_PHONE_NUM = '/Users/rosco/Desktop/twilio/phone_num.txt';
process.env.PG_PORT = 32768;
process.env.PORT = 9000;
const utils = require('.');
const app = utils.getExpressApp()('basic');

const testPostgres = async (req, res) => {
  console.log('Running!!!!!!')
  try{
    const result = await utils.runQuery()('pg', getTestQueryOpts());
    res.send(result);
  }catch(e){
    console.error(e); 
  }
}
const testTwilioActions = async (req, res) => {
  try{
    const data = await utils.notify()('text', {
      message: `TESTING 123!`,
      recipient: '2523820384'
    });
    return res.send({success: true, data})
  }catch(e){
    console.error(e);
    res.send({success: false, error: e});
  }
};

const getTestQueryOpts = () => {
    return {
        text: 'SELECT * FROM point;',
        values: []
    };
}

app.get('/test/postgres', testPostgres);
app.get('/test/twilio', testTwilioActions);
app.get('/healthz', (req, res) => {
    res.send('ok');
});

utils.runExpressApp()(app);