import React from "react";
import useServices from "../../Hooks/useServices";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="custom-margin">
      <div className="top-banner">
        <div className="container pt-5">
          <h1 className="big-text ms-4">Services</h1>
          <h5 className="ms-4 text-secondary">
            Home <span className="normal-text">/ Services</span>
          </h5>
        </div>
      </div>
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-md-3">
          {services.map((services) => (
            <ServicesCard key={services.id} services={services}></ServicesCard>
          ))}
        </div>
      </div>
      <div className="down-banner"></div>
    </div>
  );
};

export default Services;
