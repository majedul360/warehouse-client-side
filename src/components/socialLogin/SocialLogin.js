import React from "react";
import "./SocialLogin.css";
import auth from "../firebase/Firebase.int";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";

const Sociallogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="social-login">
      <div className="social-login-btn" onClick={() => signInWithGoogle()}>
        <img src="images/google.png" alt="" />
        <span>continue with google</span>
      </div>
      <p>
        <span>or</span>
      </p>
    </div>
  );
};

export default Sociallogin;
