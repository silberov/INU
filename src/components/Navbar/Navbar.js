import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CycleIcon from "../../images/nav/cycle-icon.png";
import CycleSelected from "../../images/nav/cycle-icon-selected.png";
import SelfcareIcon from "../../images/nav/selfcare-icon.png";
import SelfcareSelected from "../../images/nav/selfcare-icon-selected.png";

import plus from "../../images/nav/cross.png";
import { P } from "../typography";
import { shadows } from "../../utils/effects";
import colors from "../../utils/colors";
// import { PlusButton } from "../Buttons/Buttons";

//CSS

const NavbarDiv = styled.div`
  background-color: ${colors.white};
  position: fixed;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 71px;
  filter: ${shadows.card};
  display: flex;
  justify-content: space-evenly;
`;

const IconBox = styled.div`
  width: 66px;
  margin: 10px;
  text-align: center;
`;

const MenuIcons = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: center;
`;

const Circle = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 100px;
  background: ${colors.buleGrad};
  display: flex;
  align-items: center;
  justify-content: center;
  filter: ${shadows.button};
`;

const PlusButton = () => {
  return (
    <Circle>
      <img src={plus} alt="add" />
    </Circle>
  );
};

function Navbar({ selected }) {
  console.log("selected", selected);
  return (
    <NavbarDiv>
      <Link style={{ textDecoration: "none" }} to="/user/dashboard">
        <IconBox>
          <img
            src={selected === "cycle" ? `${CycleSelected}` : `${CycleIcon}`}
            alt="cycle-icon"
          />

          <P modifiers={[selected === "cycle" && "purple", "xsmall", "nav"]}>
            Cycle
          </P>
        </IconBox>
      </Link>
      <Link
        style={{ position: "relative", top: "-15px" }}
        to="/user/updateperiod"
      >
        <PlusButton />
      </Link>
      <Link style={{ textDecoration: "none" }} to="/therapy">
        <IconBox>
          <img
            src={
              selected === "selfcare"
                ? `${SelfcareSelected}`
                : `${SelfcareIcon}`
            }
            alt="selfcare-icon"
          />

          <P modifiers={[selected === "selfcare" && "purple", "xsmall", "nav"]}>
            Selfcare
          </P>
        </IconBox>
      </Link>
    </NavbarDiv>
  );
}

export default Navbar;
