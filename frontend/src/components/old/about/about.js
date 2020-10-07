import React from "react";

import Celebration from "./celebration";
import AboutBg from "./aboutbg";

const About = () => {
  return (
    <div className="about">
      <AboutBg />
      <Celebration />
      <div className="header">About Us</div>
      <div className="text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
    </div>
  );
};

export default About;
