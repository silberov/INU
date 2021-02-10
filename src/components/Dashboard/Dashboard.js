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
import { useState, useEffect } from "react";
import useCrud from "../../hooks/useCrud";

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
  const { items, loading } = useCrud("/cycle");
  return (
    <div>
      {loading ? (
        <h1>loading</h1>
      ) : (
        <DashboardWrap>
          <Link to="/user/calendar">
            {" "}
            <calButton>
              <img src={calendarIcon} />
            </calButton>{" "}
          </Link>
          {/* <Div> */}
          <CurrentDate periodStart={items?.cycle?.last_period} />
          <DailySuggestions />
          <TheraphySuggestions />
          {/* </Div> */}
          <Navbar selected={"cycle"} />
        </DashboardWrap>
      )}{" "}
    </div>
  );
}
