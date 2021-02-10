import React, { useState, useEffect } from "react";
import { P, SubHeader, MainHeader } from "../typography";
import { DashboardDiv } from "./TheraphySuggestions";
import phases from "./CurrentDate";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
//CSS

export default function DailySuggestions() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/phases/1/suggestions/random`)
      .then((data) => setQuote(data));
  }, []);

  console.log("data?", quote.data.text);

  return (
    <DashboardDiv>
      <SubHeader modifiers={["purple"]}>Daily suggestions</SubHeader>
      <br></br>
      <P>{quote.data.text}</P>

      {/* {quote
        .filter((messages) => messages.phase === phases.id)
        .map((filteredMessage) => (
          <P>{filteredMessage.text}</P>
        ))} */}
    </DashboardDiv>
  );
}
