import "./Login.css";

import Button from "../components/Buttons/Buttons.js";
// import colors from './utils/colors';

import { H3, CustomInput } from "../utils/typography";
// import colors from "../utils/colors";

export default function Login() {
  return (
    <div className="form-container">
      <img srv=""></img>
      <H3>
        <strong>Enter Your Login Details</strong>
      </H3>
      <div>
        {" "}
        <CustomInput placeholder="Email" type="text" />
      </div>
      <div>
        {" "}
        <CustomInput placeholder="Password" type="password" />
      </div>

      <br></br>
      <br></br>
      <Button>Login</Button>
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
