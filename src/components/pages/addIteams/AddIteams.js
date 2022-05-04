import axios from "axios";
import React from "react";
import "./AddIteams.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";
const Additeams = () => {
  const [user] = useAuthState(auth);
  const addIteamHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const supplierName = e.target.supplierName.value;
    const img = e.target.img.value;
    const desc = e.target.desc.value;
    const email = user.email;
    const iteam = { name, price, quantity, supplierName, img, desc, email };
    axios
      .post("https://grocary.herokuapp.com/addIteam", iteam)
      .then((data) => {
        e.target.reset();
        alert("iteam added successful");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="add-iteams">
      <form onSubmit={addIteamHandler} action="">
        <input type="text" placeholder="enter name" name="name" />
        <input type="number" placeholder="enter price" name="price" />
        <input type="number" placeholder="enter quantity" name="quantity" />
        <input
          type="text"
          placeholder="enter supplier name"
          name="supplierName"
        />
        <input type="text" placeholder="enter image url" name="img" />
        <textarea name="desc" placeholder="enter description"></textarea>
        <input className="btn" type="submit" value="add iteam" />
      </form>
    </div>
  );
};

export default Additeams;
