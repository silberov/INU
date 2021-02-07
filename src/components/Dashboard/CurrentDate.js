import React from "react";
import { P, MainHeader, SubHeader } from "../typography";
import styled from "styled-components";
import { formatDistance } from "date-fns";

// CSS

const DateDiv = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

export const phases = [
  { id: 1, day: 1, message: "Beggining of your period" },
  { id: 2, day: 7, message: "Follicular Phase" },
  { id: 3, day: 15, message: "Ovulation Phase" },
  { id: 4, day: 19, message: "Luteal Phase “PMS”" },
];

function CurrentDate() {
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

  // Current Day and Phase display

  const startingDate = new Date(2021, 0, 23);

  const distance = formatDistance(startingDate, new Date(), {
    addSuffix: false,
  });

  const dateNumber = +distance.slice(0, 1);

  return (
    <DateDiv>
      <P>
        {date} {month}
      </P>
      <br></br>
      <SubHeader> Tag {dateNumber} </SubHeader>

      {phases
        .filter((title) => title.day === distance)
        .map((filteredTitle) => (
          <P>{filteredTitle.message}</P>
        ))}
    </DateDiv>
  );
}

export default CurrentDate;
