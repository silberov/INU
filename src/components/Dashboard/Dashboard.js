import TheraphySuggestions from "./TheraphySuggestions";
import DailySuggestions from "./DailySuggestions";
import CurrentDate from "./CurrentDate";
import Buttons from "../Buttons/Buttons";
import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styled from "styled-components";

// CSS

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
`;

export default function Dashboard() {
  console.log("DOES IT GO TO THIS PAGE?");
  return (
    <>
      <Link>
        {" "}
        <button>Go to calendar</button>{" "}
      </Link>
      <Div>
        <CurrentDate />
        <DailySuggestions />
        <TheraphySuggestions />
      </Div>
      <Navbar />
    </>
  );
}
