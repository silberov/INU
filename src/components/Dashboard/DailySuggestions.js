import React, { useState, useEffect } from "react";
import { P, SubHeader, MainHeader } from "../typography";
import { DashboardDiv } from "./TheraphySuggestions";
import styled from "styled-components";

//CSS

export default function DailySuggestions() {
  const [quote, setQuote] = useState([]);

  useEffect(() => {
    fetch("https://quoteai.p.rapidapi.com/ai-quotes/0", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "quoteai.p.rapidapi.com",
        "x-rapidapi-key": "881aac81e1msh5b35cf46c5be8fcp1aafdbjsnec347adc64a7",
      },
    })
      .then((response) => {
        console.log("what", response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <DashboardDiv>
      <SubHeader margin={"0 auto 10px 0"} modifiers={["purple"]}>
        Daily suggestions
      </SubHeader>
      <P>
        During this week, your ability to rotate three dimensional images
        increases.This will come in handy when you’re navigating a new route,
        parking in a tight spot, or building that IKEA furniture.
      </P>
    </DashboardDiv>
  );
}
