import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <div className="custom-margin">
      <div className="top-banner">
        <div className="container pt-5">
          <h1 className="big-text ms-4">About Me</h1>
          <h5 className="ms-4 text-secondary">
            Home <span className="normal-text">/ About Me</span>
          </h5>
        </div>
      </div>
      <div className="down-banner"></div>
    </div>
  );
};

export default AboutMe;
