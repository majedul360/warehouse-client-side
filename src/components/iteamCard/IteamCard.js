import React from "react";
import "./IteamCard.css";
import Btn from "../btn/Btn";
const Iteamcard = ({ iteam }) => {
  const { img, name, price, quantity, supplierName, desc } = iteam;
  return (
    <div className="iteam-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <h5>available: {quantity}</h5>
      <h6>supplier: {supplierName}</h6>
      <p className="desc">{desc.slice(0, 200)}</p>
      <Btn>update</Btn>
    </div>
  );
};

export default Iteamcard;
