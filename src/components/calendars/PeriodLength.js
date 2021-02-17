import React, { useEffect, useState } from "react";
import "react-day-picker/lib/style.css";
import { Link } from "react-router-dom";
import { Button, GoBack } from "../Buttons/Buttons";
import { FormContainer, Header, NumInput, TopCorner } from "../typography";
import colors from "../../utils/colors";
import topcorner from "../../images/corner-blue.png";

import useCrud from "../../hooks/useCrud";
import { BottomPattWarp } from "../containers";

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
  };

  return (
    <BottomPattWarp>
      <Link to="/login">
        <GoBack />
      </Link>
      <TopCorner src={topcorner} alt="top-right-corner" />
      <FormContainer>
        <Header color={colors.primary}>
          What is your average cycle length?
          <form>
            <NumInput
              className="form"
              type="number"
              min="20"
              max="45"
              value={input}
              onChange={(event) => heandleChange(event)}
            />
          </form>
        </Header>
        <Link to="/user/period">
          <Button
            margin={"200px auto 0 auto"}
            onClick={() => onUpdate({ cycle_length: input })}
          >
            Next
          </Button>
        </Link>
      </FormContainer>
    </BottomPattWarp>
  );
}
