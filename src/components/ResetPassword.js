import React from "react";

import { H3, CustomInput } from "../utils/typography";

import Button from "./Buttons/Buttons.js";

export default function ResetPassword() {
  return (
    <div className="form-container">
      <H3>
        <strong> Reset Your Password</strong>
      </H3>

      <CustomInput placeholder="Full Name" type="text" />
      <br></br>
      <CustomInput placeholder="Email" type="text" />
      <br></br>

      <br></br>
      <div>
        <Button>Reset</Button>
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
