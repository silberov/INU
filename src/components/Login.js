import React, { useState } from "react";

import Button from "../components/Buttons/Buttons.js";
import { Link } from "react-router-dom";

import { H3, CustomInput, FormContainer, P } from "../utils/typography";
import colors from "../utils/colors";
import { postDataToPath } from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await postDataToPath("user/login", { email, password });
    if (response.error) {
      setErrorMessage(response.error);
    } else {
      // TODO log in user and use it somehow. This part comes later.
      const user = response;
    }
  };

  return (
    <FormContainer>
      <H3>
        <strong>Enter Your Login Details</strong>
      </H3>
      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />
      <CustomInput
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />
      <Button runOnClick={handleSubmit}>Login</Button>

      <Link to="/user/register">
        <Button> Register</Button>
      </Link>

      <Link to="/user/reset-password">
        <P> Forget Password</P>
      </Link>

       

      <P color={colors.importantMessage}>{errorMessage}</P>
    </FormContainer>
  );
}
