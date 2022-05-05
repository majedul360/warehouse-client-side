import React from "react";
import Banner from "../../banner/Banner";
import Footer from "../../footer/Footer";
import Iteams from "../../iteams/Iteams";
import Review from "../../review/Review";
import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <Banner className="banner" />
      <Iteams className="iteams" />
      <Review className="home" />
      <Footer />
    </div>
  );
};

export default Home;
