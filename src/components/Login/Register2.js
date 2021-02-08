import React, { useState } from "react";
import colors from "../../utils/colors";
import { SubHeader, CustomInput, FormContainer, P } from "../typography";

import Button from "../Buttons/Buttons.js";
import { postDataToPath } from "../../utils/api";
import { Redirect } from "react-router-dom";

export default function Register2(props) {
  const { name, email } = props?.location?.state || {};

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(undefined);
  const [shouldLogin, setShouldLogin] = useState(false);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log("workig");
    const response = await postDataToPath("/api/user/create", {
      name,
      email,
      password,
      repeatPassword,
    });

    if (response.error) {
      setMessage(response.error);
      if (response.error.includes("login")) {
        setTimeout(() => {
          setShouldLogin(true);
        }, 2000);
      }
    } else {
      setMessage("You are registered!");
      // TODO log in user and use it somehow. This part comes later.
      setTimeout(() => {
        setUser(response);
      }, 2000);
    }
  };

  if (!email || !name) {
    return <Redirect to="/user/register" />;
  }

  if (user || shouldLogin) {
    return <Redirect to="/login" />;
  }

  return (
    <FormContainer>
      <SubHeader>Select Your password</SubHeader>

      <CustomInput
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />
      <CustomInput
        saveInput={setRepeatPassword}
        placeholder="Repeat Password"
        type="password"
      />

      <Button onClick={handleSubmit}>Register</Button>

      <P color={colors.importantMessage}>{message}</P>
    </FormContainer>
  );
}
