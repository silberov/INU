import React from "react";

import Button from "../Buttons/Buttons";
import { Link } from "react-router-dom";

import {
  SubHeader,
  CustomInput,
  FormContainer,
  P,
  LogoHomePage,
  BottomPattern,
} from "../typography";
import colors from "../utils/colors";
import applogo from "../../images/applogo.png";
import bottompattern from "../../images/bottompattern.png";

export default function HomePage() {
  return (
    <div>
      <FormContainer>
        <LogoHomePage src={applogo} alt="logo" />
        <Link to="/user/register">
          <Button>Register</Button>
        </Link>

        <Link to="/login">
          <P>Log in</P>
        </Link>
      </FormContainer>
      <BottomPattern src={bottompattern} alt="bottom-pattren" />
    </div>
  );
}
