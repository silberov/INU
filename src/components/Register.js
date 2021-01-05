import React, { useState } from "react";
import colors from "../utils/colors";
import { SubHeader, CustomInput, FormContainer, P } from "./typography";

import Button from "../components/Buttons/Buttons.js";
import { postDataToPath } from "../utils/api";
import { Redirect } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(undefined);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await postDataToPath("/user/create", {
      name,
      email,
      password,
    });

    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage("You are registered!");
      // TODO log in user and use it somehow. This part comes later.
      setTimeout(() => {
        setUser(response);
      }, 2000);
    }
  };

  if (user) {
    return <Redirect to={{ redirect: "/" }} />;
  }

  return (
    <FormContainer>
      <SubHeader>
        <strong>Create Your Profile</strong>
      </SubHeader>
      <CustomInput saveInput={setName} placeholder="Name" type="text" />

      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />

      <CustomInput
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />

      <Button runOnClick={handleSubmit}>Register</Button>

      <P color={colors.importantMessage}>{message}</P>
    </FormContainer>
  );
}
