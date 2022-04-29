import axios from "axios";
import React, { useEffect, useState } from "react";
import Iteamcard from "../iteamCard/IteamCard";
import "./Iteams.css";
const Iteams = () => {
  const [iteams, setIteams] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/iteams")
      .then((deta) => setIteams(deta.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="iteams">
      {iteams.slice(0, 6).map((iteam) => (
        <Iteamcard key={iteam._id} iteam={iteam} />
      ))}
    </div>
  );
};

export default Iteams;
