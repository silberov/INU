import React, { useState, useEffect } from "react";
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
import cross from "../../images/cross.png";
import useCrud from "../../hooks/useCrud";
import Navbar from "../Navbar/Navbar";

// import applogo from "../../images/applogo.png";
// import bottompattern from "../../images/bottompattern.png";

export default function UpdatePeriod() {
  const [selectedDay, setSelectedDay] = useState();
  const [input, setInput] = useState(28);

  //const { items, onAdd, onDelete, onUpdate } = useCrud("/phases/");
  //http://localhost:3000/api/cycle/phases/1
  //   const { onUpdate } = useCrud("/cycle");

  useEffect(() => {
    // fetch(`http://localhost:3000/api/cycle`, "PUT", { cycle_length: input })
    //   .then((updatedItem) => {
    //         if (item.id === updatedItem.id) {
    //           return updatedItem;
    //         }
    //         return item;
    //       })
    //     );
    //   })
    //   .catch((err) => setError(err.message));
  }, [input]);

  const heandleChange = (event) => {
    console.log("days", input);
    setInput(Number(event.target.value));
    // onAdd({...whatever})
  };

  const handleDayChange = (day) => {
    setSelectedDay(day);
    const formattedDay = new Date(day).toISOString();

    // const response = await fetch("http://localhost:3000/api/cycle")
    //   .then((resp) => resp.json())
    //   .then((data) => {

    //   });
  };

  return (
    <div>
      <div className="cyclepicker">
        <Link to="/user/dashboard">
          <GoBack src={cross} alt="cross" />
        </Link>
        <TopCorner src={topcorner} alt="top-right-corner" />

        <FormContainer>
          <form>
            <Header>Period Length (days)</Header>
            <br />
            <input
              className="form"
              type="number"
              // min="20"
              // max="40"
              placeholder="enter number of days"
              value={input}
              onChange={(event) => heandleChange(event)}
            />
          </form>
          <br /> <br />
          <Header>Select a new period start date.</Header>
          <br />
          <DayPickerInput onDayChange={(e) => handleDayChange(e)} />
        </FormContainer>
        <Navbar />
      </div>
    </div>
  );
}
