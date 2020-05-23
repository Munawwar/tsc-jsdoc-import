const nexmoSendSms = require('./nexmoSendSms');

/** @type nexmoSendSms.NexmoResponse[] */
const payload = [{
  messageId: 'test',
  // messagePrice: 0.02,
  // status: "0"
}];

module.exports = {
  types: nexmoSendSms,
  payload,
};