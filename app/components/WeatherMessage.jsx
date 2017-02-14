var React = require('react');

var WeatherMessage = ({location, temp}) => {
  return (
    <h4 className="text-center">It's {temp} ºC at {location}</h4>
  );
};

module.exports = WeatherMessage;
