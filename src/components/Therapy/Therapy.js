import styled from "styled-components";
//import colors from "../../utils/colors";
import { SubHeader } from "../typography";
import Button, { Moon } from "../Buttons/Buttons";
import { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

//import { therapyFiles } from "./moons";

export const SectionWraper = styled.div`
  /* max-width: 800px; */
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Therapy({ quarter, setCurrentTherapy }, props) {
  console.log("rerender");
  //console.log("type", typeof setCurrentTherapy);
  let history = useHistory();

  const heandleClick = (therapyNum) => {
    //console.log("click", therapyNum);
    setCurrentTherapy(therapyNum);
    history.push("/player");
    //setRedirect(true);
  };
  return (
    <>
      <SubHeader margin={"10px auto 10px auto"}>{quarter.title}</SubHeader>
      <SectionWraper>
        {quarter &&
          quarter.files.map((item, index) => (
            <Button
              key={index}
              //value={index}
              value={item.order - 1}
              modifiers={[
                "therapy",
                quarter.title === "Second Quarter" && "blue",
                quarter.title === "Third Quarter" && "orange",
                quarter.title === "Forth Quarter" && "pink",
              ]}
              onClick={() => heandleClick(item.order - 1)}
              //onClick={(e) => console.log("click", item.order - 1)}
            >
              {item.title}
              <Moon
                src={item.icon}
                alt="*"
                onClick={() => heandleClick(item.order - 1)}
              />
            </Button>
          ))}
      </SectionWraper>
    </>
  );
}

export default Therapy;
