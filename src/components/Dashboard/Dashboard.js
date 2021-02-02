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
import bg from "../../images/bgs/background.png";

// CSS

const DashboardWrap = styled.div`
  padding: 15px;
  max-width: 420px;
  margin: auto;
  height: 100vh;
  background-image: url(${bg});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: 170%;
`;

// x

const calButton = styled.button`
  background: none;
  border: none;
`;

export default function Dashboard() {
  console.log("DOES IT GO TO THIS PAGE?");
  return (
    <DashboardWrap>
      <Link to="/user/calendar">
        {" "}
        <calButton>
          <img src={calendarIcon} />
        </calButton>{" "}
      </Link>
      {/* <Div> */}
      <CurrentDate />
      <DailySuggestions />
      <TheraphySuggestions />
      {/* </Div> */}
      <Navbar selected={"cycle"} />
    </DashboardWrap>
  );
}
