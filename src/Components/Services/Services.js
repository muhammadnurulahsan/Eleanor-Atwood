import React from "react";
import useServices from "../../Hooks/useServices";
import ServicesCard from "../ServicesCard/ServicesCard";
import "./Services.css";
import down from "./../../Img/down.png";
import top from "./../../Img/top.png";

const Services = () => {
  const [services] = useServices();
  return (
    <div className="custom-margin">
      <img width="1519px" src={top} alt="" />
      <div className="container pb-5">
        <div className="row row-cols-1 row-cols-md-3">
          {services.map((services) => (
            <ServicesCard key={services.id} services={services}></ServicesCard>
          ))}
        </div>
      </div>
      <img width="1519px" src={down} alt="" />
    </div>
  );
};

export default Services;
