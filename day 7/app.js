const request = require('request');

// const yargs = require('yargs');
//
// const geocode = require('./geocode/geocode')
//
// const argv = yargs
//   .options({
//     a: {
//       demand: true,
//       alias: 'address',
//       describe: 'Addr to fetch weather',
//       string: true
//     }
//   })
//   .help()
//   .alias('help', 'h')
//   .argv;
//
// geocode.geocodeAddress(argv.address, (errorMessage, results) => {
//   if (errorMessage) {
//     console.log(errorMessage);
//   } else {
//     console.log(JSON.stringify(results, undefined, 2));
//   }
// });


// 8ddcf168b2f164ee9d3fffd5162a0be4
// // example lat and lng
// "latitude": 42.3601,
// "longitude": -71.0589,

request({
  url:'https://api.darksky.net/forecast/8ddcf168b2f164ee9d3fffd5162a0be4/42.3601,-71.0589',
  json: true
} , (error, response, body) => {
  if (!error && response.statusCode === 200) {
    console.log(body.currently.temperature);
  } else {
    console.log('unable to fetch weather');
  }
});
