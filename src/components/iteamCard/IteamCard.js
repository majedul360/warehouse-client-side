import React from "react";
import "./IteamCard.css";
import { useNavigate } from "react-router-dom";
const Iteamcard = ({ iteam }) => {
  const { _id, img, name, price, quantity, supplierName, desc } = iteam;
  const navigate = useNavigate();

  return (
    <div className="iteam-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{price}</h4>
      <h5>available: {quantity}</h5>
      <h6>supplier: {supplierName}</h6>
      <p className="desc">{desc.slice(0, 200)}</p>
      <button className="btn" onClick={() => navigate(`/details/${_id}`)}>
        update
      </button>
    </div>
  );
};

export default Iteamcard;
