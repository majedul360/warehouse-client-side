import React from "react";
import { Link } from "react-router-dom";
import Sociallogin from "../../socialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  return (
    <div className="authentication">
      <Sociallogin />
      <div className="form-container">
        <h3 className="auth-title">login</h3>
        <form action="">
          <input type="email" placeholder="enter your email" />
          <input type="password" placeholder="enter your password" />
          <input className="auth-btn" type="submit" value="login" />
        </form>
        <p className="auth-option">
          new to groca? <Link to="/registar">create an account</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
