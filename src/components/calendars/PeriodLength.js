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

export default function PeriodLength() {
  const [input, setInput] = useState(28);

  return (
    <div>
      <Link to="/ ">
        <GoBack src={goback} alt="back-arrow" />
      </Link>
      <TopCorner src={topcorner} alt="top-right-corner" />
      <FormContainer>
        <Header color={colors.primary}>
          What is your average cycle length?
          <br />
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
        <Link to="/period">
          <Button modifiers={["period"]}>Next</Button>
        </Link>
      </FormContainer>
    </div>
  );
}
