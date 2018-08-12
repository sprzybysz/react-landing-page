import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
  return (
    <footer className="bg_white">
       <Fade delay={500}>
         <div className="font_righteous footer_logo_venue">code <span className="color_primary">++</span></div>
           <div className="footer_copyright">
             Code ++. All rights reserved.
           </div>
       </Fade>
    </footer>
  );
};

export default Footer;