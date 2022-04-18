import React from "react";
import "./Login.css";
import gImg from "../../Img/google.png";
import gitImg from "./../../Img/github.png";
import fbImg from "./../../Img/facebook.png";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="custom-margin">
      <div className="bg-img">
        <div className="login-form-container">
          <div className="login-form">
            <h1 className="mt-4">Login</h1>
            <form>
              <div className="input-field">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input type="text" name="email" id="email" />
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
                  />
                </div>
                {/* {password.error && (
              <p className='error'>
                <AiOutlineExclamationCircle /> {password.error}
              </p>
            )} */}
              </div>
              <button type="submit" className="login-form-submit">
                Login
              </button>
            </form>
            <div className="horizontal-divider mt-4">
              <div className="line-left" />
              <p>or</p>
              <div className="line-right" />
            </div>
            <div className="d-flex justify-content-center my-3">
              <button className="btn shadow rounded-pill me-4">
                <img height="45px" width="40px" src={gitImg} alt="facebook-icon" />
              </button>
              <button className="btn shadow rounded-pill me-4">
                <img src={gImg} height="45px" width="40px" alt="google-icon" />
              </button>
              <button className="btn shadow rounded-pill me-4">
                <img height="45px" width="42px" src={fbImg} alt="github-icon" />
              </button>
            </div>
            <p className="redirect">
              Don't have an account?{" "}
              <span className="ms-3" onClick={() => navigate("/register")}>
                Please Register!
              </span>
            </p>
            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
