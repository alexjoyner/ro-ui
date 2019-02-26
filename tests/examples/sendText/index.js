const { sendLocal, sendMessage } = require('../../../');
process.env.TWILIO_SID = '/Users/rosco/Desktop/twilio/sid.txt';
process.env.TWILIO_AUTH_TOKEN = '/Users/rosco/Desktop/twilio/auth_token.txt';
process.env.TWILIO_PHONE_NUM = '/Users/rosco/Desktop/twilio/phone_num.txt';
module.exports = (app) => {
    app.get('/test/sendText',
        sendMessage('text', {
        message: `TESTING 123!`,
        recipient: '123456'
        }),
        sendLocal('result')
    );
}