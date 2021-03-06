import React, { useState } from "react";
import { CustomInput, MainHeader, P } from "../typography";
import Buttons from "../Buttons/Buttons";
import { postDataToPath } from "../../utils/api";
import colors from "../../utils/colors";
import queryString from "query-string";
import { Redirect } from "react-router-dom";
import { BottomPattWarp } from "../containers";

export default function ResetPassword(props) {
  const [newPassword, setNewPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [message, setMessage] = useState("");
  const [resetSuccessful, setResetSuccessful] = useState(false);

  const resetToken = queryString.parse(props.location.search);
  console.log(resetToken);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    const response = await postDataToPath("/api/auth/reset-password", {
      newPassword,
      repeatPassword,
      resetToken: resetToken.token,
    });
    if (response.error) {
      setMessage(response.error);
    } else {
      setMessage(response.message);
      setTimeout(() => {
        setResetSuccessful(true);
      }, 1500);
    }
  };

  if (resetSuccessful) {
    return <Redirect to="/login" />;
  }

  return (
    <BottomPattWarp>
      <MainHeader margin={"120px auto 10px auto"}>
        Please Enter New Password
      </MainHeader>
      <CustomInput
        saveInput={setNewPassword}
        placeholder="New Password"
        type="password"
      />

      <CustomInput
        saveInput={setRepeatPassword}
        placeholder="Repeat Password"
        type="password"
      />
      <Buttons
        onClick={handleSubmit}
        modifiers={[
          newPassword === "" || (repeatPassword === "" && "disabled"),
          "oneSpace",
        ]}
      >
        {" "}
        Submit{" "}
      </Buttons>
      <P color={colors.importantMessage}>{message}</P>
    </BottomPattWarp>
  );
}
