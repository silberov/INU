import React, { useState } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import Button from "../Buttons/Buttons";
import { FormContainer, P, MainHeader, Header } from "../typography";
import colors from "../../utils/colors";
// import applogo from "../../images/applogo.png";
// import bottompattern from "../../images/bottompattern.png";

export default function PeriodDates() {
  const [selectedDay, setSelectedDay] = useState();
  const [input, setInput] = useState(28);

  const handleDayChange = (day) => {
    setSelectedDay(day);
    console.log("selected day", day);
  };

  return (
    <FormContainer>
      <div>
        <div>
          <Header color={colors.primary}>
            Select your cycle length. The average is 28 days.
            <br />
            <form>
              <input
                className="form"
                type="number"
                min="20"
                max="40"
                placeholder="enter number of days"
                value={input}
                onChange={(event) => {
                  console.log("days", input);
                  setInput(event.target.value);
                }}
              />
            </form>
          </Header>
        </div>
        <div>
          <br />
          <Header>Select the first day of your last period.</Header>
          {selectedDay && <P>{selectedDay.toLocaleDateString()}</P>}
          {!selectedDay && <P>dd/mm/yyyy</P>}
          <P>
            <DayPickerInput onDayChange={handleDayChange} />
          </P>
        </div>
        <br />
        <Link to="/calendar">
          <Button>Next</Button>
        </Link>
      </div>
    </FormContainer>
  );
}
