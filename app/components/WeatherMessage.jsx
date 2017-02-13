var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <p>It's {temp} ºC at {location}</p>
  );
};

module.exports = WeatherMessage;
