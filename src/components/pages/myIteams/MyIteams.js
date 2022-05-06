import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/Firebase.int";
import Myiteam from "../../myIteam/MyIteam";
import "./MyIteams.css";
import Loading from "../../loading/Loading";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
const Myiteams = () => {
  const [user] = useAuthState(auth);
  const [iteams, setIteams] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`https://grocary.herokuapp.com/userIteams/${user.email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((d) => {
        setIteams(d?.data);
        setLoading(false);
      })
      .catch((e) => {
        if (e.message.includes(401) || e.message.includes(403)) {
          signOut(auth);
          navigate("/login");
        }
      });
  }, [user]);

  const deleteIteam = (id) => {
    const reaminingIteams = iteams.filter((iteam) => iteam._id !== id);
    setIteams(reaminingIteams);
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="iteams">
        {iteams.map((iteam) => (
          <Myiteam key={iteam._id} iteam={iteam} deleteIteam={deleteIteam} />
        ))}
      </div>
    );
  }
};

export default Myiteams;
