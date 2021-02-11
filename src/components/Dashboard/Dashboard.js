import TheraphySuggestions from "./TheraphySuggestions";
import DailySuggestions from "./DailySuggestions";
import CurrentDate from "./CurrentDate";
import Buttons from "../Buttons/Buttons";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";
import calendarIcon from "../Dashboard/calendar.png";
import "./Dashboard.css";

import { useState, useEffect } from "react";
import useCrud from "../../hooks/useCrud";
import { formatDistance, differenceInCalendarDays } from "date-fns";
import { DashboardWrap } from "../containers";

// CSS

// x

const calButton = styled.button`
  background: none;
  border: none;
`;

export const phases = [
  { id: 1, startday: 1, endday: 6, message: "Period Phase" },
  { id: 3, startday: 7, endday: 14, message: "Follicular Phase" },
  { id: 4, startday: 15, endday: 18, message: "Ovulation Phase" },
  { id: 5, startday: 19, endday: 35, message: "Luteal Phase “PMS”" },
];

// DailySuggestion
export default function Dashboard() {
  const { items, loading } = useCrud("/cycle");

  const periodStart = items.cycle?.last_period || new Date().toString();

  console.log("load", loading);

  const startingDate = new Date(periodStart.substring(0, 10));

  console.log("start period", startingDate);

  const distance = differenceInCalendarDays(new Date(), startingDate) + 1; // =1

  console.log(distance);

  const filterMessage = phases
    .filter(
      (titlex) => titlex.startday <= distance && titlex.endday >= distance
    )
    .map((filteredTitle) => filteredTitle.message);

  const filteredId = phases
    .filter(
      (titlex) => titlex.startday <= distance && titlex.endday >= distance
    )
    .map((filteredId) => filteredId.id);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <DashboardWrap>
          <Link to="/user/calendar">
            {" "}
            <calButton>
              <img src={calendarIcon} />
            </calButton>{" "}
          </Link>
          <CurrentDate counter={distance} phaseTitle={filterMessage} />
          <DailySuggestions phaseId={filteredId} />
          <TheraphySuggestions />
          <Navbar selected={"cycle"} />
        </DashboardWrap>
      )}{" "}
    </div>
  );
}
