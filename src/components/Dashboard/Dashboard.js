import TheraphySuggestions from "./TheraphySuggestions";
import DailySuggestions from "./DailySuggestions";
import CurrentDate from "./CurrentDate";
import { CalButton } from "../Buttons/Buttons";
import React from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import useCrud from "../../hooks/useCrud";
import { differenceInCalendarDays } from "date-fns";
import { DashboardWrap } from "../containers";

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
  const startingDate = new Date(periodStart.substring(0, 10));
  const distance = differenceInCalendarDays(new Date(), startingDate) + 1; // =1
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
            <CalButton />
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
