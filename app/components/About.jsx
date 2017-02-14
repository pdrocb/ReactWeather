var React = require('react');

// This can be refactored becase is a stateless component
// Just show information

var About = () => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p>This is a weather application build on React. I have build this
        because I don't have anything better to do right now.
      </p>
      <p>
        Here are some of the tools I used:
      </p>

      <ul>
        <li>
          <a href="https://facebook.github.io/react/">React</a> - This was the JS Framework I used.
        </li>
        <li>
          <a href="https://openweathermap.org/">Open Weather Map</a> - I used Open Weather Map to search initially for weather data by city name. But I realized it was better to make stupid weather searches.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
