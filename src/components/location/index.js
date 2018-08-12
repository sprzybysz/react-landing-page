import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2434.2240190224725!2d16.907322215542717!3d52.40261605267463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045b32f665ed01%3A0x58057c1de51e0a71!2sOddzia%C5%82+Celny+MTP!5e0!3m2!1spl!2spl!4v1533931975893" 
        width="100%"
        height="500px" 
        frameBorder="0" 
        allowFullScreen
        >
      </iframe>
      <div className="location_tag">
        <div className="bg_primary">Location</div>
      </div>
    </div>
  );
};

export default Location;