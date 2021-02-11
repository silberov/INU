import React from "react";

import Button from "../Buttons/Buttons";
import { Link } from "react-router-dom";

import { P, BottomPattern } from "../typography";

import applogo from "../../images/logo/fulllogo.png";
import styled from "styled-components";
import { BottomPattWarp } from "../containers";

// import bottompattern from "../../images/bottompattern.png";

const LogoHomePage = styled.img`
  width: 111px;
  display: block;
  margin: 278px auto 78px auto;
`;

export default function HomePage() {
  return (
    // <div style={{ maxWidth: "320px", margin: "auto", textAlign: "center" }}>
    <BottomPattWarp>
      <LogoHomePage src={applogo} alt="logo" />
      <Link to="/user/register">
        <Button>Register</Button>
      </Link>

      <Link to="/login" style={{ textDecoration: "none" }}>
        <P modifiers={["normal"]}>Log in</P>
      </Link>
    </BottomPattWarp>
    // </div>
  );
}
