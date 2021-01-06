import React, { useState } from "react";
<<<<<<< HEAD:src/components/Login/ResetPassword.js
import {CustomInput, H1, FormContainer,P} from "../utils/typography"
import  Buttons from "../Buttons/Buttons"
=======
import {CustomInput, MainHeader, FormContainer,P} from "./typography"
import  Buttons from "./Buttons/Buttons"
>>>>>>> 80ce32d60068fd6e5dbc4a36bdd2486df42e42ff:src/components/ResetPassword.js
import { postDataToPath } from "../utils/api";
import colors from "../utils/colors";
import queryString from 'query-string';
import { Redirect } from "react-router-dom";



export default function ResetPassword(props){
 const  [newPassword, setNewPassword]= useState("")
 const  [repeatPassword, setRepeatPassword]= useState("")
 const [message, setMessage] = useState("");
 const [resetSuccessful, setResetSuccessful] = useState(false);
  
  const resetToken = queryString.parse(props.location.search)
  console.log(resetToken)

 const handleSubmit = async (evt) => {
  evt.preventDefault();
const response = await postDataToPath("/user/reset-password", { newPassword,repeatPassword, resetToken: resetToken.token});
  if (response.error) {
    setMessage(response.error);
  } else {
    setMessage(response.message);
    setTimeout(() => {
      setResetSuccessful(true)
    }, 1500);
  }
};

if (resetSuccessful) {
  return <Redirect to={"/"} />;
}

return (<FormContainer>
<MainHeader>Please Enter New Password</MainHeader>
<CustomInput saveInput={setNewPassword} placeholder="New Password" type="password" />

<CustomInput saveInput={setRepeatPassword} placeholder="Repeat Password" type="password" />
<Buttons runOnClick={handleSubmit}> Submit </Buttons>
<P color={colors.importantMessage}>{message}</P>

</FormContainer>
)



}