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
        <SwiperSlide className="slide slide-1"></SwiperSlide>
        <SwiperSlide className="slide slide-2"></SwiperSlide>
        <SwiperSlide className="slide slide-3">
          <div className="content">
            <img src="images/slider-icon.png" alt="" />
            <p>100% healthy & affordable</p>
            <h1>organic</h1>
            <h1>vegetables</h1>
            <p>small changes big differemce</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
