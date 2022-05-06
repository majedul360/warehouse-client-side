import React from "react";
import Banner from "../../banner/Banner";
import GetIteams from "../../customHooks/CustomHooks";
import Discount from "../../discount/Discount";
import Footer from "../../footer/Footer";
import Iteams from "../../iteams/Iteams";
import Loading from "../../loading/Loading";
import Review from "../../review/Review";
import Subscribe from "../../subscribe/Subscribe";
import "./Home.css";
const Home = () => {
  const { loading } = GetIteams();
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="home">
      <Banner className="banner" />
      <Iteams className="iteams" />
      <Discount className="discount" />
      <Review className="home" />
      <Subscribe className="subscribe" />
      <Footer />
    </div>
  );
};

export default Home;
