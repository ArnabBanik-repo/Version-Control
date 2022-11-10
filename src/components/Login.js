import React from "react";
import LoginImg from "../assets/imgs/login-img.jpg";
import FB from "../assets/imgs/fb-logo.png";
import Google from "../assets/imgs/google logo.png";
import Apple from "../assets/imgs/apple-logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <div className="img-container">
        <img src={LoginImg} alt="img" />
      </div>
      <div className="form-container">
        <h3>
          <span>Version </span>Control
        </h3>
        <form>
          <input type="text" id="username" placeholder="Enter Username" />
          <input type="password" id="password" placeholder="Enter Password" />
          <Link to={"/"}>Forgot Password?</Link>
          <button>Login</button>
        </form>
        <hr />
        <p id="rule">Or sign up with</p>
        <div className="login-btns">
          <div className="login-btn google">
            <img src={Google} alt="google" />
          </div>
          <div className="login-btn facebook">
            <img src={FB} alt="fb" />
          </div>
          <div className="login-btn apple">
            <img src={Apple} alt="apple" />
          </div>
        </div>
        <p id="register">
          Not register yet? <Link href="/register">Create Account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
