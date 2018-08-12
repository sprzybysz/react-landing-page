import React, { Component } from 'react';
import './resources/sass/main.scss';
import { Element } from 'react-scroll';

import Header from './components/header_footer/header';
import Featured from './components/featured/index';
import EventInfo from './components/event_info/index';
import JoinUs from './components/join_us/index';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/footer';

class App extends Component {
  state = {
    pageTheme: 'orange_theme'
  }
  changeTheme = (color) => {
      this.setState({
          pageTheme: color
      })
    }
  render() {
    return (
      <div id={this.state.pageTheme} className="App clearfix">
        <Header onChangeTheme={(value) => this.changeTheme(value)}/>
        <Element name="Featured">
           <Featured />
        </Element>
        <Element name="Event info">
           <EventInfo/>
        </Element>
        <Element name="Tickets">
            <JoinUs/>
        </Element>
        <Element name="Pricing">
            <Pricing/>
        </Element>
        <Element name="Location">
          <Location/>
        </Element>
        <Footer/>
      </div>
    );
  }
}

export default App;
