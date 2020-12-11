import React  from "react";
import './CustomInput.css';


export default function Input(props) {






  return(
    <div className="input_text">
  
   <input placeholder={props.placeholder} type={props.type}/>
 
 
    </div>
  )
};