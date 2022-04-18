import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      e.target.name.value === "" ||
      e.target.email.value === "" ||
      e.target.message.value === ""
    ) {
      swal({
        title: "Please fill up all the fields",
        text: "Your Input fields is Empty!",
        icon: "error",
      });
    } else {
      swal({
        title: "Massage Sent Successfully!",
        text: "We will get back to you as soon as Possiable!",
        icon: "success",
      });
      navigate("/");
    }
  };

  return (
    <div>
      <div className="top-banner">
        <div className="container pt-5">
          <h1 className="big-text ms-4">Contact</h1>
          <h5 className="ms-4 text-secondary">
            Home <span className="normal-text">/ Contact</span>
          </h5>
        </div>
      </div>
      <div className="row-cols-1 my-5 py-5">
        <div className="row-md-cols-2">
          <div className="container">
            <div className="d-flex align-items-center justify-content-evenly">
              <div>
                <p className="normal-text">Change Your Life</p>
                <h1>Contact Me Now</h1>
                <p className="normal-text mt-4">
                  Please get in touch and our expert support <br />
                  team will answer all your questions.
                </p>
                <p className="title-text pt-4">Address</p>
                <p className="contact-normal-text">
                  375 E 58th St Brooklyn, NY 11203, United States
                </p>
                <p className="title-text pt-4">Phone Number & Email</p>
                <p className="contact-normal-text">+1 010 582 5006</p>
                <p className="contact-normal-text">E-Atwood@gmail.com</p>
              </div>

              <div>
                <div className="card border-0">
                  <div className="card-body shadow-lg card-custom-padding">
                    <div className="contact-form-container">
                      <div className="contact-form">
                        <h1 className="text-center">Send Me a Message!</h1>
                        <form onSubmit={handleSubmit}>
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
                          <div className="msg-input-field my-3">
                            <label className="ms-2 mb-2" htmlFor="text">
                              Massage
                            </label>
                            <div className="msg-input-wrapper">
                              <textarea
                                type="text"
                                name="message"
                                id="text"
                                className="normal-text"
                                placeholder="Enter Your Massage*"
                              />
                            </div>
                          </div>
                          <button type="submit" className="contact-form-submit">
                            Send
                          </button>
                        </form>
                      </div>
                    </div>
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

export default Contact;
