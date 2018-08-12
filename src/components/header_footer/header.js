import React, { Component } from 'react';
import  SideDrawer from './SideDrawer';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
library.add(faBars)



class Header extends Component {
    state = {
        drawerOpen: false,
        headerShow: false
    }
    
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll = () => {
        if(window.scrollY > 0) {
             this.setState({
                 headerShow: true
             })
           } else {
             this.setState({
                 headerShow: false
             })
           }
    }

    toggleDrawer = (value) => {
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
            <div>
            <AppBar 
               position="fixed"
               style={{
                  backgroundColor: this.state.headerShow ? '#fff ' : 'transparent',
                  color: this.state.headerShow ? '#23074d' : '#fff',
                  boxShadow: 'none',
                  padding: '10px 0'
        
               }}
            >
              <Toolbar>

                  <div className="header_logo">
                    <div className="font_righteous header_logo_venue">code <span className="color_primary">++</span></div>
                    <div className=""></div>
                  </div>
                  <div onClick={()=>this.props.onChangeTheme('orange_theme')} className="theme_switch_orange"></div>
                  <div onClick={()=>this.props.onChangeTheme('yellow_theme')} className="theme_switch_yellow"></div>
                  <IconButton
                    aria-lavel="Menu"
                    color="inherit"
                    onClick={()=>this.toggleDrawer(true)}
                   >
                     <FontAwesomeIcon icon="bars" /> 
                  </IconButton>
                  
                <SideDrawer 
                 open={this.state.drawerOpen}
                 onClose={(value) => this.toggleDrawer(value)}
                  />
              </Toolbar> 
            </AppBar>
           </div>
        );
    }
}

export default Header;