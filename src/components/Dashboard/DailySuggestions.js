import React, { useState, useEffect } from "react";
import { P, SubHeader, MainHeader } from "../typography";
import { DashboardDiv } from "./TheraphySuggestions";
import styled from "styled-components";
import phases from "./CurrentDate";
//CSS

export default function DailySuggestions() {
  const [quote, setQuote] = useState([]);

  // useEffect(() => {
  //   fetch("https://my.api.mockaroo.com/inu_daily.json?key=e1692940")
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
          <P>{filteredMessage.Suggestion}</P>
        ))}
    </DashboardDiv>
  );
}
