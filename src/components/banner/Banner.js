import React from "react";
// import Swiper core and required modules
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Banner.css";
import Btn from "../btn/Btn";
const Banner = () => {
  return (
    <div className="banner">
      <Swiper
        // install Swiper modules
        modules={[Navigation]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="slide slide-1">
          <div className="content">
            <p style={{ fontSize: "2.5rem" }}>
              natural health care ingredients
            </p>
            <h1>grocery shopping</h1>
            <p style={{ fontSize: "3rem" }}>save upto 30% off</p>
            <Btn className="btn">shop now</Btn>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide slide-2">
          <div className="content">
            <p style={{ fontSize: "3.5rem" }}>groca</p>
            <h1>vegetable 100% </h1>
            <h1>organic</h1>
            <p style={{ fontSize: "3rem" }}>save upto 50% off</p>
            <Btn className="btn">shop now</Btn>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slide slide-3">
          <div className="content">
            <img src="images/slider-icon.png" alt="" />
            <p style={{ fontSize: "2.5rem" }}>100% healthy & affordable</p>
            <h1>organic</h1>
            <h1>vegetables</h1>
            <p style={{ fontSize: "3rem" }}>small changes big differemce</p>
            <Btn>shop now</Btn>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
