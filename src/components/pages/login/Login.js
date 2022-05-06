import axios from "axios";
import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase/Firebase.int";
import Sociallogin from "../../socialLogin/SocialLogin";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loading from "../../loading/Loading";
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, PasswordReseterror] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (loading) {
    return <Loading />;
  }

  const userSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    await signInWithEmailAndPassword(email, password);
    await axios
      .post("https://grocary.herokuapp.com/get-token", {
        email,
      })
      .then((res) => {
        const token = res.data.accessToken;
        localStorage.setItem("accessToken", token);
        navigate(from, { replace: true });
      })
      .catch((e) => console.log(e));
    e.target.reset();
  };

  const resetPassword = async () => {
    await sendPasswordResetEmail(userEmail);
    notify();
  };

  const notify = () => toast("Please check your email", { autoClose: 2000 });

  return (
    <div className="authentication">
      <Sociallogin />
      <div className="form-container">
        <h3 className="auth-title">login</h3>
        <form onSubmit={userSignIn} action="">
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            onChange={(e) => setUserEmail(e.target.value)}
          />
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
        <span
          style={{
            fontSize: "1.5rem",
            marginTop: ".5rem",
            textDecoration: "underline",
            cursor: "pointer",
          }}
          onClick={resetPassword}
        >
          forgot password?
        </span>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
