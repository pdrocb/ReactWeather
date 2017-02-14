var React = require('react');
var {Link} = require('react-router');

// at columns small-12 is by default because it's not specified 

var Examples = () => {
    return (
      <div>
        <h1 className="text-center">Examples</h1>
        <p>Here are a few examples to try out:</p>
        <ol>
          <li>
            <Link to='/?location=Guadalajara'>Guadalajara, Jalisco</Link>
          </li>
          <li>
            <Link to='/?location=Motherinlaw'>Mother in law Heart</Link>
          </li>
        </ol>
      </div>
    );
};

module.exports = Examples;
