import React from "react";

import { H1, CustomInput, FormContainer } from "../utils/typography";

import Button from "./Buttons/Buttons.js";

export default function ResetPassword() {
  return (
    <FormContainer>
      <H1>
        <strong> Reset Your Password</strong>
      </H1>

      <CustomInput placeholder="Full Name" type="text" />

      <CustomInput placeholder="Email" type="text" />

      <Button>Reset</Button>
    </FormContainer>
  );
}
