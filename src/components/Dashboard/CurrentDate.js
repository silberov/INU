import { P, MainHeader, SubHeader, Header } from "../typography";
import styled from "styled-components";

import useCrud from "../../hooks/useCrud";
import React, { useState, useEffect } from "react";

// CSS

const DateDiv = styled.div`
  text-align: center;
  margin: 25px 0 45px 0;
`;

function CurrentDate(props) {
  // Current Date Display

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

  // // Current Day and Phase display

  // // props.periodStart === undefined
  // // props.periodStart === "123456754"
  // const startingDate = new Date(props.periodStart.substring(0, 10));

  // console.log("props", props, "newdate", startingDate, "moment");

  // const distance = differenceInCalendarDays(new Date(), startingDate) + 1; // =1
  // // console.log(distance);
  // // const dateNumber = +distance.slice(0, 2);

  return (
    <DateDiv>
      <P modifiers={["large"]}>
        {date} {month}
      </P>
      <br></br>
      <MainHeader modifiers={["purple"]} margin={"12px auto"}>
        Day {props.counter}
      </MainHeader>
      <hr style={{ margin: "15px auto 10px auto ", width: " 50%" }} />

      <P>{props.phaseTitle}</P>
    </DateDiv>
  );
}

export default CurrentDate;
