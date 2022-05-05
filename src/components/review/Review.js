import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import SectionTitle from "../sectionTitle/SectionTitle";
import "./Review.css";
const Review = () => {
  return (
    <div className="review">
      <SectionTitle>our client say</SectionTitle>
      <Swiper
        modules={[Navigation]}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="slider">
          {" "}
          <div className="slide">
            <div className="client">
              <img src="images/pic-3.png" alt="" />
              <div className="content">
                <h3>bob</h3>
                <p>England</p>
              </div>
            </div>
            <p>
              What Fresh Market does, they do very well. Hamburger is ground
              daily from roasts and steaks and they’ll grind a roast to your
              specifications if you’d rather. The coffee rivals those of
              excellent specialty coffee shops. It’s the sort of place that
              makes shopping fun. ---Bob & Ellie Tupper, authors, “Drinking In
              the Culture, Tuppers’ Guide to Exploring Great Beers in Europe
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <div className="slide">
            <div className="client">
              <img src="images/pic-1.png" alt="" />
              <div className="content">
                <h3>jhon</h3>
                <p>Italian</p>
              </div>
            </div>
            <p>
              Great grocery store! If you are into gourmet foods, organic or
              anything in between, they have it. The meats are top notch and
              such a variety of produce. Wandering through this store will make
              you think twice about eating out all the time and make use of your
              grill.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider">
          {" "}
          <div className="slide">
            <div className="client">
              <img src="images/pic-2.png" alt="" />
              <div className="content">
                <h3>jenny</h3>
                <p>American</p>
              </div>
            </div>
            <p>
              Fresh Market is a wonderful upscale addition to Nags Head’s
              grocery options. It carries a somewhat eclectic mix of meats,
              fish, produce and coffees – more or less what you might find in a
              traditional European market. You won’t find many frozen options or
              huge choices of plastic bags, but a well-stocked Food Lion in the
              same shopping center supplies mundane needs.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Review;
