import React from "react";
import "./Subscribe.css";
const Subscribe = () => {
  return (
    <div className="subscribe">
      <h3>Subscribe to our Newsletter</h3>
      <form>
        <input type="email" placeholder="enter your email" />
        <input className="submit-btn" type="submit" value="submit" />
      </form>
    </div>
  );
};

export default Subscribe;
