import React from 'react';
import Typing from 'react-typing-animation';

const Typed = () => (
  <Typing className="typed" loop="true">
  <span>
    &#123; The largest programming conference in Poznan. &#125;
  </span>
  <Typing.Backspace count={50} delay={5000}/>
  </Typing>
);

export default Typed;