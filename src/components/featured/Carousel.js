import React from 'react';
import Slider from "react-slick";

import slide_1 from '../../resources/images/img-1.jpg';
import slide_2 from '../../resources/images/img-2.jpeg';

const Carousel = () => {
     const settings = {
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 500,
    }
    return (
      <div
        className="carousel_wrapper"
        style={{
          height:`${window.innerHeight}px`,
          overflow: 'hidden',
        }}
        >
          <Slider  {...settings}>
           
            <div>
              <div className="carousel_image"
              style={{
                   background: `url(${slide_1})`,
                   height: `${window.innerHeight}px`,
                  
                 }}
              >
               <div className="overlay"></div>
              </div>
            </div>

            <div> 
              <div className="carousel_image"
              style={{
                    background: `url(${slide_2})`,
                    height: `${window.innerHeight}px`,
              
                  }}
              >
              </div>
            </div>

            
          </Slider> 
      </div>
    
    );
};

export default Carousel;