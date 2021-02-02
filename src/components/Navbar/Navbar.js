import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import CycleIcon from "../../images/nav/cycle-icon.png";
import SelfcareIcon from "../../images/nav/selfcare-icon.png";
import AddButton from "../../images/nav/addsymptoms@2x.png";

//CSS

const NavbarDiv = styled.div`
  background-color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  height: 65px;
  margin: auto;
`;

const MenuIcons = styled.ul`
  display: flex;
  justify-content: space-evenly;
  text-align: center;
`;

function Navbar() {
  return (
    <NavbarDiv>
      <MenuIcons>
        <Link to="/user/dashboard">
          <img src={CycleIcon} alt="cycle-icon" />
          <br /> Cycle
        </Link>
        <Link>
          <img src={AddButton} alt="add-button" />
        </Link>
        <Link to="/therapy">
          <img src={SelfcareIcon} alt="selfcare-icon" />
          <br />
          Selfcare
        </Link>
        {/* <Link><li>Diet</li></Link>
                    <Link><li>News</li></Link> */}
      </MenuIcons>
    </NavbarDiv>
  );
}

export default Navbar;
