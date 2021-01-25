import React from "react";

import Button from "../Buttons/Buttons";
import { Link } from "react-router-dom";

import { FormContainer, P, LogoHomePage, BottomPattern } from "../typography";
<<<<<<< HEAD
import colors from "../utils/colors";
// import applogo from "../../images/applogo.png";
// import bottompattern from "../../images/bottompattern.png";
=======
import colors from "../../utils/colors";
import applogo from "../../images/applogo.png";
import bottompattern from "../../images/bottompattern.png";
>>>>>>> 01e38e4d3753c1672951175a6c30f5875d94489a

export default function HomePage() {
  return (
    <div>
      <FormContainer>
<<<<<<< HEAD
        {/* <LogoHomePage src={applogo} alt="logo" /> */}
        <Link to="/user/register">
=======
        <LogoHomePage src={applogo} alt="logo" />
        <Link to="/auth/register">
>>>>>>> 01e38e4d3753c1672951175a6c30f5875d94489a
          <Button>Register</Button>
        </Link>

        <Link to="/login">
          <P color={colors.primary}>Log in</P>
        </Link>
        {/* <BottomPattern src={bottompattern} alt="bottom-pattren" /> */}
      </FormContainer>
    </div>
  );
}
