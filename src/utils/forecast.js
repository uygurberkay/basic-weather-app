const request = require('postman-request');
const chalk = require('chalk');

// Weather Request
const forecast = (latitude, longitude, callback) => {
  const access_key = '22793e66f6473aa98873e959cfeaec8c'
  const url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${latitude},${longitude}`;

  request({ url, json: true }, (error, response) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (response.body.error) {
      callback('Unable to fetch weather data!', undefined);
    } else {
      callback(undefined, `${response.body.current.weather_descriptions[0]}. It is currently ${response.body.current.temperature} degrees out. It feels like ${response.body.current.feelslike} degrees out.`);
    }
  });
}

module.exports = forecast