import React, { useState } from "react";
import  "./Login.css"
import CustomInput from "./inputs/CustomInput";
import Button from '../components/Buttons/Buttons.js'



export default function Login() {






  
  return<div className="login_container">
    <h3> Enter Your Login Details</h3>
   <CustomInput placeholder="Email" type="text" />
   <CustomInput placeholder="Password" type="password"/>
   <br></br>
   <br></br>
   
   
   <Button>Login</Button>
   </div>
}
