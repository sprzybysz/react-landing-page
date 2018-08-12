import React from 'react';
import { scroller } from 'react-scroll';

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const SideDrawer = (props) => {
  
  const scrollToEl = (element) => {
    scroller.scrollTo(element,{
      duration: 1500,
      delay: 100,
      smooth: true,
      offset: -80
    });
    props.onClose(false);
  }
  
    return (
      <div>
        <Drawer
          anchor="right"
          open={props.open}
          onClose={() => props.onClose(false)}
        
        >
           <List component="nav">
               <ListItem button onClick = {() => scrollToEl('Featured')}>
                  Start
               </ListItem>
               <ListItem button onClick = {() => scrollToEl('Event info')}>
                  Event info
               </ListItem>
               <ListItem button onClick = {() => scrollToEl('Tickets')}>
                  Tickets
               </ListItem>
               <ListItem button onClick = {() => scrollToEl('Pricing')}>
                  Pricing
               </ListItem>
               <ListItem button onClick = {() => scrollToEl('Location')}>
                  Location
               </ListItem>
            </List>
        </Drawer>
      </div>
    );
};

export default SideDrawer;