import axios from "axios";
import { useEffect, useState } from "react";

const GetIteams = () => {
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

  return { iteams, setIteams, loading };
};

export default GetIteams;
