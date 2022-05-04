import React from "react";

const Myiteam = ({ iteam }) => {
  const { _id, img, name, price, quantity, supplierName, desc } = iteam;
  return (
    <div className="iteam-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{`${price.includes("$") ? price : `$${price}`}`}</h4>
      <h5>available: {quantity}</h5>
      <h6>supplier: {supplierName}</h6>
      <p className="desc">{desc.slice(0, 200)}</p>
    </div>
  );
};

export default Myiteam;
