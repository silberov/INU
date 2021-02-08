import styled from "styled-components";

import Therapy from "./Therapy";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";

const TherapyWraper = styled.div`
  padding: 27px;
  text-align: left;
  max-width: 320px;
  margin: auto;
`;

function TherapyContainer({ therapyData, onTherapy }) {
  //console.log(onTherapy, therapyData)
  // const [therapyData, setTherapyData] = useState([]);
  const [loading, setLoading] = useState(false);

  //console.log("therapyData", therapyData);
  return (
    <TherapyWraper>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        therapyData.map((block, index) => (
          <Therapy key={index} quarter={block} onTherapy={onTherapy} />
        ))
      )}
      <Navbar selected={"selfcare"} />
    </TherapyWraper>
  );
}

export default TherapyContainer;
