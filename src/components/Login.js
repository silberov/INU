
import  "./Login.css"
import CustomInput from "./inputs/CustomInput";
import Button from '../components/Buttons/Buttons.js'
// import colors from './utils/colors';

import {H1, primaryFont }  from '../utils/typography';
import colors from "../utils/colors";
import Typography from "typography";




export default function Login() {







  return<div className="login_container">
    <H1>Enter Your Login Details</H1>
   <CustomInput placeholder="Email" type="text" />
   <CustomInput placeholder="Password" type="password"/>
   <br></br>
   <br></br>
   <Button>Login</Button>
   <br></br>
   <br></br>
   <a href="" colors={colors.primary} id="password-reset" >Forget Password</a>
  
   </div>
}
