import React, { useState } from "react";

import { SubHeader, CustomInput, FormContainer, P } from "./typography";
import colors from "../utils/colors";

import { postDataToPath } from "../utils/api";

import Button from "../Buttons/Buttons.js";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
  const response = await postDataToPath("/user/forgot-password", { email, name });
    if (response.error) {
      setErrorMessage(response.error);
    } else {
      setErrorMessage(response.message)
    }
  };

  return (
    <FormContainer>
      <SubHeader>
        <strong> Forgot Your Password? Please enter details</strong>
      </SubHeader>

      <CustomInput saveInput={setName} placeholder="Full Name" type="text" />

      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />

      <Button runOnClick={handleSubmit}>Reset</Button>
      <P color={colors.importantMessage}>{errorMessage}</P>
    </FormContainer>
  );
}
