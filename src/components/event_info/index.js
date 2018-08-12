import React from 'react';
import Zoom from 'react-reveal/Zoom';
import MyCalendar from './calendar';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const EventInfo = () => {
  return (
    <div className="bg_grey page-container" >
        <div className="center_wrapper">
          <div className="event_wrapper">
            <Zoom duration={500}>
              <div className="event_item bg_secondary">
                <div className="event_icon bg_secondary"
                  style={{
                    backgroundImage: `url(${icon_calendar})`,
                  }}
                  >
                </div>
                <div className="event_title">
                   <strong>Event date & time</strong>
                </div>
                <div className="event_date">
                  <br/>  19 Nov, 2018 @09:00
                </div>
                <div>
                </div>
              </div>
            </Zoom>
            <Zoom duration={500} delay="500">
              <div className="event_item bg_secondary">
                <div className="event_icon  bg_secondary"
                  style={{
                    backgroundImage: `url(${icon_location})`,
                  }}
                  >
                </div>
                <div className="event_title">
                   <strong>Event location</strong>
                </div>
                <div className="event_date">
                    <br/> Głogowska 14, 60-734 Poznań
                </div>
              </div>
            </Zoom>
          </div>
            <div className="my_calendar"><MyCalendar/></div>
        </div>
    </div>
  )
}

export default EventInfo;
