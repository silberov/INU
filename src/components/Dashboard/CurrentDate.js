import { P, MainHeader, SubHeader, Header } from "../typography";
import styled from "styled-components";
import { formatDistance, differenceInCalendarDays } from "date-fns";
import useCrud from "../../hooks/useCrud";
import React, { useState, useEffect } from "react";

// CSS

const DateDiv = styled.div`
  text-align: center;
  margin: 25px 0 45px 0;
`;

export const phases = [
  { id: 1, startday: 1, endday: 6, message: "Period Phase" },
  { id: 2, startday: 7, endday: 14, message: "Follicular Phase" },
  { id: 3, startday: 15, endday: 18, message: "Ovulation Phase" },
  { id: 4, startday: 19, message: "Luteal Phase “PMS”" },
];

function CurrentDate(props) {
  // Current Date Display

  const phases = [
    { id: 1, startday: 1, endday: 6, message: "Period Phase" },
    { id: 2, startday: 7, endday: 14, message: "Follicular Phase" },
    { id: 3, startday: 15, endday: 18, message: "Ovulation Phase" },
    { id: 4, startday: 19, message: "Luteal Phase “PMS”" },
  ];

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

  // Current Day and Phase display

  // props.periodStart === undefined
  // props.periodStart === "123456754"
  const startingDate = new Date(props.periodStart.substring(0, 10));

  console.log("props", props, "newdate", startingDate, "moment");

  // items?.cycle?.last_period
  const distance = differenceInCalendarDays(new Date(), startingDate) + 1; // =1
  // console.log(distance);
  // const dateNumber = +distance.slice(0, 2);

  console.log();
  return (
    <DateDiv>
      <P modifiers={["large"]}>
        {date} {month}
      </P>
      <br></br>
      <MainHeader modifiers={["purple"]} margin={"12px auto"}>
        Day {distance}
      </MainHeader>
      <hr style={{ margin: "15px auto 10px auto ", width: " 50%" }} />

      {phases
        .filter(
          (titlex) => titlex.startday <= distance && titlex.endday >= distance
        )
        .map((filteredTitle) => (
          <P> {filteredTitle.message} </P>
        ))}
    </DateDiv>
  );
}

export default CurrentDate;

