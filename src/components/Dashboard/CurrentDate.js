import React from "react";
import { P, MainHeader, SubHeader, Header } from "../typography";
import styled from "styled-components";
import { useState, useEffect } from "react";

// CSS

const DateDiv = styled.div`
  text-align: center;
  margin: 25px 0 45px 0;
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
      <P modifiers={["large"]}>
        {date} {month}
      </P>
      <hr style={{ margin: "15px auto 10px auto ", width: " 50%" }} />
      <MainHeader modifiers={["purple"]} margin={"12px auto"}>
        Day X
      </MainHeader>
      <P>Beginning of your period</P>
    </DateDiv>
  );
}

export default CurrentDate;
