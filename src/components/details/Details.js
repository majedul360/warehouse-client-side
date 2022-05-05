import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [iteam, setIteam] = useState({});
  const [delivar, setDelivar] = useState(0);
  const [number, setNumber] = useState(0);
  const { _id, name, img, price, supplierName, desc, quantity } = iteam;
  let finalQuantity = parseInt(quantity) + parseInt(number);
  if (quantity > 0) {
    finalQuantity = finalQuantity - parseInt(delivar);
  }

  useEffect(() => {
    axios
      .get(`https://grocary.herokuapp.com/${id}`)
      .then((d) => {
        setIteam(d.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const delivarQuantity = () => {
    const quan = delivar + 1;
    setDelivar(quan);
    let newQuantity;
    if (parseInt(quantity) > 0) {
      newQuantity = parseInt(quantity) - parseInt(quan);
    } else {
      return;
    }
    const iteamObj = {
      quantity: newQuantity,
    };
    axios
      .put(`https://grocary.herokuapp.com/update/${_id}`, iteamObj)
      .then((data) => {})
      .catch((error) => console.log(error));
  };

  const formHandler = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    setNumber(number);
    const newQuantity = parseInt(quantity) + parseInt(number);
    const newIteam = { quantity: newQuantity };
    axios
      .put(`https://grocary.herokuapp.com/update/${_id}`, newIteam)
      .then((data) => e.target.reset())
      .catch((error) => console.log(error));
  };

  return (
    <div className="details">
      <div className="box-container">
        <div className="box">
          <img src={img} alt="" />
          <div className="content">
            <h3>{name}</h3>
            <h4>{price}</h4>
            <h5>available: {isNaN(finalQuantity) ? "" : finalQuantity}</h5>
            <h6>supplier: {supplierName}</h6>
          </div>
        </div>
        <p className="desc">{desc}</p>
        <div className="btn-container">
          <button onClick={() => delivarQuantity(_id)} className="btn">
            deliver
          </button>
        </div>
      </div>

      <form onSubmit={formHandler} action="">
        <input
          className="input"
          name="number"
          type="number"
          placeholder="enter your quantity"
        />
        <div className="btn-container">
          <input className="btn" type="submit" value="add quantity" />
        </div>
      </form>
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <button className="btn" onClick={() => navigate("/manage-iteams")}>
          manage iteams
        </button>
      </div>
    </div>
  );
};

export default Details;
