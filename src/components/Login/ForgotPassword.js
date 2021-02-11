import React, { useState } from "react";

import {
  SubHeader,
  CustomInput,
  FormContainer,
  P,
  MainHeader,
} from "../typography";
import colors from "../../utils/colors";

import { postDataToPath } from "../../utils/api";
import { Link, Redirect } from "react-router-dom";

import Button from "../Buttons/Buttons.js";
import { BottomPattWarp } from "../containers";

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
    <BottomPattWarp>
      <MainHeader margin={"120px auto 10px auto"}>
        {" "}
        Forgot Your Password?
        <br /> Please enter details
      </MainHeader>

      <CustomInput saveInput={setName} placeholder="Full Name" type="text" />

      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />

      <Button
        onClick={handleSubmit}
        modifiers={[name === "" && email === "" && "disabled", "oneSpace"]}
      >
        Reset
      </Button>

      <P color={colors.importantMessage}>{errorMessage}</P>
    </BottomPattWarp>
  );
}
