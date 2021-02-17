import React from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import { Button, GoBack } from "../Buttons/Buttons";
import { FormContainer, Header, TopCorner } from "../typography";

import topcorner from "../../images/corner-blue.png";
import useCrud from "../../hooks/useCrud";

// import applogo from "../../images/applogo.png";
// import bottompattern from "../../images/bottompattern.png";

export default function PeriodDates() {
  // const [selectedDay, setSelectedDay] = useState();
  const { items, onUpdate } = useCrud("/cycle");
  let formattedDay = new Date().toISOString();
  const data = items;
  console.log(data);

  const handleDayChange = (day) => {
    // setSelectedDay(day);
    formattedDay = new Date(day).toISOString();
    onUpdate({ last_period: formattedDay });

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
        <GoBack />
      </Link>
      <TopCorner src={topcorner} alt="top-right-corner" />
      <FormContainer>
        <Header margin={"0 auto 28px auto"}>When was your last period?</Header>

        <DayPickerInput onDayChange={(e) => handleDayChange(e)} />
      </FormContainer>
      <Link to="/user/calendar">
        <Button mar>Next</Button>
      </Link>
    </div>
  );
}
