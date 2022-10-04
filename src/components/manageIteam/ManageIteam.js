import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

const Manageiteam = ({ iteam, deletedIteam }) => {
  const { _id, img, name, price, quantity, supplierName, desc } = iteam;
  const navigate = useNavigate();

  const deleteBtn = (id) => {
    const permission = window.confirm("Are You Sure?");
    if (permission) {
      deletedIteam(id);
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
      <button onClick={() => navigate("/addIteams")} className="btn">
        add
      </button>
      <button
        onClick={() => deleteBtn(_id)}
        className="btn"
        style={{ marginLeft: "4rem", background: "#e71603" }}
      >
        delete
      </button>
    </div>
  );
};

export default Manageiteam;
