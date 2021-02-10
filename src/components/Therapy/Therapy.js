import styled from "styled-components";
//import colors from "../../utils/colors";
import { SubHeader } from "../typography";
import Button, { Moon } from "../Buttons/Buttons";
import { useState } from "react";
import { Redirect } from "react-router-dom";

//import { therapyFiles } from "./moons";

export const SectionWraper = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Therapy({ quarter, onTherapy }) {
  const [redirect, setRedirect] = useState(false);

  console.log("hello");
  return (
    <>
      {redirect && <Redirect to="/player" />}
      <SubHeader margin={"10px auto 10px auto"}>{quarter.title}</SubHeader>
      <SectionWraper>
        {quarter &&
          quarter.files.map((item, index) => (
            <Button
              key={index}
              value={Number(item.order) - 1}
              modifiers={[
                "therapy",
                quarter.title === "Second Quarter" && "blue",
                quarter.title === "Third Quarter" && "orange",
                quarter.title === "Forth Quarter" && "pink",
              ]}
              onClick={(e) => {
                console.log("click");
                onTherapy(Number(e.target.value));
                setRedirect(true);
              }}
            >
              {item.title}
              <Moon src={item.icon} alt="*" />
            </Button>
          ))}
      </SectionWraper>
    </>
  );
}

export default Therapy;
