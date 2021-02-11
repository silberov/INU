import React, { useState } from "react";
import colors from "../../utils/colors";
import {
  SubHeader,
  CustomInput,
  FormContainer,
  P,
  Header,
  MainHeader,
} from "../typography";

import Button from "../Buttons/Buttons.js";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Checkbox from "../checkbox";
import { BottomPattWarp } from "../containers";

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
    <BottomPattWarp>
      <MainHeader margin={"180px auto 10px auto"}>
        Create Your Profile
      </MainHeader>
      <CustomInput saveInput={setName} placeholder="Name" type="text" />

      <CustomInput saveInput={setEmail} placeholder="Email" type="text" />

      {!name || !email ? (
        <Button
          modifiers={[name === "" && email === "" && "disabled", "oneSpace"]}
          onClick={handleSubmit}
        >
          Next
        </Button>
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
          <Button
            modifiers={[name === "" && email === "" && "disabled", "oneSpace"]}
          >
            Next
          </Button>
        </Link>
      )}
      <Checkbox />
      <P color={colors.importantMessage}>{message}</P>
    </BottomPattWarp>
  );
}
