import React from 'react';

const Greeting = props => {
  return (
    <div>
      <h3 id="greeting">{props.greet}</h3>
    </div>
  );
};

export default Greeting;
