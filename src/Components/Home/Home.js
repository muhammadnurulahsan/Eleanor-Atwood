import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import img1 from "./../../Img/1.png";
import img2 from "./../../Img/2.png";
import img3 from "./../../Img/3.png";
import math from "./../../Img/math.jpg";
import about from "./../../Img/about.jpg";
import useServices from "../../Hooks/useServices";
import ServicesCard from "../ServicesCard/ServicesCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const [services] = useServices();
  const navigate = useNavigate();
  return (
    <div className="custom-margin">
      <div className="bg-home d-flex align-items-center">
        <div className="container ">
          <div className="ms-5">
            <p className="normal-text">Math mentoring</p>
            <h1 className="big-text">
              Mathematics <br /> Professor
            </h1>
            <div>
              <button
                onClick={() => navigate("/contact")}
                className="px-5 py-3 m3-3 mt-5 btn btn-outline-success rounded-pill shadow-lg"
              >
                Contact Me
              </button>
              <button
                onClick={() => navigate("/aboutme")}
                className="px-5 py-3 ms-3 mt-5 btn btn-outline-danger rounded-pill shadow-lg"
              >
                About Me
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5 py-5">
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col ms-md-0 mt-5 px-0 text-center">
            <div className="card h-100 border-0 ms-auto custom-width">
              <div>
                <img src={img1} className="card-img-top img-size" alt="" />
              </div>
              <div className="card-body">
                <h1 className="title-text">Study Support</h1>
                <p className="normal-text">
                  Join a Study Support session on topics such as: English
                  language development.
                </p>
              </div>
            </div>
          </div>
          <div className="col ms-md-0 mt-5 px-0 text-center">
            <div className="card h-100 border-0 mx-auto custom-width">
              <div>
                <img src={img2} className="card-img-top img-size" alt="" />
              </div>
              <div className="card-body">
                <h1 className="title-text">Academic Skills</h1>
                <p className="normal-text">
                  Academic skills are the abilities, strategies and habits that
                  can help setting.
                </p>
              </div>
            </div>
          </div>
          <div className="col ms-md-0 mt-5 px-0 text-center">
            <div className="card h-100 border-0 me-auto custom-width">
              <div>
                <img src={img3} className="card-img-top img-size" alt="" />
              </div>
              <div className="card-body">
                <h1 className="title-text">Learning Online</h1>
                <p className="normal-text">
                  Access 2000 free online courses from 140 leading institutions
                  worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 py-5">
        <div className="d-flex align-items-center justify-content-evenly">
          <div className="ms-5">
            <img width="460px" height="500px" src={math} alt="" />
          </div>
          <div className="ms-5">
            <p className="normal-text">Experience</p>
            <h2 className="math-text text-line">Math Mentoring Program</h2>
            <p className="normal-text my-5">
              The Math Mentoring Program has been designed to assist students
              who <br /> may be at risk of not meeting progression requirements
              for their program of study.
            </p>
            <div className="d-flex align-items-center text-center">
              <div className="me-5">
                <div className="me-3">
                  <p className="home-number-text">125</p>
                  <p>Enrolled Learners</p>
                </div>
              </div>
              <div className="me-5">
                <div className="me-3">
                  <p className="home-number-text">687</p>
                  <p>Completed Lessons</p>
                </div>
              </div>
              <div>
                <p className="home-number-text">100%</p>
                <p>Study Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5">
        <div className="home-down-bg">
          <div className="text-center pt-5">
            <p className="normal-text">My Services</p>
            <h1 className="big-text">What I DO?</h1>
          </div>
          <div className="container pb-5">
            <div className="row row-cols-1 row-cols-md-3">
              {services.slice(0, 6).map((services) => (
                <ServicesCard
                  key={services.id}
                  services={services}
                ></ServicesCard>
              ))}
            </div>
            <div className="d-flex justify-content-center my-5 pt-5">
              <button
                className="btn btn-outline-secondary py-2 px-5 fs-5 shadow-lg rounded-pill"
                onClick={() => navigate("/services")}
              >
                See All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5 py-5">
        <div className="d-flex align-items-center justify-content-evenly">
          <div className="ms-5">
            <p className="normal-text">About Me</p>
            <h2 className="math-text text-line">
              Math Teacher, Private <br /> Tutoring & <br /> Consulting.
            </h2>
            <p className="normal-text my-4">
              Students enjoy learning from and feel comfortable with someone who
              can clearly tell them how they can master difficult content and
              conquer their challenges. Math tuition guaranteed good review
              improve grades committed qualified I lead a team of tuition
              consultants and coordinators who are former MOE teachers.
            </p>
            <div className="footer-col">
              <div className="social-links">
                <a href="#icon">
                  <FontAwesomeIcon icon={faFacebookSquare} size="lg" />
                </a>
                <a href="#icon">
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </a>
                <a href="#icon">
                  <FontAwesomeIcon icon={faInstagram} size="lg" />
                </a>
                <a href="#icon">
                  <FontAwesomeIcon icon={faLinkedin} size="lg" />
                </a>
              </div>
              <button
                onClick={() => navigate("/aboutme")}
                className="px-5 py-3 mt-4 btn btn-outline-danger rounded-pill shadow-lg"
              >
                About Me
              </button>
            </div>
          </div>
          <div className="mx-5 ">
            <img width="560px" height="600px" src={about} alt="" />
          </div>
        </div>
      </div>
      <div className="down-banner"></div>
    </div>
  );
};

export default Home;
