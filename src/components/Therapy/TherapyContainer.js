import styled from "styled-components";
import colors from "../../utils/colors";
import { P, SubHeader } from "../typography";
import Button, { Moon } from "../Buttons/Buttons";
import Therapy from "./Therapy";
import { useEffect, useState } from "react";
import data from "../../Data/TherapyData.json";

const TherapyWraper = styled.div`
  padding: 27px;
  text-align: left;
`;

function TherapyContainer() {
  const [therapyData, setTherapyData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTherapyData(data.files);
    setLoading(false);
  }, []);
  console.log("therapyData", therapyData);
  return (
    <TherapyWraper>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        therapyData.map((block) => <Therapy quarter={block} />)
      )}
    </TherapyWraper>
  );
}

export default TherapyContainer;
