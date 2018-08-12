import React, { Component } from 'react';
import PageButton from '../utils/Button';

import Zoom from 'react-reveal/Zoom';

class Pricing extends Component {

  state = {
    prices: [50, 100, 150],
    tickets: ['Early Bird', 'Standard', 'Last Chance'],
    desc: [
       'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
       'Donec a pellentesque metus. Quisque mauris elit, tristique sed quam id, porta venenatis leo.',
       'Vivamus porta aliquet nisi vitae congue. '
    ],
    link: ['http://tickets/1', 'http://tickets/2', 'http://tickets/3'],
    delay:[500,0,500]
  }
  showBoxes = () => (
    this.state.prices.map((box, i) => (
      <Zoom key={i} delay={this.state.delay[i]}>
        <div className="pricing_item">
           <div className="pricing_inner_wrapper">
              <div className="pricing_title">
                 <span>${this.state.prices[i]}</span>
                 <span>{this.state.tickets[i]}</span>
              </div>
              <div className="pricing_description">
                   <span>{this.state.desc[i]}</span>
              </div>
              <div className="pricing_buttons">
                 <PageButton
                   text="Buy ticket"
                   text="Buy ticket"
                   color="#fff"
                   padding="10px 20px"
                   fontSize="20px"
                   />
              </div>
           </div>
        </div>
      </Zoom>
    ))
  )

  render() {
    return (
      <div 
        className="page-container bg_dark" 
        >
        <div className="center_wrapper pricing_section">
          <h2>Pricing</h2>
            <div className="pricing_wrapper">
              {this.showBoxes()}
            </div>
        </div>
      </div>
    )
  }
}

export default Pricing;
