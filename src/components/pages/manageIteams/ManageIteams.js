import axios from "axios";
import React, { useEffect, useState } from "react";
import Manageiteam from "../../manageIteam/ManageIteam";
import "./ManageIteams.css";
import Loading from "../../loading/Loading";
import GetIteams from "../../customHooks/CustomHooks";
const Manageiteams = () => {
  const { iteams, setIteams, loading } = GetIteams();
  const deletedIteam = (id) => {
    const reaminingIteams = iteams.filter((iteam) => iteam._id !== id);
    setIteams(reaminingIteams);
  };
  if (loading) {
    return <Loading />;
  } else {
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
  }
};

export default Manageiteams;
