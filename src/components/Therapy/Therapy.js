import styled from "styled-components";
import colors from "../../utils/colors";
import { P, SubHeader } from "../typography";
import Button, { Moon } from "../Buttons/Buttons";
import { therapyFiles } from "./moons";

const SectionWraper = styled.div`
  max-width: 800px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const TherapyWraper = styled.div`
  padding: 35px;
  text-align: left;
`;

function Therapy({quarter}) {
    //console.log(props)
    return (
        <>
            <SubHeader margin={"30px auto 10px auto"}>{quarter.title}</SubHeader>
            <SectionWraper>
                {quarter.data.map(item => <Button modifiers={["therapy"]}>
                {item.text}
                <Moon src={item.icon} alt="*" />
                </Button>)}
            </SectionWraper>
        </>
    )
}

function TherapyContainer() {
  return (
    <TherapyWraper>
      {therapyFiles.map((item) => <Therapy quarter={item} />)}
    </TherapyWraper>
  );
}



export default TherapyContainer;
