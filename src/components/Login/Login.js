import React, { useState } from "react";

import Button, { GoBack } from "../Buttons/Buttons";
import { Link, Redirect } from "react-router-dom";

import { CustomInput, P, MainHeader } from "../typography";
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
    if (email && password) {
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
    } else {
    }
    setMessage("");
  };

  if (user) {
    return <Redirect to={"/user/cycle"} />;
  }

  return (
    <BottomPattWarp>
      <Link to="/">
        <GoBack />
      </Link>
      <MainHeader margin={"180px auto 0px auto"}>
        Log into your
        <br />
        profile
      </MainHeader>
      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />
      <br />
      <CustomInput
        saveInput={setPassword}
        placeholder="Password"
        type="password"
      />{" "}
      <br />
      <Button
        margin={"120px auto 22px auto"}
        onClick={handleSubmit}
        modifiers={[password === "" || email === "" ? "disabled" : ""]}
      >
        Login
      </Button>
      <Link
        to="/forgot-password"
        style={{ textDecorationColor: `${colors.lightGray}` }}
      >
        <P modifiers={["gray3"]}>Forget Password</P>
      </Link>
      <P color={colors.importantMessage}>{message}</P>
    </BottomPattWarp>
  );
}
