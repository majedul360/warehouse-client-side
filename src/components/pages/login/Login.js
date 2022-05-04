import React from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/Firebase.int";
import Sociallogin from "../../socialLogin/SocialLogin";
import "./Login.css";
const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, PasswordReseterror] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  const userSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    await sendPasswordResetEmail(email);
    e.target.reset();
  };
  return (
    <div className="authentication">
      <Sociallogin />
      <div className="form-container">
        <h3 className="auth-title">login</h3>
        <form onSubmit={userSignIn} action="">
          <input type="email" placeholder="enter your email" name="email" />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
          />
          <p style={{ color: "red", fontSize: "1.7rem", textAlign: "left" }}>
            {error?.message}
          </p>
          <input className="auth-btn" type="submit" value="login" />
        </form>
        <p className="auth-option">
          new to groca? <Link to="/registar">create an account</Link>
        </p>
        <p
          style={{
            fontSize: "1.5rem",
            marginTop: ".5rem",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          forgot password?
        </p>
      </div>
    </div>
  );
};

export default Login;
