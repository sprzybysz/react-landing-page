import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

class MyCalendar extends React.Component {
  static displayName = 'Calendar';
  state = {
    event: {
      title: 'Code ++',
      description: 'The largest programming conference in Poznan',
      location: 'Poznan',
      startTime: '2018-11-19T09:00:00-04:00',
      endTime: '2018-11-19T18:00:00-04:00'
    },
  };

  render() {
    let items = [
       { outlook: 'Outlook' },
       { google: 'Google' },
       { apple: 'Apple Calendar' }
    ];
    let icon = { 'calendar-plus-o': 'left' };
    return <div><AddToCalendar
      event={this.state.event}
      listItems={items}
      buttonTemplate={icon}
      buttonLabel='+ Add to calendar'
      />
  </div>;
  };
}

export default MyCalendar;
