import styled from "styled-components";
//import colors from "../../utils/colors";
import { P, SubHeader } from "../typography";
import Button, { Moon } from "../Buttons/Buttons";
import { therapyFiles } from "./moons";
import colors from "../../utils/colors";
import Therapy from "./Therapy";

const TherapyWraper = styled.div`
  padding: 27px;
  text-align: left;
`;

function TherapyContainer() {
  return (
    <TherapyWraper>
      {therapyFiles && therapyFiles.map((block) => <Therapy quarter={block} />)}
    </TherapyWraper>
  );
}

export default TherapyContainer;
