import React from 'react';
import Button from '@material-ui/core/Button';

import TicketIcon from '../../resources/images/icons/ticket.png';

const PageButton = (props) => {
  return (
    <Button 
      className="bg_secondary"
      variant="contained"
      size="small"
      onClick={props.onClick}
      style={{
        color: props.color,
        padding: props.padding,
        fontSize: props.fontSize
      }}
      >
       <img 
         src={TicketIcon}
         className="iconImage"
         
         />
        {props.text}
    </Button>
  );
};

export default  PageButton;