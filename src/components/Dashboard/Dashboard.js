import TheraphySuggestions from "./TheraphySuggestions";
import DailySuggestions from "./DailySuggestions";
import CurrentDate from "./CurrentDate";
import { CalButton } from "../Buttons/Buttons";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

import useCrud from "../../hooks/useCrud";
import { differenceInCalendarDays } from "date-fns";
import { DashboardWrap } from "../containers";
import axios from "axios";

export default function Dashboard() {
  const { items, loading } = useCrud("/cycle");
  const [suggestion, setSuggestion] = useState("");

  const periodStart = items.cycle?.last_period || new Date().toString();
  const startingDate = new Date(periodStart.substring(0, 10));
  const distance = differenceInCalendarDays(new Date(), startingDate) + 1; // =1
  const currentPhase = () => {
    if (1 <= distance && 6 >= distance) {
      return 1;
    } else if (7 <= distance && 14 >= distance) {
      return 3;
    } else if (15 <= distance && 18 >= distance) {
      return 4;
    } else return 5;
  };

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/phases/${currentPhase()}/suggestions/random`
      )
      .then((data) => setSuggestion(data));
  }, [periodStart]);

  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <DashboardWrap>
          <Link to="/user/calendar">
            <CalButton />
          </Link>
          <CurrentDate
            counter={distance}
            phaseTitle={suggestion.data.phase.name}
          />
          <DailySuggestions suggestion={suggestion.data.text} />
          <TheraphySuggestions />
          <Navbar selected={"cycle"} />
        </DashboardWrap>
      )}{" "}
    </div>
  );
}
