import React, { useState } from "react";

import Button from "../Buttons/Buttons";
import { Link, Redirect } from "react-router-dom";

import { SubHeader, CustomInput, FormContainer, P } from "../typography";
import colors from "../../utils/colors";
import { postDataToPath } from "../../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(undefined);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setMessage("");
    const response = await postDataToPath("/api/auth/login", {
      email,
      password,
    });
    if (response.error) {
      setMessage(response.error);
    } else {
      setTimeout(() => {
        setUser(response);
      }, 2000);

      setMessage("");
    }
  };

  if (user) {
    return <Redirect to={"/user/dashboard"} />;
  }

  return (
    <FormContainer>
      <SubHeader>
        <strong>Enter Your Login Details</strong>
      </SubHeader>
      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />
      <CustomInput
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />
      <Button onClick={handleSubmit}>Login</Button>
      <Link to="/forgot-password">
        <P>Forget Password</P>
      </Link>
      <P color={colors.importantMessage}>{message}</P>
    </FormContainer>
  );
}
