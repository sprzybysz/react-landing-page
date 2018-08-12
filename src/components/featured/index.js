import React from 'react';
import Carousel from './Carousel';
import Typed from './Typed';
import Timer from './Timer';


const Featured = () => {
    return (
      <div className="banner page-container" style={{position: 'relative'}}>
          <div className="slider_header">
             <div className="wrapper">
              <h1 className="slider_heading logo_font">code ++</h1>
                <div className="slider_typed">
                  <Typed/>
                </div>
                <Carousel/>
             </div>
          </div>
          <Timer />
      </div>
    );
};

export default Featured;