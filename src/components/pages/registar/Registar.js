import React from "react";
import { Link } from "react-router-dom";
import Sociallogin from "../../socialLogin/SocialLogin";
import "./Registar.css";
const Registar = () => {
  return (
    <div className="authentication">
      <Sociallogin />
      <div className="form-container">
        <h3 className="auth-title">registar</h3>
        <form action="">
          <input type="text" placeholder="enter your name" />
          <input type="email" placeholder="enter your email" />
          <input type="password" placeholder="enter your password" />
          <input className="auth-btn" type="submit" value="registar" />
        </form>
        <p className="auth-option">
          already have an account? <Link to="/login">login</Link>
        </p>
      </div>
    </div>
  );
};

export default Registar;
