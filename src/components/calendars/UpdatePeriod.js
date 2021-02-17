import React, { useState, useEffect } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import { Close } from "../Buttons/Buttons";
import { FormContainer, Header, TopCorner, NumInput } from "../typography";
import topcorner from "../../images/corner-blue.png";

import useCrud from "../../hooks/useCrud";
import Navbar from "../Navbar/Navbar";

export default function UpdatePeriod() {
  const [input, setInput] = useState(28);

  const { items, onUpdate } = useCrud("/cycle");

  useEffect(() => {
    setInput(items?.cycle?.cycle_length);
  }, [items]);

  useEffect(() => {}, [input]);

  const heandleChange = (event) => {
    console.log("days", input);

    setInput(Number(event.target.value));
    onUpdate({ cycle_length: Number(event.target.value) });
  };

  const handleDayChange = (day) => {
    const formattedDay = new Date(day).toISOString();
    onUpdate({ last_period: formattedDay });
    console.log("items", items);
  };

  return (
    <div className="cyclepicker">
      <Link to="/user/dashboard">
        <Close />
      </Link>
      <TopCorner src={topcorner} alt="top-right-corner" />
      <FormContainer>
        <form>
          <Header>Period Length (days)</Header>
          <NumInput
            className="form"
            type="number"
            // min="20"
            // max="40"
            placeholder="enter number of days"
            value={input}
            onChange={(event) => heandleChange(event)}
          />

          <Header margin={"35px auto 20px"}>
            Select a new period start date.
          </Header>

          <DayPickerInput onDayChange={(e) => handleDayChange(e)} />
        </form>
      </FormContainer>
      <Navbar />
    </div>
  );
}
