import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const { id } = useParams();
  const [iteam, setIteam] = useState({});
  const [delivar, setDelivar] = useState(0);
  const [number, setNumber] = useState(0);
  const { _id, name, img, price, supplierName, desc, quantity } = iteam;
  const finalQuantity =
    parseInt(quantity) - parseInt(delivar) + parseInt(number);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/${id}`)
      .then((d) => {
        setIteam(d.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  const delivarQuantity = () => {
    const quan = delivar + 1;
    setDelivar(quan);
    const newQuantity = parseInt(quantity) - quan;
    const iteamObj = {
      quantity: newQuantity,
    };
    axios
      .put(`http://localhost:5000/update/${_id}`, iteamObj)
      .then((data) => {})
      .catch((error) => console.log(error));
  };

  const formHandler = (e) => {
    e.preventDefault();
    const number = e.target.number.value;
    setNumber(number);
    const newQuantity = parseInt(quantity) + parseInt(number);
    const iteamObj = { quantity: newQuantity };
    axios
      .put(`http://localhost:5000/update/${_id}`, iteamObj)
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
    </div>
  );
};

export default Details;
