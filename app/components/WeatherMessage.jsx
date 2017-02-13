var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <p>It's {temp} celcius at {location}</p>
  );
};

module.exports = WeatherMessage;
