import React from "react";

import Button from "../Buttons/Buttons";
import { Link } from "react-router-dom";

import { FormContainer, P, LogoHomePage, BottomPattern } from "../typography";
import colors from "../utils/colors";
import applogo from "../../images/applogo.png";
import bottompattern from "../../images/bottompattern.png";

export default function HomePage() {
  return (
    <div>
      <FormContainer>
        <LogoHomePage src={applogo} alt="logo" />
        <Link to="/auth/register">
          <Button>Register</Button>
        </Link>

        <Link to="/login">
          <P color={colors.primary}>Log in</P>
        </Link>
        <BottomPattern src={bottompattern} alt="bottom-pattren" />
      </FormContainer>
    </div>
  );
}
