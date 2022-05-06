import axios from "axios";
import React, { useEffect, useState } from "react";
import Iteamcard from "../iteamCard/IteamCard";
import Sectiontitle from "../sectionTitle/SectionTitle";
import "./Iteams.css";
import { useNavigate } from "react-router-dom";
import GetIteams from "../customHooks/CustomHooks";
const Iteams = () => {
  const navigate = useNavigate();

  const { iteams } = GetIteams();

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
