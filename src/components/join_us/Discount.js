import React, { Component } from 'react';

import PageButton from '../utils/Button';

import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

class Discount extends Component {
  
  state={
    discountStart:0,
    discountEnd: 30
  }
  
  percentage = () => {
    if(this.state.discountStart < this.state.discountEnd) {
      this.setState({
        discountStart: this.state.discountStart + 1
      })
    }
  }
  
  componentDidUpdate() {
    setTimeout(() => {
      this.percentage()
    }, 20)
  }
  render() {
     return (
       <div className="center_wrapper">
          <div className="discount_wrapper clearfix">
             <Fade
                 onReveal={() => this.percentage()}
               >
               <div className="discount_percentage">
                  <span className="color_primary">{this.state.discountStart}%</span>
                  <span className="color_primary">OFF</span>
               </div>
             </Fade>
             <Zoom>
               <div className="discount_description">
                 <h3>Early birds</h3>
                   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a pellentesque metus. Quisque mauris elit, tristique sed quam id, porta venenatis leo.</p>
                     <div>
                       <PageButton 
                         text="Buy ticket"
                         bgColor="#0097A7"
                         color="#fff"
                         padding="10px 20px"
                         fontSize="20px"
                         />
                     </div>
               </div>
             </Zoom>
          </div>
       </div>
     )
  }  
}
export default Discount;