import React from "react";
import myPhoto from "../photo/chaitaliIDPhoto.jpeg";
import "./about.css";

export default function About() {
  return (
    <section className="section" id="about">
      

      <div className="about-container">
        {/* Left Side Image */}
        <div className="about-left">
          <img
            src={myPhoto}
            alt="Chaitali"
            loading="lazy"
            className="about-img"
          />
        </div>

        {/* Right Side Text */}
        <div className="about-right">
          <h1 className="title"> About </h1>
          <h2 className="about-name">Chaitali Patil</h2>
          <h5 className="about-subtitle">React Developer | Web Enthusiast</h5>

          <p className="subtext">
            I Chaitali Patil. I am from Kolhapur. I completed Bachelor
            of Engineering in Computer from Dr. D. Y. Patil College of
            Engineering and Technology, Kolhapur. I have learned HTML, CSS,
            Bootstrap, JavaScript, SQL and Java. I enjoy building responsive websites 
            and projects like Todo Apps, Weather Apps and Movie Search applications.
          </p>
        </div>
      </div>
    </section>
  );
}
