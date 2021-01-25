import React from "react";
import { P, SubHeader, MainHeader } from "../typography";
import {DashboardDiv}from './TheraphySuggestions';
import styled from 'styled-components';

//CSS

 



export default function DailySuggestions() {
  return (
    <DashboardDiv>
      <SubHeader>Daily suggestions</SubHeader>
      
      <P>
        During this week, your ability to rotate three dimensional images
        increases.
        <br></br>This will come in handy when you’re navigating a new route,
        parking in a tight spot, or building that IKEA furniture.
      </P>
    </DashboardDiv>
  );
}
