import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CycleIcon from "../../images/nav/cycle-icon.png";
import SelfcareIcon from "../../images/nav/selfcare-icon.png";
import AddButton from "../../images/nav/addsymptoms@2x.png";
import { P } from "../typography";
import { shadows } from "../../utils/effects";
import colors from "../../utils/colors";

//CSS

const NavbarDiv = styled.div`
  background-color: ${colors.white};
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 71px;
  margin: auto;
  filter: ${shadows.card};
  display: flex;
  justify-content: space-around;
`;

const IconBox = styled.div`
  margin: 10px;
  text-align: center;
`;

const MenuIcons = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-end;
  text-align: center;
`;

function Navbar() {
  return (
    <NavbarDiv>
      {/* <MenuIcons> */}
      <Link style={{ textDecoration: "none" }} to="/user/dashboard">
        <IconBox>
          <img src={CycleIcon} alt="cycle-icon" />
          {/* <br />
          jsdkfbhs */}
          <P modifiers={["xsmall", "nav"]}>Cycle</P>
        </IconBox>
      </Link>
      <Link>
        <img src={AddButton} alt="add-button" />
      </Link>
      <Link style={{ textDecoration: "none" }} to="/therapy">
        <IconBox>
          <img src={SelfcareIcon} alt="selfcare-icon" />

          <P modifiers={["xsmall", "nav"]}>Selfcare</P>
        </IconBox>
      </Link>
      {/* <Link><li>Diet</li></Link>
                    <Link><li>News</li></Link> */}
      {/* </MenuIcons> */}
    </NavbarDiv>
  );
}

export default Navbar;
