import React, { useState } from "react";

import Button from "../Buttons/Buttons";
import { Link, Redirect } from "react-router-dom";

import { H3, CustomInput, FormContainer, P } from "../utils/typography";
import colors from "../utils/colors";
import { postDataToPath } from "../utils/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [user, setUser] = useState(undefined);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setMessage("");
    const response = await postDataToPath("/user/login", { email, password });
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
        <Button>Register</Button>
      </Link>

      <Link to="/user/forgot-password">
        <P>Forget Password</P>
      </Link>
      <P color={colors.importantMessage}>{message}</P>
    </FormContainer>
  );
}
