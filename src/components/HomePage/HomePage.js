import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { P } from "../typography";
import Button from "../Buttons/Buttons";
import { BottomPattWarp } from "../containers";

import applogo from "../../images/logo/fulllogo.png";

const LogoHomePage = styled.img`
  width: 111px;
  display: block;
  margin: 278px auto 78px auto;
`;

export default function HomePage() {
  return (
    <BottomPattWarp>
      <LogoHomePage src={applogo} alt="logo" />
      <Link to="/user/register">
        <Button>Register</Button>
      </Link>

      <Link to="/login" style={{ textDecoration: "none" }}>
        <P modifiers={["normal"]}>Log in</P>
      </Link>
    </BottomPattWarp>
  );
}
