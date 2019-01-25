const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia%20+&key=YOURAPIKEY',
  json: true
}, (error, response, body) => {
  console.log(body);
});
