import React, { useState } from "react";

import { SubHeader, CustomInput, FormContainer, P } from "../typography";
import colors from "../utils/colors";

import { postDataToPath } from "../utils/api";
import { Link, Redirect } from "react-router-dom";

import Button from "../Buttons/Buttons.js";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [forgetPassword, setForgetPassword] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await postDataToPath("/api/auth/forgot-password", {
      email,
      name,
    });
    if (response.error) {
      setErrorMessage(response.error);
    } else {
      setErrorMessage(response.message);
      setTimeout(() => {
        setForgetPassword(true);
      }, 2000);
    }
  };

  if (forgetPassword) {
    return <Redirect to={"/login"} />;
  }

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
