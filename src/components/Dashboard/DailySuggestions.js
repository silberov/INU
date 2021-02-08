import React, { useState, useEffect } from "react";
import { P, SubHeader, MainHeader } from "../typography";
import { DashboardDiv } from "./TheraphySuggestions";
import styled from "styled-components";
import phases from "./CurrentDate";
const API_URL = process.env.REACT_APP_API_URL;
//CSS

export default function DailySuggestions() {
  const [quote, setQuote] = useState([]);

  // useEffect(() => {
  //   fetch(`${API_URL}//:phaseId/suggestions/:suggestionId`)
  //     .then((response) => response.json())
  //     .then((data) => setQuote(data));
  // }, []);

  console.log("data?", quote);

  return (
    <DashboardDiv>
      <SubHeader modifiers={["purple"]}>Daily suggestions</SubHeader>

      {quote
        .filter((messages) => messages.phase === phases.id)
        .map((filteredMessage) => (
          <P>{filteredMessage.text}</P>
        ))}
    </DashboardDiv>
  );
}
