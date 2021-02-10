import React, { useEffect, useState } from "react";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import { Button } from "../Buttons/Buttons";
import { FormContainer, Header, TopCorner, GoBack } from "../typography";
import colors from "../../utils/colors";
import topcorner from "../../images/corner-blue.png";
import goback from "../../images/goback.png";

import useCrud from "../../hooks/useCrud";
var moment = require("moment");

export default function PeriodLength() {
  const [input, setInput] = useState(28);

  //const { items, onAdd, onDelete, onUpdate } = useCrud("/phases/");
  //http://localhost:3000/api/cycle/phases/1
  const { onUpdate, items } = useCrud("/cycle");

  useEffect(() => {
    const data = items;
    console.log("data", data);
    setInput(data?.cycle?.cycle_length);
  }, [items]);

  const heandleChange = (event) => {
    console.log("days", input);
    setInput(Number(event.target.value));
    // onAdd({...whatever})
  };

  return (
    <div style={{ margin: " 200px auto" }}>
      <Link to="/">
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
              // min="20"
              // max="40"
              placeholder="enter number of days"
              value={input}
              onChange={(event) => heandleChange(event)}
            />
          </form>
        </Header>
        <Link to="/user/period">
          <Button
            modifiers={["period"]}
            onClick={() => onUpdate({ cycle_length: input })}
          >
            Next
          </Button>
        </Link>
      </FormContainer>
    </div>
  );
}