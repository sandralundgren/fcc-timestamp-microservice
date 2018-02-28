const moment = require('moment');

const dateChecker = (data) => {
  let unix = null;
  let natural = null;

  // true for strict parsing
  const parsedDate = moment(data, 'MMMM D, YYYY', true);

  // checking if valid unix date
  if (!isNaN(data) && moment.unix(data).isValid()) {
    unix = data;
    natural = moment.unix(data).format('MMMM D, YYYY'); 
  } 
  // checking if valid date
  if (parsedDate.isValid()) {
    unix = parsedDate.unix();
    natural = data;
  }

  return {
    unix,
    natural
  }
}

module.exports = dateChecker;
