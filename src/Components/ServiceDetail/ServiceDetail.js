import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [service, setService] = useState({});
  useEffect(() => {
    fetch("/dynamic-data.json")
      .then((res) => res.json())
      .then((data) => {
        setService(data.find((item) => item.id === id));
      });
  }, [id]);

  return (
    <div className="custom-margin">
      <div className="top-banner">
        <div className="container pt-5">
          <h1 className="big-text ms-4">Services Details</h1>
          <h5 className="ms-4 text-secondary">
            Home
            <span className="normal-text">
              / Services / {service?.serviceName}
            </span>
          </h5>
        </div>
      </div>

      <div className="container py-5 my-5">
        <div className="d-flex justify-content-evenly">
          <div className="bg-white text-dark text-start about1-div">
            <h2 className="">Service Details</h2> <hr className="me-5" />
            <h5 className="py-2 normal-text">{service?.description}</h5>
            <div className="pt-3">
              <h6 className="title-text">
                Course Name: {service?.serviceName}
              </h6>
            </div>
            <div className="pt-3">
              <h6 className="title-text">
                Course Fee: ${service?.servicePrice}
              </h6>
            </div>
            <div className="pt-3">
              <h6 className="title-text">
                Test Fee: ${service?.admissionPrice}
              </h6>
            </div>
            <div className="d-flex pt-3">
              <h6 className="title-text">Total Cost: ${service?.totalCost}</h6>
            </div>
            <div className="mt-3">
              <button
                onClick={() => navigate("/checkout")}
                className="py-2 px-4 my-3 btn btn-outline-secondary rounded-pill shadow-lg none"
              >
                Order Now
              </button>
            </div>
          </div>
          <div>
            <img
              className="rounded-3 shadow shadow-lg ms-5"
              height="500px"
              width="650px"
              src={service?.img}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="down-banner"></div>
    </div>
  );
};

export default ServiceDetail;
