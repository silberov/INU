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

// CSS

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-content: space-between;
  margin: 25px;
`;

const calButton = styled.button`
  background: none;
  border: none;
`;

export default function Dashboard() {
  console.log("DOES IT GO TO THIS PAGE?");
  return (
    <>
      <Link to="/user/calendar">
        {" "}
        <calButton>
          <img src={calendarIcon} />
        </calButton>{" "}
      </Link>
      <Div>
        <CurrentDate />
        <DailySuggestions />
        <br></br>
        <TheraphySuggestions />
      </Div>
      <Navbar />
    </>
  );
}
