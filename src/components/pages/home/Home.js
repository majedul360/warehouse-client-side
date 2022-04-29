import React from "react";
import Banner from "../../banner/Banner";
import Iteams from "../../iteams/Iteams";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner className="banner" />
      <Iteams className="iteams" />
    </div>
  );
};

export default Home;
