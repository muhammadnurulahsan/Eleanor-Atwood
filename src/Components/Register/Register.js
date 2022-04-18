import React from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const navigate = useNavigate();

  return (
    <div className="custom-margin">
      <div className="register-form-container">
        <div className="register-form">
          <h1 className="mt-4">Register</h1>
          <form>
            <div className="input-field">
              <label htmlFor="name">Name</label>
              <div className="input-wrapper">
                <input type="text" name="name" id="name" placeholder="Enter Your Full Name" />
              </div>
              {/* {email.error && (
                <p className='error'>
                  <AiOutlineExclamationCircle /> {email.error}
                </p>
              )} */}
            </div>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <div className="input-wrapper">
                <input type="text" name="email" id="email" placeholder="Enter Your Email"/>
              </div>
              {/* {email.error && (
                <p className='error'>
                  <AiOutlineExclamationCircle /> {email.error}
                </p>
              )} */}
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  // onBlur={handlePassword}
                  name="password"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
              {/* {password.error && (
                <p className='error'>
                  <AiOutlineExclamationCircle /> {password.error}
                </p>
              )} */}
            </div>
            <button type="submit" className="register-form-submit">
              Register
            </button>
          </form>
          <div className="horizontal-divider mt-4">
            <div className="line-left" />
            <p>or</p>
            <div className="line-right" />
          </div>
          <p className="redirect">
            Already have an account?
            <span className="ms-3" onClick={() => navigate("/login")}>
              Please Login!
            </span>
          </p>
          <div className=""></div>
        </div>
        <div className="register-bg-img"></div>
      </div>
    </div>
  );
};

export default Register;
