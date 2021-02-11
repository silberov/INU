import React, { useState } from "react";

import Button from "../Buttons/Buttons";
import { Link, Redirect } from "react-router-dom";

import {
  SubHeader,
  CustomInput,
  FormContainer,
  P,
  Header,
  MainHeader,
} from "../typography";
import colors from "../../utils/colors";
import { postDataToPath } from "../../utils/api";
import { BottomPattWarp } from "../containers";

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
    <BottomPattWarp>
      <MainHeader margin={"180px auto 0px auto"}>
        Enter Your Login
        <br />
        Details
      </MainHeader>
      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />
      <CustomInput
        style={{ marginBottom: "120px" }}
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />
      <Button
        onClick={handleSubmit}
        modifiers={[password === "" && email === "" && "disabled"]}
      >
        Login
      </Button>
      <Link to="/forgot-password" style={{ textDecoration: "none" }}>
        <P>Forget Password</P>
      </Link>
      <P color={colors.importantMessage}>{message}</P>
    </BottomPattWarp>
  );
}
