import axios from "axios";
import React from "react";

const Myiteam = ({ iteam, deleteIteam }) => {
  const { _id, img, name, price, quantity, supplierName, desc } = iteam;
  const deleteBtn = (id) => {
    const permission = window.confirm("Are You Sure?");
    if (permission) {
      deleteIteam(id);
      axios
        .delete(`https://warehouse-3snt.onrender.com/iteam/${id}`)
        .then((data) => console.log(data))
        .catch((e) => console.log(e));
    }
  };
  return (
    <div className="iteam-card">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <h4>{`${price.includes("$") ? price : `$${price}`}`}</h4>
      <h5>available: {quantity}</h5>
      <h6>supplier: {supplierName}</h6>
      <p className="desc">{desc.slice(0, 200)}</p>
      <button className="btn" onClick={() => deleteBtn(_id)}>
        {" "}
        delete
      </button>
    </div>
  );
};

export default Myiteam;
