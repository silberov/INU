import React, { useState } from "react";
import colors from "../../utils/colors";
import { SubHeader, CustomInput, FormContainer, P } from "../typography";

import Button from "../Buttons/Buttons.js";
import { Link } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!name || !email) {
      setMessage("Please enter your details");
    }
  };

  return (
    <FormContainer>
      <SubHeader>
        <strong>Create Your Profile</strong>
      </SubHeader>
      <CustomInput saveInput={setName} placeholder="Name" type="text" />

      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />

      {!name || !email ? (
        <Button runOnClick={handleSubmit}>Next</Button>
      ) : (
        <Link
          to={{
            pathname: "/user/register-2",
            state: {
              name,
              email,
            },
          }}
        >
          <Button>Next</Button>
        </Link>
      )}

      <P color={colors.importantMessage}>{message}</P>
    </FormContainer>
  );
}
