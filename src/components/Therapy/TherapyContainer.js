import styled from "styled-components";



import Therapy from "./Therapy";
import { useEffect, useState } from "react";

const TherapyWraper = styled.div`
  padding: 27px;
  text-align: left;
`;

function TherapyContainer({therapyData, onTherapy}) {
  //console.log(onTherapy, therapyData)
 // const [therapyData, setTherapyData] = useState([]);
  const [loading, setLoading] = useState(false);

  //console.log("therapyData", therapyData);
  return (
    <TherapyWraper>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        therapyData.map((block, index) => <Therapy key={index} quarter={block} onTherapy={onTherapy} />)
      )}
    </TherapyWraper>
  );
}

export default TherapyContainer;
