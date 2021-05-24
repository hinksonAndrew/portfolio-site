import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
  return (
    <div className="imageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <h4>I am<span> Andrew Hinkson</span></h4>
        <p className="about-text">
          Lorem ipsumLorem ipsumLorem ipsumLorem 
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
          ipsumLorem ipsumLorem ipsumLorem ipsumLorem 
        </p>
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>
            <p>Age</p>
            <p>Nationality</p>
            <p>Languages</p>
            <p>Address</p>
            <p>Countries</p>
          </div>
          <div className="right-section">
            <p>: Andrew Hinkson</p>
            <p>: 33</p>
            <p>: American</p>
            <p>: English</p>
            <p>: 123 Main St, Nowhere, Iowa</p>
            <p>: United States</p>
          </div>
        </div>
        <button className="btn">Download CV</button>
      </div>
    </div>
  )
}

export default ImageSection;
