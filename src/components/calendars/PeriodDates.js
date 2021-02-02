import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import { Button } from "../Buttons/Buttons";
import {
  FormContainer,
  P,
  MainHeader,
  Header,
  TopCorner,
  GoBack,
} from "../typography";
import colors from "../../utils/colors";
import topcorner from "../../images/corner-blue.png";
import goback from "../../images/goback.png";
import useCrud from "../../hooks/useCrud";

// import applogo from "../../images/applogo.png";
// import bottompattern from "../../images/bottompattern.png";

export default function PeriodDates() {
  const [selectedDay, setSelectedDay] = useState();

  const handleDayChange = (day) => {
    setSelectedDay(day);
    const formattedDay = new Date(day).toISOString();

    console.log("selected day", day);
    // const response = await fetch("http://localhost:3000/api/cycle")
    //   .then((resp) => resp.json())
    //   .then((data) => {

    //   });
  };

  return (
    <div
      className="cyclepicker"
      style={{ width: "245px", margin: "auto", textAlign: "center" }}
    >
      <Link to="/user/cycle">
        <GoBack src={goback} alt="back-arrow" />
      </Link>
      <TopCorner src={topcorner} alt="top-right-corner" />
      <FormContainer>
        <Header>Select the first day of your last period.</Header>
        <br />
        <DayPickerInput onDayChange={(e) => handleDayChange(e)} />
      </FormContainer>
      <br />
      {/* <Button modifiers={["period"]}>Next</Button> */}
      <Link to="/user/calendar">
        <Button modifiers={["period"]}>Next</Button>
      </Link>
    </div>
  );
}
