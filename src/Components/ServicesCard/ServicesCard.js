import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ServicesCard.css";

const ServicesCard = ({ services }) => {
  const navigate = useNavigate();

  const { id, name, img, price, rate, description } = services;
  return (
    <div>
      <div className="col ms-md-0 mt-5 px-0 text-start">
        <div className="card h-100 shadow-lg  border-0 ms-auto custom-width">
          <div>
            <img
              src={img}
              className="card-img-top custom-img-margin img-size"
              alt=""
            />
          </div>
          <div className="card-body mx-3">
            <h1 className="title-text">{name}</h1>
            <h5 className="title-text">Price: ${price}</h5>
            <div>
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon className="text-warning" icon={faStar} />
              <FontAwesomeIcon
                className="me-2 text-warning"
                icon={faStarHalfStroke}
              />
              {rate} (1,000+)
            </div>
            <p className="normal-text">{description}</p>
            <div className="d-flex justify-content-center">
              <button
                onClick={() => navigate(`/services/${id}`)}
                className="btn btn-outline-success px-5 mb-2 rounded-pill shadow-lg"
              >
                See Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
