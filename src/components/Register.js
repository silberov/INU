import React from "react";
// import CustomInput from "./inputs/CustomInput";
import {
  H3,
  CustomInput,
  primaryFont,
  FormContainer,
} from "../utils/typography";

import Button from "../components/Buttons/Buttons.js";

export default function Register() {
  return (
    <FormContainer>
      <H3>
        <strong>Create Your Profile</strong>
      </H3>
      <CustomInput placeholder="Name" type="text" />

      <CustomInput placeholder="Email" type="text" />

      <CustomInput placeholder="Password" type="password" />

      <Button>Register</Button>
    </FormContainer>
  );
}
