import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from "reactstrap";
import minh from "../../assets/images/MINH.jpg";
import qui from "../../assets/images/QUIS.jpg";
import andanh from "../../assets/images/andanh.jpg";
import aboutbackground from "../../assets/images/pexels-david-bartus-586687.jpg"
import "./about.css";
const About = () => {
  return (
    <div className="about-us">
      <div className="about-us__header">
        <h1>Về chúng tôi</h1>
      </div>

      <div className="about-us__content">
        <img src={aboutbackground} />
      </div>
      
      <div className='about-us__1'><h2>Đội ngũ của chúng tôi</h2></div>
            
      <div className="about-us__team">
        <div className="about-us__pic">
          <div className="about-us__team-member">
            <img src={minh} alt="[tên thành viên 1]" />
            <h3>QUANG MINH</h3>
            <p>[CODER CHÍNH]</p>
          </div>
          <div className="about-us__team-member">
            <img src={qui} alt="[tên thành viên 2]" />
            <h3>MINH QUIS</h3>
            <p>[CODER PHỤ]</p>
          </div>
          
        </div>
      </div>
    </div>
  );
 
}

export default About