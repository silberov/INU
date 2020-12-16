import React from "react";

import { H3, CustomInput, FormContainer } from "../utils/typography";

import Button from "./Buttons/Buttons.js";

export default function ResetPassword() {
  return (
    <FormContainer>
      <H3>
        <strong> Reset Your Password</strong>
      </H3>

      <CustomInput placeholder="Full Name" type="text" />

      <CustomInput placeholder="Email" type="text" />

      <Button>Reset</Button>
    </FormContainer>
  );
}
