import React, { useState, useEffect } from "react";
import { P, SubHeader, MainHeader } from "../typography";
import { DashboardDiv } from "./TheraphySuggestions";
import phases from "./CurrentDate";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

export default function DailySuggestions(props) {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/api/phases/${props.phaseId}/suggestions/random`
      )
      .then((data) => setQuote(data));
  }, [props]);

  // console.log("data?", quote.data.text);

  return (
    <DashboardDiv>
      <SubHeader modifiers={["purple"]}>Daily suggestions</SubHeader>
      <br></br>
      <P>{quote.data && quote.data.text}</P>
    </DashboardDiv>
  );
}
