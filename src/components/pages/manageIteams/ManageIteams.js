import axios from "axios";
import React, { useEffect, useState } from "react";
import Manageiteam from "../../manageIteam/ManageIteam";
import "./ManageIteams.css";
const Manageiteams = () => {
  const [iteams, setIteams] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/iteams")
      .then((deta) => setIteams(deta.data))
      .catch((error) => console.log(error));
  }, []);
  const deletedIteam = (id) => {
    const reaminingIteams = iteams.filter((iteam) => iteam._id !== id);
    setIteams(reaminingIteams);
  };
  return (
    <div className="iteams">
      {iteams.map((iteam) => (
        <Manageiteam
          key={iteam._id}
          iteam={iteam}
          deletedIteam={deletedIteam}
        />
      ))}
    </div>
  );
};

export default Manageiteams;
