import React from 'react';
import about from '../img/about.png';

function ImageSection() {
  return (
    <div className="imageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>I am<span> Andrew Hinkson</span></h4>
        <p>
          Lorem ipsumLorem ipsumLorem ipsumLorem 
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
        </p>
        <div className="about-details">

        </div>
      </div>
    </div>
  )
}

export default ImageSection;
