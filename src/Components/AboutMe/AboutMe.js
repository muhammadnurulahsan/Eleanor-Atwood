import React from "react";
import "./AboutMe.css";
import about from "./../../Img/about.png";
import goal from "./../../Img/goal.png";

const AboutMe = () => {
  return (
    <div>
      <div className="top-banner">
        <div className="container pt-5">
          <h1 className="big-text ms-4">About Me</h1>
          <h5 className="ms-4 text-secondary">
            Home <span className="normal-text">/ About Me</span>
          </h5>
        </div>
      </div>

      <div className="container">
        <div>
          <div className="row-cols-1 my-5">
            <div className="row-md-cols-2">
              <div className="container">
                <div className="d-flex align-items-center justify-content-evenly mx-5">
                  <div className="pt-5">
                    <img height="450px" width="450px" src={about} alt="" />
                  </div>
                  <div className="ms-5 mt-5">
                    <h1>Assalamualaikum Warahmatullahi Wabarakatuh</h1>
                    <h5 className="pt-3 title-text">Muhammad Nurul Ahsan</h5>
                    <p className="normal-text py-3">
                      Alhamdulillah I'm a student of Qawmi Madrasha at Arabic
                      University of Dhaka. also I'm a student of programming
                      hero batch-5 with a passion for web development. I'm
                      currently learning React.js and Node.js.
                    </p>
                    <p className="normal-text">
                      I'm a Jr. Full Stack Web Developer. I Like To Upgrade My
                      Self Day By Day. I Have A Plan For Next 6 Months. I Will
                      Learn React.js. After That I Will Start Learning Node.js
                      along with TypeScript. Then I Will Dive Into Node.js.
                      Beside These I Have Good Interest In Python and Django. I
                      Wish I Could Learn Them Soon Insha'Allah. Also I Will Be
                      Learning Backend Development After Sometime. I am Working
                      6-8 Hours Daily For Achieving My Goals As Soon As
                      Possible.
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-center my-5 py-5">
                  <div className=" me-5">
                    <h1>What is my goal objective?</h1>
                    <p className="normal-text py-3">
                      I want to be a Senior Full Stack professional web
                      developer. The main objective when working as a developer
                      is to be productive and deliver value to the company. To
                      gain confidence and fame using my potential in the field
                      of “Web Development”, and express my innovative creative
                      skills for self and company growth.
                    </p>
                    <p className="normal-text">
                      To take a challenging role as Front End Web Developer in a
                      highly technical company where I could utilize my skills
                      in Web Design, Front-End Web Development, Software, and
                      CMS/e-Commerce and use these skills in providing quality
                      service to the company.
                    </p>
                  </div>
                  <div>
                    <img src={goal} className="rounded-3 shadow-lg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="down-banner"></div>
    </div>
  );
};

export default AboutMe;
