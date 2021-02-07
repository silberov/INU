import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Cycle from "../../images/nav/cycle-icon-selected.png";
import Selfcare from "../../images/nav/selfcare-icon-selected.png";

//CSS

const NavbarDiv = styled.div`
  overflow: hidden;
  background-color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 65px;
  margin: auto;
`;

const MenuIcons = styled.ul`
  display: flex;
  justify-content: space-evenly;
`;

function Navbar() {
  return (
    <NavbarDiv>
      <MenuIcons>
        <Link>
          <img src={Cycle} />
        </Link>
        <Link>+</Link>
        <Link>
          <img src={Selfcare} />
        </Link>
      </MenuIcons>
    </NavbarDiv>
  );
}

export default Navbar;
