const twilio = require('twilio');

const accountSid = 'AC73792c1a2e952b195e2ffb4adcc757f9';
const authToken = 'e00ffaf9df4f9bf4ea836775fb4f9e75';

module.exports = new twilio.Twilio(accountSid, authToken);
