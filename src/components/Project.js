import React, {useEffect } from "react";
import "../App.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Projects ({ project }) {
    useEffect(() => {
        AOS.init({duration: 2000})
      }, [])
    return (
        <div
        data-aos="fade-down"
        data-aos-offset = "200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        className="cardWraper"
        >
        <div
        className="card">
            <h4>{project.desc}</h4>
            <a href={project.link} target="_blank">Visite site.</a>
        </div>
        </div>
    )
}