import axios from "axios";
import React, { useEffect, useState } from "react";
import Manageiteam from "../../manageIteam/ManageIteam";
import "./ManageIteams.css";
import Loading from "../../loading/Loading";
const Manageiteams = () => {
  const [iteams, setIteams] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("https://grocary.herokuapp.com/iteams")
      .then((deta) => {
        setIteams(deta.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);
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
