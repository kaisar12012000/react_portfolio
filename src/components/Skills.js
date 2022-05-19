import React, { useEffect } from "react";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

function Skills ({ skill }) {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])
    return (
      <div 
      data-aos="fade-up"
          data-aos-offset = "200"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
      className="cardWraper">
        <div
          
          className="card">
          <h3>{skill.name}</h3>
          <h5>{skill.level}</h5>
        </div>
        </div>
    )
}

export default Skills;