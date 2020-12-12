import React from "react";
// import CustomInput from "./inputs/CustomInput";
import { H3, CustomInput, primaryFont } from "../utils/typography";

import Button from "../components/Buttons/Buttons.js";

export default function Register() {
  return (
    <div className="form-container">
      <H3>
        <strong>Create Your Profile</strong>
      </H3>
      <CustomInput placeholder="Name" type="text" />

      <br></br>
      <CustomInput placeholder="Email" type="text" />
      <br></br>

      <CustomInput placeholder="Password" type="password" />

      <br></br>

      <br></br>
      <div>
        <Button>Register</Button>
      </div>
      <br></br>
      <div>
      
        
        <a href="" id="password-reset">
          Forget Password
        </a>
      </div>
    </div>
  );
}
