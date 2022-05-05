import React from "react";
import "./Discount.css";
import SectionTitle from "../sectionTitle/SectionTitle";
import Btn from "../btn/Btn";
const Discount = () => {
  return (
    <div className="discount">
      <div className="content">
        <h3>Special Discount For All</h3>
        <h3>Grocery Products</h3>
        <p>
          The best thing about online shopping is you can buy anything from
          apparel to automotive products, and not to forget groceries as well.
          No time to visit a supermarket to complete your grocery errand. Fret
          no more. If it’s a vegetables’ shopping or you wish to buy personal
          care products, isn’t the best choice to shop all your grocery list
          from the comfort of your home, while saving big using grocery offers?
        </p>
        <Btn>buy now</Btn>
      </div>
    </div>
  );
};

export default Discount;
