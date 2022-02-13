import React from "react";
import profilepic from "../../assets/images/profile/image0.jpg";

function About() {
    return (
      <section className="about-me">
        <h1 id="about">About Me</h1>
        <img src={profilepic} className="mx-2" style={{ width: "45%" }} alt="me in mii form"></img>
        <div className='about-text'>
            <h2>Hi, I'm Megha</h2>
            <p>and I'm a full-time college student working towards becoming a full stack engineer.</p>
        </div>
      </section>
    );
}
  
export default About;