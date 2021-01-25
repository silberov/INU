import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import { ButtonPeriod } from "../Buttons/Buttons";
import { FormContainer, P, MainHeader, Header, TopCorner, GoBack } from "../typography";
import colors from "../../utils/colors";
import topcorner from "../../images/corner-blue.png";
import goback from "../../images/goback.png";


// import applogo from "../../images/applogo.png";
// import bottompattern from "../../images/bottompattern.png";

export default function PeriodDates() {
  const [selectedDay, setSelectedDay] = useState();

  const handleDayChange = (day) => {
    setSelectedDay(day);
    console.log("selected day", day);
  };

  return (
      <div>
          <Link to="/cycle">
          <GoBack src={goback} alt="back-arrow" />
          </Link>      
          <TopCorner src={topcorner} alt="top-right-corner" />
      <FormContainer>
          <Header>Select the first day of your last period.</Header>
          {/* {selectedDay && <P>{selectedDay.toLocaleDateString()}</P>} */}
          <br />
          {/* {!selectedDay} */}
          <P>
            <DayPickerInput onDayChange={handleDayChange} />
          </P>
          </FormContainer>
        <br />
        <Link to="/calendar">
          <ButtonPeriod>Next</ButtonPeriod>
        </Link>
    </div>
  );
}
