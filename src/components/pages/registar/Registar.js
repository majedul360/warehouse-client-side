import { async } from "@firebase/util";
import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase/Firebase.int";
import Sociallogin from "../../socialLogin/SocialLogin";
import "./Registar.css";
const Registar = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile] = useUpdateProfile(auth);

  const createUser = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName: name });
    e.target.reset();
  };

  return (
    <div className="authentication">
      <Sociallogin />
      <div className="form-container">
        <h3 className="auth-title">registar</h3>
        <form onSubmit={createUser} action="">
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            required
          />
          <input
            type="email"
            placeholder="enter your email"
            name="email"
            required
          />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            required
          />
          <p style={{ color: "red", fontSize: "1.7rem", textAlign: "left" }}>
            {error?.message}
          </p>
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
