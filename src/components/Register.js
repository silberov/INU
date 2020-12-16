import React, { useState } from "react";
import colors from "../utils/colors";
import { H3, CustomInput, FormContainer, P } from "../utils/typography";

import Button from "../components/Buttons/Buttons.js";
import { postDataToPath } from "../utils/api";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await postDataToPath("user/create", {
      name,
      email,
      password,
    });

    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage("You are registered!");
      // TODO log in user and use it somehow. This part comes later.
      const user = response;
    }
  };

  return (
    <FormContainer>
      <H3>
        <strong>Create Your Profile</strong>
      </H3>
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
