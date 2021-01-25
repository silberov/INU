import React from "react";
import { P, MainHeader, SubHeader } from "../typography";
import styled from "styled-components";
import { useState, useEffect } from "react";

// CSS

const DateDiv = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

function CurrentDate() {
  const [day, setDay] = useState();

  const d = new Date();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const month = months[d.getMonth()];
  const date = d.getDate();

  return (
    <DateDiv>
      <P>
        {date} {month}
      </P>
      <br></br>
      <SubHeader>Day X</SubHeader>
      <P>Beginning of your period</P>
    </DateDiv>
  );
}

export default CurrentDate;
