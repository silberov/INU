import styled from "styled-components";
//import colors from "../../utils/colors";
import { P, SubHeader } from "../typography";
import Button, { Moon } from "../Buttons/Buttons";
import { useState } from "react";


//import { therapyFiles } from "./moons";


export const SectionWraper = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function Therapy({ quarter }) {
  const [redirect, setRedirect ] = useState(false)
  return (
    <>
      <SubHeader margin={"30px auto 10px auto"}>{quarter.title}</SubHeader>
      <SectionWraper>
        {quarter.data.map((item) => (
          <Button
            modifiers={[
              "therapy",
              quarter.title === "Second Quarter" && "blue",
              quarter.title === "Third Quarter" && "orange",
            ]}
            onClick={()=>{}}
          >
            {item.text}
            <Moon src={item.icon} alt="*" />
          </Button>
        ))}
      </SectionWraper>
    </>
  );
}

export default Therapy;
