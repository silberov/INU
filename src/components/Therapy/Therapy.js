import styled from "styled-components";
//import colors from "../../utils/colors";
import { P, SubHeader } from "../typography";
import Button, { Moon } from "../Buttons/Buttons";
import { therapyFiles } from "./moons";
import colors from "../utils/colors";

const SectionWraper = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;



function Therapy({quarter}) {
    return (
        <>
            <SubHeader margin={"30px auto 10px auto"}>{quarter.title}</SubHeader>
            <SectionWraper>
                {quarter.data.map(item => <Button  modifiers={["therapy", quarter.title === "Second Quarter" && "blue", quarter.title === "Third Quarter" && "orange"]}>
                {item.text}
                <Moon src={item.icon} alt="*" />
                </Button>)}
            </SectionWraper>
        </>
    )
}

export default Therapy;
