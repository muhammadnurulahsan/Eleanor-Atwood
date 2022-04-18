import React from "react";
import "./CheckOut.css";
import course01 from "./../../Img/01.jpg";
import course02 from "./../../Img/02.jpg";
import course03 from "./../../Img/03.jpg";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const CheckOut = () => {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.name.value);

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.phone.value === "" ||
      e.target.message.value === ""
    ) {
      swal({
        title: "Please fill up all the fields",
        text: "Your Input fields is Empty!",
        icon: "error",
      });
    } else {
      swal({
        title: "Your Order Successfully Confirm!",
        text: "Please Check Your Email for Order Confirmation!",
        icon: "success",
      });
      navigate("/");
    }
  };

  return (
    <div className="custom-margin">
      <div className="top-banner">
        <div className="container pt-5">
          <h1 className="big-text ms-4">Checkout</h1>
          <h5 className="ms-4 text-secondary">
            Home
            <span className="normal-text">/ Services Details / Checkout</span>
          </h5>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="row-cols-1 my-5 py-5">
          <div className="row-md-cols-2">
            <div className="container">
              <div className="d-flex align-items-center justify-content-evenly">
                <div>
                  <h1 className="text-start pb-3">Order Information</h1>
                  <div>
                    <div className="input-field">
                      <label htmlFor="name">Name</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Enter Your Name*"
                          className="normal-text"
                        />
                      </div>
                    </div>
                    <div className="input-field my-3">
                      <label htmlFor="email">Email</label>
                      <div className="input-wrapper">
                        <input
                          type="text"
                          name="email"
                          id="email"
                          placeholder="Enter Your Email*"
                          className="normal-text"
                        />
                      </div>
                    </div>
                    <div className="input-field my-3">
                      <label htmlFor="phone">Phone Number</label>
                      <div className="input-wrapper">
                        <input
                          type="number"
                          name="phone"
                          id="phone"
                          placeholder="Enter Phone Number*"
                          className="normal-text"
                        />
                      </div>
                    </div>
                    <div className="msg-input-field my-3">
                      <label className="ms-2 mb-2" htmlFor="text">
                        Address
                      </label>
                      <div className="msg-input-wrapper">
                        <textarea
                          type="text"
                          name="message"
                          id="message"
                          className="normal-text"
                          placeholder="Enter Your Address*"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="card border-0">
                    <div className="card-body shadow-lg card-custom-padding">
                      <div className="contact-form-container">
                        <div className="contact-form">
                          <h6 className="title-text m-0">Courses 03</h6>
                          <div className="my-3">
                            <div className="">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                  <img
                                    className="rounded-3 shadow"
                                    width="180px"
                                    src={course01}
                                    alt=""
                                  />
                                </div>
                                <div className="ms-3">
                                  <h6 className="course-text">
                                    <span className="text-secondary">
                                      Courses By:
                                    </span>{" "}
                                    Eleanor Atwood
                                  </h6>
                                  <h6 className="py-2 course-name">
                                    Academic Skills
                                  </h6>
                                  <h6 className="price-text">$ 760</h6>
                                </div>
                              </div>
                            </div>
                            <div className="my-4">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="">
                                  <img
                                    className="rounded-3 shadow"
                                    width="180px"
                                    src={course02}
                                    alt=""
                                  />
                                </div>
                                <div className="ms-3">
                                  <h6 className="course-text">
                                    <span className="text-secondary">
                                      Courses By:
                                    </span>{" "}
                                    Eleanor Atwood
                                  </h6>
                                  <h6 className="py-2">Learning Online</h6>
                                  <h6 className="price-text">$ 760</h6>
                                </div>
                              </div>
                            </div>
                            <div className="">
                              <div className="d-flex align-items-center justify-content-between">
                                <div className="rounded-3">
                                  <img
                                    className="rounded-3 shadow"
                                    width="180px"
                                    src={course03}
                                    alt=""
                                  />
                                </div>
                                <div className="ms-3">
                                  <h6 className="course-text">
                                    <span className="text-secondary">
                                      Courses By:
                                    </span>{" "}
                                    Eleanor Atwood
                                  </h6>
                                  <h6 className="py-2">Private Tutoring</h6>
                                  <h6 className="price-text">$ 760</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                          <button type="submit" className="contact-form-submit">
                            Confirm Order
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      <div className="down-banner"></div>
    </div>
  );
};

export default CheckOut;
