import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";
import Myiteam from "../../myIteam/MyIteam";
import "./MyIteams.css";
const Myiteams = () => {
  const [user] = useAuthState(auth);
  const [iteams, setIteams] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/userIteams/${user.email}`)
      .then((d) => setIteams(d?.data))
      .catch((e) => console.log(e));
  }, [user.email]);
  console.log(iteams);
  return (
    <div className="iteams">
      {iteams.map((iteam) => (
        <Myiteam key={iteam._id} iteam={iteam} />
      ))}
    </div>
  );
};

export default Myiteams;
