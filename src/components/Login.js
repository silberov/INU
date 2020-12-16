import React, { useState } from "react";

import Button from "../components/Buttons/Buttons.js";
// import colors from './utils/colors';

import { H3, CustomInput, FormContainer } from "../utils/typography";
// import colors from "../utils/colors";
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

      <Button>Register</Button>
      <a href="" id="password-reset">
        Forget Password
      </a>
    </FormContainer>
  );
}
