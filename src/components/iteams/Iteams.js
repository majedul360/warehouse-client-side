import axios from "axios";
import React, { useEffect, useState } from "react";
import Iteamcard from "../iteamCard/IteamCard";
import Sectiontitle from "../sectionTitle/SectionTitle";
import "./Iteams.css";
import { useNavigate } from "react-router-dom";
const Iteams = () => {
  const navigate = useNavigate();
  const [iteams, setIteams] = useState([]);
  useEffect(() => {
    axios
      .get("https://grocary.herokuapp.com/iteams")
      .then((deta) => {
        setIteams(deta.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <Sectiontitle>our iteams</Sectiontitle>
      <div className="iteams">
        {iteams.slice(0, 6).map((iteam) => (
          <Iteamcard key={iteam._id} iteam={iteam} />
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button className="btn" onClick={() => navigate("/manage-iteams")}>
          manage iteams
        </button>
      </div>
    </div>
  );
};

export default Iteams;
