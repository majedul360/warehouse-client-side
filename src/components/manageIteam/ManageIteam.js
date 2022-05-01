import React from "react";
import { useNavigate } from "react-router-dom";

const Manageiteam = ({ iteam }) => {
  const { _id, img, name, price, quantity, supplierName, desc } = iteam;
  const navigate = useNavigate();
  return (
    <div className="iteam-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{`${price.includes("$") ? price : `$${price}`}`}</h4>
      <h5>available: {quantity}</h5>
      <h6>supplier: {supplierName}</h6>
      <p className="desc">{desc.slice(0, 200)}</p>
      <button onClick={() => navigate("/addIteams")} className="btn">
        add
      </button>
      <button
        className="btn"
        style={{ marginLeft: "4rem", background: "#e71603" }}
      >
        delete
      </button>
    </div>
  );
};

export default Manageiteam;
